import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Counter from "./components/Counter";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Counter />
    </MantineProvider>
  );
}
