import React from "react";
import Chat from "./Chat";
import { Grid, Typography } from "@mui/material";

export default function Dashboard({ id }) {
  return (
    <div>
      <Chat id={id} />
    </div>
  );
}
