import React from "react";
import {
  Button,
  Grid,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { TabPanel } from "./TabPanel";
import NewConversationModal from "./NewConversationModal";
import NewContactModal from "./NewContactModal";
import Contacts from "./Contacts";
import Conversations from "./Conversations";

export default function Sidebar({ styles, id }) {
  const [value, setValue] = React.useState(0);
  const [modalOpen, setModalOpen] = React.useState(false);

  const modalCloseHandler = () => {
    setModalOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Grid item className={styles.borderRight500}>
        <Grid
          container
          direction="column"
          justifyContent="space-between"
          // className={styles.fullHeight}
        >
          <Grid item md style={{ minHeight: "75vh" }}>
            <List>
              <ListItem button key="RemySharp">
                <ListItemIcon>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://material-ui.com/static/images/avatar/1.jpg"
                  />
                </ListItemIcon>
                <ListItemText primary="John Wick"></ListItemText>
              </ListItem>
            </List>
            <Divider />
            {/* <Grid item style={{ padding: "10px" }}>
              <TextField
                id="outlined-basic-email"
                label="Search"
                variant="outlined"
                fullWidth
              />
            </Grid> */}
            <Divider />
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="contacts-conversation-tabs"
              >
                <Tab label="Conversations" />
                <Tab label="Contacts" />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Conversations />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Contacts />
            </TabPanel>
          </Grid>
          <Grid item md>
            <Typography variant="subtitle2">Your Id:</Typography>
            <Typography variant="body1" paragraph color="text.secondary">
              {id}
            </Typography>
            <Button
              onClick={() => setModalOpen(true)}
              variant="contained"
              fullWidth={true}
            >
              New {value === 0 ? "Conversation" : "Contact"}
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {value === 0 ? (
        <NewConversationModal
          modalOpen={modalOpen}
          closeModal={modalCloseHandler}
        />
      ) : (
        <NewContactModal modalOpen={modalOpen} closeModal={modalCloseHandler} />
      )}
    </>
  );
}
