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
import qualified Data.ByteString.UTF8 as B      -- from utf8-string
import qualified System.FilePath.Posix as Path

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
    -- _ <- print (encode x)
    -- _ <- print $ (SHA.hash . B.fromString . path) x
    let jsonFileName = (B.toString . SHA.hash . B.fromString . path) x
        jsonPath = Path.joinPath [dst, jsonFileName]
    _ <- print jsonPath
    writeJson dst xs

parse :: [String] -> IO ()
parse (src:(dst:[])) = do
    (a :/ (Dir name contents)) <- readDirectory src
    writeJson dst (makeNodes name contents)
parse ["-h"] = usage   >> exit
parse ["-v"] = version >> exit
parse _     = usage >> exit

usage   = putStrLn "Usage: gen-json [-vh] src dst"
version = putStrLn "Haskell tac 0.1"
exit    = exitWith ExitSuccess
die     = exitWith (ExitFailure 1)