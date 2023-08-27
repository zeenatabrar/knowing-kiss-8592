import React from "react";
import { Flex, HStack, Spacer, Heading, Text, Button } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import logo from "../assest/new2.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    < >
      <Flex
      align="center"
        // color="pink"
        justifyContent="space-between"
       
      >
        <Image width={300} src={logo} />

        <HStack
          justifyContent="space-around"
          display="flex"
          width="100%"
          
        >
          <Link to="/"><Text fontSize={30} >HOME</Text></Link>
          <Link to="/about">
          <Text fontSize={30}>ABOUT</Text>
          </Link>
          <Link to="/contact"><Text fontSize={30}>CONTACT</Text></Link>
          <Link to="/login"><Text fontSize={30}>LOGIN</Text></Link>
         
          <Link to="/signin"><Text fontSize={30}>SIGNUP</Text></Link>
        </HStack>
      </Flex>
    </>
  );
}
export default Navbar;
