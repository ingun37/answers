let git = builtins.fetchGit {
        url = https://github.com/ingun37/haskell-script.git;
        rev = "e96ac79d6bf338c98697bb4ba510f22cb5f502ac";
    };
    haskellScriptD = import git {};
in  derivation {
    name = "a";
    builder = "a";
    system = builtins.currentSystem;
    script = haskellScriptD;
}