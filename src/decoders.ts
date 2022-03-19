import { array, partial, string, struct, TypeOf } from "io-ts/Decoder";
export const Item = struct({
  title: string,
  attr: partial({
    q: string,
    a: string,
    author: string,
  }),
  sha1: string,
});
export const TreeTem = struct({
  parentSha1: string,
  path: string,
  item: Item,
  kids: array(Item),
});

export type TreeTemT = TypeOf<typeof TreeTem>;
