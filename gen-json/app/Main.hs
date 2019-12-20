{-# LANGUAGE DeriveGeneric #-}

module Main where

import Lib
import System.Environment
import System.Exit
import Crypto.Hash.SHA1 as SHA
import System.Directory.Tree
import Control.Monad
import Data.List.Split
import Data.Map
import Data.Aeson
import GHC.Generics
import qualified Data.ByteString.Char8 as B
import qualified Data.ByteString.Lazy.Char8 as Bz
import qualified System.FilePath.Posix as Path
import qualified Data.ByteString.Base16 as B16

data Item = Item {
    title :: String,
    sha1 :: String,
    attr :: (Map String String)} deriving (Generic, Show)

data Node = Node {
path :: String,
item :: Item,
kids :: [Item]} deriving (Generic, Show)

sha1InHex = B.unpack . B16.encode . SHA.hash . B.pack

makeNodes :: String -> [DirTree String] -> [Node]
makeNodes name contents =
    let kidNodes = join ([makeNodes (name ++ "/" ++ title) contents' | Dir title contents' <- contents])
        kidItems = Prelude.map item kidNodes
        thisItem = Item (Path.takeFileName name) (sha1InHex name) (fromList [(Path.takeBaseName name', file) | File name' file <- contents])
    in kidNodes ++ [Node name thisItem kidItems]
makeNodes _ _ = []

instance ToJSON Item
instance ToJSON Node

main = getArgs >>= parse

writeJson :: String -> [Node] -> IO ()
writeJson _ [] = return ()
writeJson dst (x:xs) = do 
    let jsonFileName = (sha1 $ item x) ++ ".json"
        jsonPath = Path.joinPath [dst, jsonFileName]
    _ <- writeFile jsonPath (Bz.unpack (encode x))
    writeJson dst xs

parse :: [String] -> IO ()
parse (src:(dst:[])) = do
    (a :/ (Dir name contents)) <- readDirectory src
    writeJson dst (makeNodes name contents)
parse _     = usage >> exit

usage   = putStrLn "Usage: gen-json src dst"
exit    = exitWith ExitSuccess
die     = exitWith (ExitFailure 1)