import { Box, Switch, Text } from "@chakra-ui/react";

function Settings() {
  return (
    <Box p={4}>
      <Text fontSize="xl">Settings</Text>
      <Box mt={4}>
        <Text>Night Mode</Text>
        <Switch isDisabled />
      </Box>
    </Box>
  );
}

export default Settings;
