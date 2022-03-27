import React, { useRef } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { v4 as uuidv4 } from "uuid";

const useStyles = makeStyles({
  fullWidth: {
    width: "100%",
  },
});
function Login({ onIdSubmit }) {
  const inputRef = useRef();
  const classes = useStyles();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    onIdSubmit(inputRef.current.value);
  };

  const createNewId = () => {
    const newId = uuidv4();
    onIdSubmit(newId);
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item style={{ width: "50%" }}>
        <Card>
          <CardContent>
            <form onSubmit={onSubmitHandler}>
              <Grid container direction="column" spacing={2}>
                <Grid item sm>
                  <Typography variant="h4" gutterBottom>
                    Login
                  </Typography>
                </Grid>
                <Grid item sm>
                  <TextField
                    label="Enter Your Id"
                    variant="outlined"
                    inputRef={inputRef}
                    className={classes.fullWidth}
                  />
                </Grid>
                <Grid item sm>
                  <Grid
                    container
                    direction="row"
                    spacing={2}
                    justifyContent="right"
                  >
                    <Grid item>
                      <Button variant="outlined" onClick={createNewId}>
                        Create a New Id
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button type="submit" variant="contained">
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Login;
