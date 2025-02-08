import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { HeroContentLeft } from "./pages/HeroContentLeft";



export default function App() {
  return (
    <MantineProvider theme={theme}>
      <HeroContentLeft />
    </MantineProvider>
  );
}
