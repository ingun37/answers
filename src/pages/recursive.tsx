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

export default function Recursive(props: { sha1: string }) {
  const [treeTem, setTreeTem] = useState<TreeTemT | null>(null);
  useEffect(() => {
    fetch("/db/" + props.sha1 + ".json")
      .then((x) => x.json())
      .then(TreeTem.decode)
      .then(either.match(console.error, setTreeTem))
      .catch(console.error);
  }, []);
  return treeTem === null ? (
    <div>loading</div>
  ) : (
    <div>
      {treeTem.item.attr.q && <MathMD md={treeTem.item.attr.q} />}
      {treeTem.item.attr.a && <MathMD md={treeTem.item.attr.a} />}
      question and answer
      {treeTem.kids.map((item) => (
        <Accordion TransitionProps={{ unmountOnExit: true }} key={item.sha1}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Recursive sha1={item.sha1} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
