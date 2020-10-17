module Main where

import Lib (parse)
import System.Directory (listDirectory)

main :: IO ()
main = do
  listDir
  parse ["test/data/from", "test/data/to/db"]
