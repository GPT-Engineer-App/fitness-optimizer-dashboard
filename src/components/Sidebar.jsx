import { VStack, Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box position="fixed" left="0" top="0" height="100vh" width="200px" bg="gray.700" color="white" p={4}>
      <VStack spacing={4} align="start">
        <Link to="/">
          <Text fontSize="xl">Home</Text>
        </Link>
        <Link to="/my-goal">
          <Text fontSize="xl">My Goal</Text>
        </Link>
        <Link to="/settings">
          <Text fontSize="xl">Settings</Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
