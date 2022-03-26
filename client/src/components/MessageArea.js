import React, { useCallback } from "react";
import { Grid, List, ListItem, ListItemText } from "@mui/material";
import { useConversations } from "../contexts/ConversationsProvider";

export default function MessageArea({ styles }) {
  const { selectedConversation } = useConversations();

  const setRef = useCallback((node) => {
    if (node) {
      node.scrollIntoView({ smooth: true });
    }
  });

  console.log(selectedConversation.messages);

  return (
    <List className={styles.messageArea}>
      {selectedConversation.messages.map((message, index) => {
        const lastMessage = selectedConversation.messages.length - 1 === index;
        return (
          <ListItem
            key={index}
            className={styles.message}
            ref={lastMessage ? setRef : null}
          >
            <Grid container>
              <Grid item xs={12}>
                {!message.fromMe && (
                  <Grid item xs={12}>
                    <ListItemText
                      align="left"
                      secondary={message.senderName}
                    ></ListItemText>
                  </Grid>
                )}
                <ListItemText
                  align={`${message.fromMe ? "right" : "left"}`}
                  primary={message.text}
                ></ListItemText>
              </Grid>
              {/* <Grid item xs={12}>
                <ListItemText align="right" secondary="09:30"></ListItemText>
              </Grid> */}
            </Grid>
          </ListItem>
        );
      })}
    </List>
  );
}
