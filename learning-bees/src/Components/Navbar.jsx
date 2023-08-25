
import React from "react"
import {Flex,HStack,Spacer,Heading,Link} from "@chakra-ui/react"
import { Img } from "@chakra-ui/react"



function Navbar(){
    return <>
    <Flex 
    align="center"
    // backgroundColor="yellow"
    // color="pink"
     justifyContent="space-evenly"
    >
        <Img src="https://www.canva.com/design/DAFsXzU7MSQ/oa9Feu-cpTxM4OgosW6OhQ/edit?utm_content=DAFsXzU7MSQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"/>
    <Heading>learning bees</Heading>
    {/* <Spacer/> */}
    <HStack>
        <Link as="a" href="/" >HOME</Link>
        <Link as="a" href="/contact">Contact</Link>
        <Link as="a" href="/login">Login</Link>
        <Link as="a" href="/about">About</Link>
    </HStack>
    </Flex>
    
    </>
}
export default Navbar