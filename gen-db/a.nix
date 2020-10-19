let git = builtins.fetchGit {
        url = https://github.com/ingun37/haskell-script.git;
        rev = "ec499cf818cf5177fd8401d6ce97096c4320512a";
    };
    haskellScriptD = import git {};
in  derivation {
    name = "a";
    builder = "a";
    system = builtins.currentSystem;
    script = haskellScriptD;
}