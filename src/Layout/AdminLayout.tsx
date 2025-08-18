import { AppShell, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  const [opened, { toggle }] = useDisclosure();
  console.log("AdminLayout");
  return (
    <AppShell
      header={{ height: 60 }}
      footer={{ height: 60 }}
      navbar={{ width: 300, breakpoint: "sm", collapsed: { mobile: !opened } }}
      aside={{
        width: 300,
        breakpoint: "md",
        collapsed: { desktop: false, mobile: true },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          Logo
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        <Link to="/">Home</Link>
        <Link to="/students">Student</Link>
        <Link to="/about">About</Link>
        <Link to="/Login">Login</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Register">Register</Link>
        <Link to="/Profile">Profile</Link>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
      <AppShell.Footer p="md">footer</AppShell.Footer>
    </AppShell>
  );
};

export default AdminLayout;
