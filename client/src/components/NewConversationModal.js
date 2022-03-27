import React, { useState } from "react";
import {
  Box,
  FormControlLabel,
  Typography,
  FormGroup,
  Modal,
  Checkbox,
  Grid,
  Button,
} from "@mui/material";
import { useContacts } from "../contexts/ContactsProvider";
import { useConversations } from "../contexts/ConversationsProvider";

const style = {
  position: "absolute",
  top: "30%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function NewConversationModal({ closeModal, modalOpen }) {
  const { contacts } = useContacts();
  const [selectedIds, setSelectedIds] = useState([]);
  const { createConversation } = useConversations();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    createConversation(selectedIds);
    setSelectedIds([]);
    closeModal();
  };

  const onCheckboxChange = (id) => {
    const index = selectedIds.indexOf(id);

    if (index < 0) {
      // add new id
      setSelectedIds([...selectedIds, id]);
    } else {
      const filteredSelected = selectedIds.filter(
        (selectedId) => selectedId !== id
      );
      setSelectedIds(filteredSelected);
    }
  };

  return (
    <Modal open={modalOpen} onClose={closeModal}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" gutterBottom>
          Create New Conversation
        </Typography>
        <form onSubmit={onSubmitHandler}>
          <FormGroup>
            {contacts.map((contact, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={selectedIds.indexOf(contact.id) >= 0}
                    onChange={() => onCheckboxChange(contact.id)}
                  />
                }
                label={contact.name}
              />
            ))}
          </FormGroup>
          <Grid container justifyContent="flex-end" spacing={2}>
            <Grid item>
              <Button variant="outlined" onClick={closeModal}>
                Close
              </Button>
            </Grid>
            <Grid item>
              <Button type="submit" variant="contained">
                Create
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
