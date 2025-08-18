import { MantineProvider } from "@mantine/core";
import { Router } from "./Router";
import "@mantine/core/styles.css";

const App = () => {
  return (
    <MantineProvider>
      <Router />
    </MantineProvider>
  );
};
export default App;
