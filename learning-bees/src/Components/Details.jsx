import {
    Button,
    Checkbox,
    FormControl,
    FormLabel,
    GridItem,
    Heading,
    Input,
    Select,
    SimpleGrid,
    Text,
    Textarea,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";




const Details=()=>{
    return (
        <VStack w="full" h="full" p={10} spacing={10} align="center" >
        <VStack>
            <Heading>SIGNUP DETAILS 📝</Heading>
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
    <GridItem colSpan={1}>
        <FormControl>
          <FormLabel>EMAIL</FormLabel>
          <Input placeholder="ENTER EMAIL" />
        </FormControl>
    </GridItem>
    
    <GridItem colSpan={1}>
        <FormControl>
 <FormLabel>Country</FormLabel>
<Select placeholder="select country">
<option value="india">INDIA</option>
<option value="china">CHINA</option>
<option value="australia">AUSTRALIA</option>
<option value="america">AMERICA</option>
<option value="south africa">SOUTH AFRICA</option>
<option value="japan">JAPAN</option>
<option value="paris">PARIS</option>
<option value="new york">NEW YORK</option>
</Select>
        </FormControl>
    </GridItem>
    <GridItem colSpan={2}>
        <FormControl>
 <FormLabel>Address</FormLabel>
 <Textarea placeholder="ENTER Your Address"   />
        </FormControl>
    </GridItem>
    
  <GridItem colSpan={2}>
    <FormControl>
        <FormLabel>CREATE PASSWORD</FormLabel>
        <Input placeholder="ENTER PASSWORD"/>
    </FormControl>
  </GridItem>
<GridItem colSpan={2}>
<Button variant="solid" size="lg" width="full" color="cornflowerblue" >SUBMIT</Button>
</GridItem>
</SimpleGrid>
        </VStack>
    )
}
export default Details