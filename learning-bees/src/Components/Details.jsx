// import {
//     Button,
//     Checkbox,
//     FormControl,
//     FormLabel,
//     GridItem,
//     Heading,
//     Input,
//     Select,
//     SimpleGrid,
//     Text,
//     Textarea,
//     VStack,
//   } from "@chakra-ui/react";
//   import React from "react";




// const Details=()=>{
//     return (
//         <VStack w="full" h="full" p={10} spacing={10} align="center" >
//         <VStack>
//             <Heading>SIGNIN DETAILS 📝</Heading>
//             <Text>HEY! NICE TO SEE YOU</Text>
//         </VStack>
// <SimpleGrid columns={2} columnGap={3} rowGap={4}>
//     <GridItem colSpan={1}>
//         <FormControl>
//  <FormLabel>First Name</FormLabel>
//  <Input placeholder="ENTER FIRST NAME"   />
//         </FormControl>
//     </GridItem>
//     <GridItem colSpan={1}>
//         <FormControl>
//  <FormLabel>Last Name</FormLabel>
//  <Input placeholder="ENTER Last NAME"   />
//         </FormControl>
//     </GridItem>
//     <GridItem colSpan={1}>
//         <FormControl>
//           <FormLabel>EMAIL</FormLabel>
//           <Input placeholder="ENTER EMAIL" />
//         </FormControl>
//     </GridItem>
    
//     <GridItem colSpan={1}>
//         <FormControl>
//  <FormLabel>Country</FormLabel>
// <Select placeholder="select country">
// <option value="india">INDIA</option>
// <option value="china">CHINA</option>
// <option value="australia">AUSTRALIA</option>
// <option value="america">AMERICA</option>
// <option value="south africa">SOUTH AFRICA</option>
// <option value="japan">JAPAN</option>
// <option value="paris">PARIS</option>
// <option value="new york">NEW YORK</option>
// </Select>
//         </FormControl>
//     </GridItem>
//     <GridItem colSpan={2}>
//         <FormControl>
//  <FormLabel>Address</FormLabel>
//  <Textarea placeholder="ENTER Your Address"   />
//         </FormControl>
//     </GridItem>
    
//   <GridItem colSpan={2}>
//     <FormControl>
//         <FormLabel>CREATE PASSWORD</FormLabel>
//         <Input placeholder="ENTER PASSWORD"/>
//     </FormControl>
//   </GridItem>
//   <GridItem colSpan={2}>
//     <FormControl>
//         <FormLabel>CONFIRM PASSWORD</FormLabel>
//         <Input placeholder="RE-ENTER PASSWORD"/>
//     </FormControl>
//   </GridItem>
// <GridItem colSpan={2}>
// <Button variant="solid" size="lg" width="full" color="cornflowerblue" >SUBMIT</Button>
// </GridItem>
// </SimpleGrid>
//         </VStack>
//     )
// }
// export default Details



import React, { useState } from 'react';
import { Container, Input, Button, Link } from '@chakra-ui/react';
import Footer from './Footer';

const Signup = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const newUser = {
        name: name,
        age: age,
        address: address,
        email: email,
        password: password,
      };

      const response = await fetch("https://hotels-tn92.onrender.com/users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.status === 201) {
        alert("Signup successful!");
        // Redirect to the login page after successful signup
        // You can use history.push('/login') or similar
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (<>
    <Container marginBottom="53px">
      <Input
        type="text"
        placeholder="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        marginBottom="10px"
      />
      <Input
        type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        marginBottom="10px"
      />
      <Input
        type="text"
        placeholder="address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        marginBottom="10px"
      />
      <Input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        marginBottom="10px"
      />
      <Input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        marginBottom="20px"
      />
      <Button colorScheme="blue" onClick={handleSignup}>
        Signup
      </Button>
      <Link href="./login">Already have an account?</Link>
     
    </Container>
     <Footer />
     </>
  );
};

export default Signup;
