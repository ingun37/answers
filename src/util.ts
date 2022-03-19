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
