// import React from "react"
// import { Image } from "@chakra-ui/react"
// import { Container,Box, VStack, HStack,Text } from "@chakra-ui/react"

// import Bees from "../assest/bee.png"

// function Footer(){
//     return( <Box width="100%" height={300} >
//         <hr width="100%" height="1050px" color="5px solid black" />
//     <HStack>

//    <Image src={Bees} width={250} />
//    <VStack>

//    </VStack>
   
//     </HStack>

    
//     </Box>)
// }
// export default Footer

import React from 'react';
import { Box, Flex, Text, Link, Icon } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IconName } from "react-icons/fa";
import {FaWaze} from "react-icons/fa"
const Footer = () => {
  return (
    <Box as="footer" mt="auto" py="6" bg="gray.800" color="white">
      <Flex justify="space-between" align="center" maxW="6xl" mx="auto">
     
      <Icon as={FaWaze} boxSize="20" marginLeft="-100px" />
        <Text fontSize="lg" fontWeight="semibold">
          Learning Bees
        </Text>
        <Flex align="center">
          <Link href="#" mx="2">
            Home
          </Link>
          <Link href="#" mx="2">
            Courses
          </Link>
          <Link href="#" mx="2">
            About Us
          </Link>
          <Link href="#" mx="2">
            Contact
          </Link>
        </Flex>
        <Flex align="center">
          <Link href="#" mx="2">
            <Icon as={FaFacebook} boxSize="6" />
          </Link>
          <Link href="#" mx="2">
            <Icon as={FaTwitter} boxSize="6" />
          </Link>
          <Link href="#" mx="2">
            <Icon as={FaInstagram} boxSize="6" />
          </Link>
        </Flex>
      </Flex>
      <Text textAlign="center" mt="4">
        © {new Date().getFullYear()} Educational Website. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
