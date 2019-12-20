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
import qualified Data.ByteString as Strict
import qualified Data.ByteString.Char8 as B
import qualified Data.ByteString.Lazy.Char8 as Bz
import qualified System.FilePath.Posix as Path
import qualified Data.ByteString.Base16 as B16
import Text.Printf (printf)

data Item = Item {
    title :: String,
    attr :: (Map String String)} deriving (Generic, Show)

data Node = Node {
path :: String,
item :: Item,
kids :: [Item]} deriving (Generic, Show)

makeItem :: String -> [DirTree String] -> Item
makeItem name contents = Item (last (splitOn "/" name)) (fromList [(head (splitOn "." name'), file) | File name' file <- contents])

makeNode :: String -> [DirTree String] -> Node
makeNode name contents = Node name (makeItem name contents) [(makeItem title conts) | Dir title conts <- contents]

makeNodes :: String -> [DirTree String] -> [Node]
makeNodes name contents = [makeNode name contents] ++ (join ([makeNodes (name ++ "/" ++ name') contents' | Dir name' contents' <- contents]))
makeNodes _ _ = []

instance ToJSON Item
instance ToJSON Node

main = getArgs >>= parse

writeJson :: String -> [Node] -> IO ()
writeJson _ [] = return ()
writeJson dst (x:xs) = do 
    let jsonFileName = (B.unpack . B16.encode . SHA.hash . B.pack . path) x ++ ".json"
        jsonPath = Path.joinPath [dst, jsonFileName]
    _ <- writeFile jsonPath (Bz.unpack (encode x))
    writeJson dst xs

parse :: [String] -> IO ()
parse (src:(dst:[])) = do
    (a :/ (Dir name contents)) <- readDirectory src
    writeJson dst (makeNodes name contents)
parse _     = usage >> exit

usage   = putStrLn "Usage: gen-json [-vh] src dst"
exit    = exitWith ExitSuccess
die     = exitWith (ExitFailure 1)