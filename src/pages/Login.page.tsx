import {
  Paper,
  Group,
  Divider,
  Stack,
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Button,
} from "@mantine/core";
import { upperFirst, useToggle } from "@mantine/hooks";

const LoginPage = () => {
  const [type, toggle] = useToggle(["login", "register"]);

  return (
    <div>
      <Paper radius="md" p="xl" withBorder>
        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />

        <form>
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

            {type === "register" && (
              <Checkbox label="I accept terms and conditions" />
            )}
          </Stack>

          <Group justify="space-between" mt="xl">
            <Anchor
              component="button"
              type="button"
              c="dimmed"
              onClick={() => toggle()}
              size="xs"
            >
              {type === "register"
                ? "Already have an account? Login"
                : "Don't have an account? Register"}
            </Anchor>
            <Button type="submit" radius="xl">
              {upperFirst(type)}
            </Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
};
export default LoginPage;
