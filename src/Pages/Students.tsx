const elements = [
  {
    ID: 1,
    name: "karthi",
    symbol: "1",
    names: "A",
    fee: "1000",
    profile: "Profile",
  },
  {
    ID: 2,
    name: "saketh",
    symbol: "9",
    names: "A",
    fee: "2000",
    profile: "Profile",
  },
  {
    ID: 3,
    name: "honey",
    symbol: "btech-1",
    names: "A",
    fee: "3000",
    profile: "Profile",
  },
  {
    ID: 4,
    name: "mini",
    symbol: "11",
    names: "A",
    fee: "4000",
    profile: "Profile",
  },
  {
    ID: 5,
    name: "prani",
    symbol: "btech-2",
    names: "A",
    fee: "5000",
    profile: "Profile",
  },
];
import { Table } from "@mantine/core";
import { Link } from "react-router-dom";

function Students() {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.ID}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.names}</Table.Td>
      <Table.Td>{element.fee}</Table.Td>
      <Table.Td>{element.profile}</Table.Td>
      <Table.Td>
        <Link
          to={`/profile/`}
          style={{ textDecoration: "none", color: "blue" }}
        >
          {element.profile}
        </Link>
      </Table.Td>
    </Table.Tr>
  ));
  return (
    <Table striped highlightOnHover withTableBorder withColumnBorders>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Student ID</Table.Th>
          <Table.Th>Student NAME</Table.Th>
          <Table.Th>GRADE</Table.Th>
          <Table.Th>SECTION</Table.Th>
          <Table.Th>FEEZ</Table.Th>
          <Table.Th>PROFILE</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
export default Students;
