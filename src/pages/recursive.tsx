import * as React from "react";
import { TreeTem, TreeTemT } from "../decoders";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useEffect, useState } from "react";
import { either } from "fp-ts";
import MathMD from "./mathmd";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ShareIcon from "@mui/icons-material/Share";
import { useAppDispatch } from "../state/hooks";
import { sha1Slice } from "../state/slice";
type State =
  | {
      type: "loading";
    }
  | {
      type: "treeTem";
      treeTem: TreeTemT;
    }
  | {
      type: "error";
      msg: string;
    };
export default function Recursive(props: { sha1: string }) {
  const [state, setState] = useState<State>({ type: "loading" });
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetch("/db/" + props.sha1 + ".json")
      .then((x) => x.json())
      .then(TreeTem.decode)
      .then(
        either.match(
          (e) => {
            setState({
              type: "error",
              msg: "Decoding failed: \n" + JSON.stringify(e, undefined, 2),
            });
          },
          (x) => setState({ type: "treeTem", treeTem: x })
        )
      )
      .catch((e) => setState({ type: "error", msg: e.toString() }));
  }, []);
  switch (state.type) {
    case "loading":
      return <div>loading</div>;
    case "error":
      return <div>{state.msg}</div>;
    case "treeTem":
      const { treeTem } = state;
      return (
        <div>
          {treeTem.item.attr.q && <MathMD htmlString={treeTem.item.attr.q} />}
          <Divider variant="middle" />
          {treeTem.item.attr.a && <MathMD htmlString={treeTem.item.attr.a} />}
          {treeTem.kids.map((item) => (
            <Accordion
              TransitionProps={{ unmountOnExit: true }}
              key={item.sha1}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ flex: 2 }}>{item.title}</Typography>
                <IconButton
                  color="primary"
                  component="span"
                  onClick={(e) => {
                    dispatch(sha1Slice.actions.setSha1(item.sha1));
                    e.stopPropagation();
                  }}
                >
                  <ShareIcon />
                </IconButton>
              </AccordionSummary>
              <AccordionDetails>
                <Recursive sha1={item.sha1} />
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      );
  }
}
