import {
  Divider,
  Group,
  Paper,
  PaperProps,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";
const Login = ({
  type,
  ...props
}: { type: "login" | "register" } & PaperProps) => {
  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome back , login with
      </Text>

      <Group grow mb="md" mt="md">
        <Button
          size="sm"
          variant="gradient"
          gradient={{ from: "yellow", to: "yellow", deg: 90 }}
        >
          Google
        </Button>
        <Button
          size="compact-sm"
          variant="gradient"
          gradient={{ from: "green", to: "green", deg: 90 }}
        >
          Twitter
        </Button>
      </Group>

      <Divider label="Or continue with email" labelPosition="center" my="lg" />

      <Stack>
        {type === "register" && (
          <TextInput label="Name" placeholder="Your name" radius="md" />
        )}

        <TextInput
          required
          label="Email"
          placeholder="hello@mantine.dev"
          radius="md"
        />

        <PasswordInput
          required
          label="Password"
          placeholder="Your password"
          radius="md"
        />
        <Group justify="space-between">
          <Button variant="filled" color="blue" justify="center">
            Submit
          </Button>
          <Text>
            <Group gap="sm">
              <div>Don't have an account?</div>{" "}
              <Link to="/Register">Register</Link>
            </Group>
          </Text>
        </Group>
      </Stack>
    </Paper>
  );
};
export default Login;
