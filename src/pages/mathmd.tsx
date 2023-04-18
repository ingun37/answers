import * as React from "react";
import { useEffect, useRef } from "react";
import Typography from "@mui/material/Typography";

export default function MathMD(props: {
  htmlString: string;
  posixTime: number;
}) {
  const rr = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (rr.current) {
      var mathElements = rr.current.getElementsByClassName("math");
      var macros: any[] = [];
      for (var i = 0; i < mathElements.length; i++) {
        var texText = mathElements[i].firstChild;
        if (mathElements[i].tagName == "SPAN") {
          katex.render((texText as any).data, mathElements[i], {
            displayMode: mathElements[i].classList.contains("display"),
            throwOnError: false,
            macros: macros,
            fleqn: false,
          });
        }
      }
    }
  }, [rr]);
  return (
    <div style={{ position: "relative" }}>
      <div ref={rr} dangerouslySetInnerHTML={{ __html: props.htmlString }} />
      <Typography
        variant="caption"
        style={{ bottom: 1, right: 1, position: "absolute" }}
      >
        {new Date(props.posixTime * 1000).toDateString()}
      </Typography>
    </div>
  );
}
