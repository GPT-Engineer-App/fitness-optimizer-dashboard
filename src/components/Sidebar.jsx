import { VStack, Box, Text, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Button, useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button position="fixed" left="10px" top="10px" onClick={onOpen}>
        Open Menu
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} align="start">
                <Link to="/" onClick={onClose}>
                  <Text fontSize="xl">Home</Text>
                </Link>
                <Link to="/my-goal" onClick={onClose}>
                  <Text fontSize="xl">My Goal</Text>
                </Link>
                <Link to="/settings" onClick={onClose}>
                  <Text fontSize="xl">Settings</Text>
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Sidebar;
