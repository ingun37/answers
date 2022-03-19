import { TreeTem } from "./decoders";
import { isRight } from "fp-ts/Either";

export function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

function joinSlash(x: string, y: string) {
  if (x.endsWith("/")) {
    if (y.startsWith("/")) return x + y.slice(1);
    else return x + y;
  } else {
    if (y.startsWith("/")) return x + y;
    else return x + "/" + y;
  }
}

function joinSlashs(...xs: string[]) {
  return xs.reduce(joinSlash);
}

export function relPath(...xs: string[]) {
  return joinSlashs(window.location.pathname, ...xs);
}

export function relURL(...xs: string[]) {
  const u = new URL(window.location.origin);
  u.pathname = relPath(...xs);
  return u;
}

export function openSha1(sha1: string) {
  window.location.href =
    relURL() +
    ("?" +
      new URLSearchParams({
        sha1: sha1,
      }).toString());
}

export function fetchSha1(sha1: string) {
  return fetch(relPath("db", sha1 + ".json"))
    .then((x) => x.json())
    .then(TreeTem.decode)
    .then((x) => {
      if (isRight(x)) return x.right;
      else throw x.left;
    });
}
