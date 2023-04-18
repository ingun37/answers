import { array, number, partial, string, struct, TypeOf } from "io-ts/Decoder";
const AttributeFile = struct({
  content: string,
  posixTime: number,
});
export const Item = struct({
  title: string,
  attr: partial({
    q: AttributeFile,
    a: AttributeFile,
    author: AttributeFile,
  }),
  numAnswer: number,
  sha1: string,
});
export const TreeTem = struct({
  parentSha1: string,
  path: string,
  item: Item,
  kids: array(Item),
});

export type TreeTemT = TypeOf<typeof TreeTem>;
export type ItemT = TypeOf<typeof Item>;
