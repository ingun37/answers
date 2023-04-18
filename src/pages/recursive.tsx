import * as React from "react";
import { useEffect, useState } from "react";
import { TreeTemT } from "../decoders";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { array, either } from "fp-ts";
import MathMD from "./mathmd";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";

import ShareIcon from "@mui/icons-material/Share";
import { useAppDispatch } from "../state/hooks";
import { sha1Slice } from "../state/slice";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { pipe } from "fp-ts/function";
import { fetchSha1, openSha1, pair } from "../util";
import { fst, snd } from "fp-ts/Tuple";
import CardActionArea from "@mui/material/CardActionArea";

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

export default function Recursive(props: { sha1: string | TreeTemT }) {
  const [state, setState] = useState<State>({ type: "loading" });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof props.sha1 === "string")
      fetchSha1(props.sha1)
        .then((x) => setState({ type: "treeTem", treeTem: x }))
        .catch((e) =>
          setState({
            type: "error",
            msg: "Decoding failed: \n" + JSON.stringify(e, undefined, 2),
          })
        );
    else setState({ type: "treeTem", treeTem: props.sha1 });
  }, []);
  switch (state.type) {
    case "loading":
      return <div>loading</div>;
    case "error":
      return <div>{state.msg}</div>;
    case "treeTem":
      const { treeTem } = state;
      const { left: nonBooks, right: books } = pipe(
        treeTem.kids,
        array.map((kid) =>
          kid.attr.author === undefined
            ? either.left(kid)
            : either.right(pair(kid.attr.author, kid))
        ),
        array.separate
      );
      return (
        <div>
          {treeTem.item.attr.q && (
            <MathMD
              htmlString={treeTem.item.attr.q.content}
              posixTime={treeTem.item.attr.q.posixTime}
            />
          )}
          <Divider variant="middle" />
          {treeTem.item.attr.a && (
            <MathMD
              htmlString={treeTem.item.attr.a.content}
              posixTime={treeTem.item.attr.a.posixTime}
            />
          )}

          <Stack direction="row" spacing={2} alignItems="flex-start">
            {books.map((item) => (
              <Card sx={{ width: 275 }}>
                <CardActionArea
                  onClick={() => {
                    openSha1(snd(item).sha1);
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" component="div">
                      {snd(item).title}
                    </Typography>
                    <Typography color="text.secondary">
                      {fst(item).content}
                    </Typography>
                    <Typography color="text.secondary">
                      {snd(item).numAnswer} problems solved
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Stack>
          {nonBooks
            .sort((x, y) => x.title.localeCompare(y.title))
            .map((item) => (
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
