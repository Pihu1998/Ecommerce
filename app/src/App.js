import React from "react"
import Product from "./app/product"
import store from './app/store'
import { Box, Image, Flex, Badge, Text, Stack, HStack, Heading } from "@chakra-ui/react";
import Header from "./header.js"
import Footer from "./footer.js"

function App() {
    const arr = store.map(item => <Product key={item.id} product={item} />)
 
  return (
    <>
      <Header />
      <Flex  margin-top="10px">
        {arr}
      </Flex>
      <Stack
      px={5}
      py={10}
      w="100%"
      bg="white"
      color="gray.800"
      justify="space-evenly"
      align="center"
      direction={["column", "column", "row"]}
      textAlign={["center", "center", "left"]}
      spacing={5}
    >
     <Stack
      mb={2}
      justify="center"
      align="center"
      p={10}
      w="100%"
      textAlign={"center"}
      bg={"white"}
      color={"gray.800"}
      spacing={5}
    >
    <Heading fontWeight="700" w="100%" maxW="600px">Another Section</Heading>
    <Text w="100%" maxW="600px">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rerum accusantium perferendis maiores ex repudiandae, similique vero maxime illum voluptate temporibus delectus fugit! Dolor iste voluptatem eaque? Nesciunt, dolorem placeat?</Text>
  
    </Stack>
      </Stack>
      <Footer />
    </> 
    

  )
}

export default App