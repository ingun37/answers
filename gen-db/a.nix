let git = builtins.fetchGit {
        url = https://github.com/ingun37/haskell-script.git;
        rev = "2e194a47791aa1d562d0b2c80c02d7f3238286e7";
    };
    haskellScriptD = import git {};
in  derivation {
    name = "a";
    builder = "a";
    system = builtins.currentSystem;
    script = haskellScriptD;
}