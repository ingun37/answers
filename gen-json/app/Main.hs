module Main where

import Lib
import System.Environment
import System.Exit
import System.Directory.Tree

main = getArgs >>= parse


parse :: [String] -> IO ()
parse (x:(y:[])) = do
    (a :/ (Dir name contents)) <- readDirectory x
    print $ makeNodes name contents
parse ["-h"] = usage   >> exit
parse ["-v"] = version >> exit
parse _     = usage >> exit

usage   = putStrLn "Usage: gen-json [-vh] src dst"
version = putStrLn "Haskell tac 0.1"
exit    = exitWith ExitSuccess
die     = exitWith (ExitFailure 1)