import { useParams } from "react-router-dom";
import { Card, Text, Title } from "@mantine/core";

const elements = [
  { ID: 1, name: "karthi", symbol: "1", names: "A", fee: "1000", profile: "Profile" },
  { ID: 2, name: "saketh", symbol: "9", names: "A", fee: "2000", profile: "Profile" },
  { ID: 3, name: "honey", symbol: "btech-1", names: "A", fee: "3000", profile: "Profile" },
  { ID: 4, name: "mini", symbol: "11", names: "A", fee: "4000", profile: "Profile" },
  { ID: 5, name: "prani", symbol: "btech-2", names: "A", fee: "5000", profile: "Profile" },
];

function Profile() {
  const { id } = useParams<{ id: string }>(); // Get the student ID from URL
  const student = elements.find((s) => s.ID === Number(id));

  if (!student) {
    return <Title order={2}>Student not found</Title>;
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={2}>{student.name}'s Profile</Title>
      <Text>ID: {student.ID}</Text>
      <Text>Grade: {student.symbol}</Text>
      <Text>Section: {student.names}</Text>
      <Text>Fees: {student.fee}</Text>
    </Card>
  );
}

export default Profile;
