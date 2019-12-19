{-# LANGUAGE DeriveGeneric #-}

module Lib
    ( makeNodes, Node
    ) where

import System.Directory.Tree
import Control.Monad
import Data.List.Split
import Data.Map
import Data.Aeson
import GHC.Generics

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