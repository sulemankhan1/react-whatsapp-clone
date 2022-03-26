import React, { useRef } from "react";
import { Box, TextField, Typography, Grid, Button, Modal } from "@mui/material";
import { useContacts } from "../contexts/ContactsProvider";

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

export default function NewContactModal({ closeModal, modalOpen }) {
  const idRef = useRef();
  const nameRef = useRef();
  const { createContact } = useContacts();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const id = idRef.current.value;
    const name = nameRef.current.value;

    createContact(id, name);

    closeModal();
  };
  return (
    <Modal open={modalOpen} onClose={closeModal}>
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h4" gutterBottom>
          Create New Contact
        </Typography>
        <form onSubmit={onSubmitHandler}>
          <Grid container direction="column" spacing={2}>
            <Grid item>
              <TextField
                variant="outlined"
                label="id"
                style={{ width: "100%" }}
                inputRef={idRef}
              />
            </Grid>
            <Grid item>
              <TextField
                variant="outlined"
                label="Name"
                style={{ width: "100%" }}
                inputRef={nameRef}
              />
            </Grid>
            <Grid item>
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
            </Grid>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}
