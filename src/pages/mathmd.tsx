import * as React from "react";
import { useEffect, useRef } from "react";

export default function MathMD(props: { htmlString: string }) {
  const rr = useRef(null);

  useEffect(() => {
    if (rr.current) {
      var mathElements = rr.current.getElementsByClassName("math");
      var macros = [];
      for (var i = 0; i < mathElements.length; i++) {
        var texText = mathElements[i].firstChild;
        if (mathElements[i].tagName == "SPAN") {
          katex.render(texText.data, mathElements[i], {
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
    <div ref={rr} dangerouslySetInnerHTML={{ __html: props.htmlString }} />
  );
}
