import * as React from "react";
import { useEffect, useState } from "react";
import { compile } from "@mdx-js/mdx";

export default function MathMD(props: { md: string }) {
  const [module, setModule] = useState<any | null>(null);
  useEffect(() => {
    compile(props.md)
      .then(String)
      // .then((js) => import(js).default)
      .then(setModule);
  }, []);
  return <div></div>;
}
