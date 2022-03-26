import Login from "./Login";
import { createTheme, ThemeProvider } from "@mui/material";
import useLocalStorage from "../hooks/useLocalStorage";
import Dashboard from "./Dashboard";
import { ContactsProvider } from "../contexts/ContactsProvider";
import { ConversationsProvider } from "../contexts/ConversationsProvider";
import { SocketProvider } from "../contexts/SocketProvider";

const theme = createTheme({});
function App() {
  const [id, setId] = useLocalStorage("id");

  const dashbaord = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );
  return (
    <ThemeProvider theme={theme}>
      {id ? dashbaord : <Login onIdSubmit={setId} />}
    </ThemeProvider>
  );
}

export default App;
