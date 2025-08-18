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
const Login = ({
  type,
  ...props
}: { type: "login" | "register" } & PaperProps) => {
  return (
    <Paper radius="md" p="xl" withBorder {...props}>
      <Text size="lg" fw={500}>
        Welcome to our website , Register with
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

      <Stack gap="md">
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
        <PasswordInput
          required
          label="confrim password"
          placeholder="your password"
          radius="md"
        />
        <TextInput label="Phone Number" placeholder="Your phone number" />
        <Group>
          <TextInput label="Address" placeholder="Your address" />
          <TextInput label="City" placeholder="Your city" />
          <TextInput label="State" placeholder="Your state" />
          <TextInput label="pincode" placeholder="Your pincode" />
        </Group>
        <Group justify="flex-start">
          <Button variant="filled" color="blue">
            Submit
          </Button>
        </Group>
      </Stack>
    </Paper>
  );
};
export default Login;
