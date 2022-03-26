import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

import MessageArea from "./MessageArea";
import NewMessageForm from "./NewMessageForm";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },

  headBG: {
    backgroundColor: "#e0e0e0",
  },
  borderRight500: {
    borderRight: "1px solid #e0e0e0",
  },
  messageArea: {
    height: "60vh",
    overflowY: "auto",
  },
  fullHeight: {
    height: "100vh",
  },
  message: {
    marginTop: "1rem",
    backgroundColor: "#fcfcfc",
    borderRadius: "0.4rem",
    // maxWidth: "50%",
  },
});

export default function Conversation() {
  const classes = useStyles();
  return (
    <Grid item xs={9}>
      <MessageArea styles={classes} />
      <NewMessageForm styles={classes} />
    </Grid>
  );
}
