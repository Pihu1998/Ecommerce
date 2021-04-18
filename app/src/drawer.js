import React from 'react';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Text,
    Stack,
    Flex,
    Input,
    Button,
    useDisclosure
  } from "@chakra-ui/react";

  
  function Side(){
    const { isOpen, onOpen, onClose } = useDisclosure();

    //const btnRef = React.useRef()
      return (
        

        <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        blockScrollOnMount={false}
        >
        <DrawerOverlay>
          <DrawerContent bg="gray.100">
            <DrawerCloseButton color="white" />
            <DrawerHeader py={5} px={5} bg="black" color="white">Create your account</DrawerHeader>

            <DrawerBody p={2}>
              <Input placeholder="Type here..." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>   
      </Drawer>
    )
  }

  export default Side