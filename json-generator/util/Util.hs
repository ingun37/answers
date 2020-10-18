module Util (onlyMatch, onlyGroups, onlyGroup, allFiles, copyIfExist) where

import System.Directory (listDirectory, doesFileExist)
import qualified System.Directory as D
import Control.Monad (join, (>=>))
import qualified System.FilePath.Posix as P

-- matchRegexPR gmatchRegexPR
onlyMatch :: Functor m => m ((String, (String, String)), [(Int, String)]) -> m String
onlyMatch = fmap (fst . fst)

onlyGroups :: Functor m => m ((String, (String, String)), [(Int, String)]) -> m [String]
onlyGroups = fmap ((map snd) . snd)

onlyGroup :: Functor m => Int -> m ((String, (String, String)), [(Int, String)]) -> m String
onlyGroup groupIdx = fmap (!! groupIdx) . onlyGroups

_allFiles :: FilePath -> IO [FilePath]
_allFiles path = doesFileExist path >>= _ifInv (return [path]) (allFiles path)

allFiles :: FilePath -> IO [FilePath]
allFiles path = listDirectory path >>= _flatM . map (_allFiles . ((path ++ "/") ++))

_flatM :: Monad m => [ m [a] ] -> m [a]
_flatM = fmap join . sequence

_ifInv :: a -> a -> Bool -> a
_ifInv a b c = if c then a else b

copyIfExist :: FilePath -> FilePath -> IO ()
copyIfExist src dstDir =
    let dst = dstDir P.</> (P.takeFileName src)
    in D.doesFileExist src >>= \b -> 
        if b 
        then D.copyFile src dst 
        else putStrLn $ src ++ "does not exist"
