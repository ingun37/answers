{-# LANGUAGE DeriveGeneric #-}

module Lib (parse) where

import System.Exit ( exitWith, ExitCode(ExitFailure, ExitSuccess) )
import Crypto.Hash.SHA1 as SHA ( hash )
import System.Directory.Tree
    ( readDirectoryWithL, AnchoredDirTree((:/)), DirTree(Dir, File), filterDir )
import Control.Monad ( join )
import Data.List.Split ()
import Data.Map ( fromList, Map )
import Data.Aeson ( encode, ToJSON )
import GHC.Generics ( Generic )
import qualified Data.ByteString.Char8 as B
import qualified Data.ByteString.Lazy.Char8 as Bz
import qualified Data.ByteString.Lazy.UTF8 as BzUTF8
import System.FilePath.Posix (takeFileName, takeBaseName, joinPath, (</>))
import qualified Data.ByteString.Base16 as B16
import qualified Text.RegexPR as R

data Item = Item {
    title :: String,
    sha1 :: String,
    attr :: (Map String String)
    } deriving (Generic, Show)

data Node = Node {
path :: String,
item :: Item,
kids :: [Item],
parentSha1 :: String
} deriving (Generic, Show)

data Tr = Tr {
    node :: Node,
    children :: [Tr]
    }

sha1InHex = B.unpack . B16.encode . SHA.hash . B.pack
--it generates tree from bottom-up (dynamic programming)
makeTr :: String -> String -> [DirTree String] -> Tr
makeTr path parentSha1 entries =
    let sha1 = sha1InHex path
        kidTrs = [makeTr (path </> title) sha1 entries' | Dir title entries' <- entries]
        kidItems = Prelude.map (item . node) kidTrs
        thisItem = Item (takeFileName path) sha1 (fromList [(takeBaseName name', jsonPipe file) | File name' file <- entries])
        thisNode = Node path thisItem kidItems parentSha1
    in Tr thisNode kidTrs

makeNodes :: Tr -> [Node]
makeNodes (Tr node children) = join (Prelude.map makeNodes children) ++ [node]

instance ToJSON Item
instance ToJSON Node

writeJson :: String -> [Node] -> IO ()
writeJson _ [] = return ()
writeJson dst (x:xs) = do 
    let jsonFileName = (sha1 $ item x) ++ ".json"
        jsonPath = joinPath [dst, jsonFileName]
    _ <- writeFile jsonPath (BzUTF8.toString (encode x))
    writeJson dst xs

dirFilter :: DirTree a -> Bool
dirFilter (File name _) = ".md" == (reverse . take 3 . reverse) name
dirFilter _ = True

parse :: [String] -> IO ()
parse (src:(dst:[])) = do
    (a :/ dirobj) <- readDirectoryWithL readFile src
    let (Dir name contents) = filterDir dirFilter dirobj
    writeJson dst (makeNodes (makeTr name "" contents))
parse _     = usage >> exit

usage   = putStrLn "Usage: gen-json src dst"
exit    = exitWith ExitSuccess
die     = exitWith (ExitFailure 1)

jsonPipe :: String -> String
jsonPipe = R.gsubRegexPR "!\\[\\]\\((?!http)(.+?)\\)" "![](assets/db-imgs/\\1)"