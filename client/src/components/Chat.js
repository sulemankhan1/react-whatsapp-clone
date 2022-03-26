import React from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Grid } from "@mui/material";

import Sidebar from "./Sidebar";
import { useConversations } from "../contexts/ConversationsProvider";
import Conversation from "./Conversation";

const useStyles = makeStyles({
  chatSection: {
    width: "100%",
    height: "100vh",
  },
});

const Chat = ({ id }) => {
  const classes = useStyles();
  const { selectedConversation } = useConversations();

  return (
    <Grid container component={Paper} className={classes.chatSection}>
      <Sidebar styles={classes} id={id} />
      {selectedConversation && <Conversation />}
    </Grid>
  );
};

export default Chat;
