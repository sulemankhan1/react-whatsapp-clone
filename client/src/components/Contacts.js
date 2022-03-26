import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
} from "@mui/material";
import { useContacts } from "../contexts/ContactsProvider";

export default function Contacts() {
  const { contacts } = useContacts();
  return (
    <List>
      {contacts.map((contact) => (
        <ListItem button key={contact.id}>
          <ListItemIcon>
            <Avatar
              alt={contact.name}
              src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
            />
          </ListItemIcon>
          <ListItemText primary={contact.name}>{contact.name}</ListItemText>
          <ListItemText secondary="online" align="right"></ListItemText>
        </ListItem>
      ))}
    </List>
  );
}
