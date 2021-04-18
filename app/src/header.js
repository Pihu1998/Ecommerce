import React, { useState } from "react"
import {
    Flex,
    HStack,
    Text,
    useDisclosure,
    Button,
    Avatar,
    Icon,
    IconButton,
    Link
  } from "@chakra-ui/react";

import Side from './drawer.js'
//import Link from 'next/link'
import { HamburgerIcon } from "@chakra-ui/icons";
import { BiShoppingBag } from "react-icons/bi";
import { headerLinks } from "./utils/static";

function Header(){

  const { isOpen, onClose, onOpen } = useDisclosure();
  //const [showBasket, setShowBasket] = useState(false);


    return(
      <>
      <Flex
        h="60px"
        w="100%"
        justify="space-between"
        bg="gray.100"
        position="fixed"
        p={[2, 2, 5, 5]}
        zIndex="100"
        align="center"
      >
        <Flex
          w="100%"
        >
          P R A N. P
        </Flex>
        
        <HStack spacing={5} display={["none", "none", "none", "flex"]}>
          {headerLinks.map(({ label, path }) => (
            <Link href={path} key={label}>
              <Text fontWeight="500" _hover={{ cursor: "pointer" }}>
                {label}
              </Text>
            </Link>
          ))}
        </HStack>

        <IconButton
              bg="none"
              aria-label="Basket"
              icon={<Icon as={BiShoppingBag} w={6} h={6} />}
              //display={["block", "block", "block", "none"]}
              onClick={isOpen}
              _hover={{ background: "none" }}
            />
        <Side isOpen={isOpen} onClose={onClose} />  
      </Flex>
      
      
      </>
    )
}


export default Header