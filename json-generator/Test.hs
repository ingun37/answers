module Main where

import Lib (parse)

main :: IO ()
main = do
  putStrLn "Hello, Haskell!"
  parse ["test/from", "test/to"]
