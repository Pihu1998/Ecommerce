import React from "react"
import { Box, Image, Flex, Badge, Text } from "@chakra-ui/react";

function product(props){
   return(

        <Box maxW="360px" borderWidth="5px">
           <Image src="https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" />
           <h2>{props.product.name}</h2>
           <p>Price: {props.product.price.toLocaleString("en-us", { style: "currency", currency: "USD" })}</p>
           <p>{props.product.description}</p>
        </Box>   

   )
}

export default product