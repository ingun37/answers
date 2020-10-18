module Main where

import Lib (parse)
import System.Directory (listDirectory, removeDirectoryRecursive, createDirectoryIfMissing)

main :: IO ()
main = do
  removeDirectoryRecursive "test/data/to"
  createDirectoryIfMissing True "test/data/to/db"
  createDirectoryIfMissing True "test/data/to/assets"
  parse ["test/data/from", "test/data/to/db"]
