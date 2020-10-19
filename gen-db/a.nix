let git = builtins.fetchGit {
        url = https://github.com/ingun37/haskell-script.git;
        rev = "fd66558bd6cbf8e3a793a530d6ebf56497d3dd81";
    };
    haskellScriptD = import git {};
in  derivation {
    name = "a";
    builder = "a";
    system = builtins.currentSystem;
    script = haskellScriptD;
}