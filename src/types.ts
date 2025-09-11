import { Schema } from "effect";
export const PageAttributeContent = Schema.Struct({
  _time: Schema.String,
  _attributeFile: Schema.Struct({
    _content: Schema.String,
  }),
});

export const PageContent = Schema.Struct({
  _pageTitle: Schema.String,
  _hash: Schema.String,
  _answers: Schema.Number,
  _attributes: Schema.Record({
    key: Schema.String,
    value: PageAttributeContent,
  }),
});
export type PageContent = Schema.Schema.Type<typeof PageContent>;
export const Page = Schema.Struct({
  _parentHash: Schema.String,
  _pageContent: PageContent,
  _childPageContents: Schema.Array(PageContent),
});

export type Page = Schema.Schema.Type<typeof Page>;

export const decodePage = Schema.decodeSync(Page);
