import React from "react";
import SendIcon from "@mui/icons-material/Send";
import { Grid, TextField, Fab, IconButton } from "@mui/material";
import { useConversations } from "../contexts/ConversationsProvider";

export default function NewMessageForm() {
  const [value, setValue] = React.useState("");
  const { sendMessage, selectedConversation } = useConversations();

  const submitHandler = (e) => {
    e.preventDefault();
    sendMessage(
      selectedConversation.recipients.map((r) => r.id),
      value
    );
    setValue("");
  };

  return (
    <form onSubmit={submitHandler}>
      <Grid container style={{ padding: "20px" }} mt={2}>
        <Grid item xs={11}>
          <TextField
            id="outlined-basic-email"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="Type Something"
            fullWidth
          />
        </Grid>
        <Grid align="right" xs={1}>
          <Fab color="primary" aria-label="add" disableRipple type="submit">
            <IconButton aria-label="delete" disableRipple>
              <SendIcon />
            </IconButton>
          </Fab>
        </Grid>
      </Grid>
    </form>
  );
}
