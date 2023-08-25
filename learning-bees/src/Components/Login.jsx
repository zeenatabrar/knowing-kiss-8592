import {
    Button,

    FormControl,
    FormLabel,
    GridItem,
    Heading,
    Input,
  
    SimpleGrid,


    Text,
   
    VStack,
  } from "@chakra-ui/react";



  import React from "react";




function Login(){
    return(
        <VStack>
             <VStack>
            <Heading>LOGIN DETAILS 📝</Heading>
            <Text>HEY! NICE TO SEE YOU</Text>
        </VStack>
<SimpleGrid columns={2} columnGap={3} rowGap={4}>

    
    <GridItem colSpan={1}>
        <FormControl>
 <FormLabel>First Name</FormLabel>
 <Input placeholder="ENTER FIRST NAME"   />
        </FormControl>
    </GridItem>
    <GridItem colSpan={1}>
        <FormControl>
 <FormLabel>Last Name</FormLabel>
 <Input placeholder="ENTER Last NAME"   />
        </FormControl>
    </GridItem>
    <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>EMAIL</FormLabel>
          <Input placeholder="ENTER EMAIL" />
        </FormControl>
    </GridItem>
    <GridItem colSpan={2}>
        <FormControl>
            <FormLabel>
                ENTER PASSWORD
            </FormLabel>
            <Input placeholder="ENTER PASSWORD"/>
        </FormControl>
    </GridItem>
    <GridItem colSpan={2}>
        <Button width="full">SUBMIT</Button>
    </GridItem>
    </SimpleGrid>
        </VStack>
    )
}
export default Login