import React from "react";
import { List, ListItem } from "@mui/material";
import { useConversations } from "../contexts/ConversationsProvider";

export default function Conversations() {
  const { conversations, selectConversation } = useConversations();
  return (
    <List>
      {conversations.map((conversation, index) => (
        <ListItem
          button
          selected={conversation.selected}
          key={index}
          onClick={() => selectConversation(index)}
        >
          {conversation.recipients.map((r) => r.name).join(", ")}
        </ListItem>
      ))}
    </List>
  );
}
