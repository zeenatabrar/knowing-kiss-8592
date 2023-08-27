// import {
//     Button,

//     FormControl,
//     FormLabel,
//     GridItem,
//     Heading,
//     Input,
  
//     SimpleGrid,


//     Text,
   
//     VStack,
//   } from "@chakra-ui/react";



//   import React from "react";




// function Login(){
//     return(
//         <VStack>
//              <VStack>
//             <Heading>LOGIN DETAILS 📝</Heading>
//             <Text>HEY! NICE TO SEE YOU</Text>
//         </VStack>
// <SimpleGrid columns={2} columnGap={3} rowGap={4}>

    
//     {/* <GridItem colSpan={1}>
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
//     </GridItem> */}
//     <GridItem colSpan={2}>
//         <FormControl>
//           <FormLabel>EMAIL</FormLabel>
//           <Input placeholder="ENTER EMAIL" />
//         </FormControl>
//     </GridItem>
//     <GridItem colSpan={2}>
//         <FormControl>
//             <FormLabel>
//                 ENTER PASSWORD
//             </FormLabel>
//             <Input placeholder="ENTER PASSWORD"/>
//         </FormControl>
//     </GridItem>
//     <GridItem colSpan={2}>
//         <Button width="full">SUBMIT</Button>
//     </GridItem>
//     </SimpleGrid>
//         </VStack>
//     )
// }
// export default Login



import React, { useState } from 'react';
import { Container, Heading, Input, Button, Link } from '@chakra-ui/react';
import Footer from './Footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch("https://hotels-tn92.onrender.com/users");
      const users = await response.json();

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        localStorage.setItem("code", "secret");
        // Redirect to the desired page after successful login
        // You can use history.push('/dashboard') or similar
      } else {
        alert("Wrong Credentials");
      }
    } catch (error) {
      console.log("An error occurred:", error);
    }
  };

  return (<>
    <Container   marginBottom="140px">
      <Heading as="h3" textAlign="center" marginBottom="20px">
        LOG IN TO YOUR ACCOUNT
      </Heading>
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
      <Button colorScheme="green" onClick={handleLogin}>
        {/* Login */}
        <Link href="/">Login</Link>
      </Button>
      <Link href="#">Forgot your password?</Link>
      <Link href="/signin">Signup</Link>
    </Container>
    <Footer/>
    
    </>
  );
};

export default Login;
