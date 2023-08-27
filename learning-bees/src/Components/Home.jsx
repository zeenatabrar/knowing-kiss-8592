import {Text,Heading,VStack,Image,HStack, Spacer, Flex,Button} from "@chakra-ui/react"
import Logo from "../assest/learning.png"
import Navbar from "./Navbar"
import { IconName } from "react-icons/fa";
import {FaUserGraduate} from "react-icons/fa"
import About from "./About";
import { SearchBar } from "./SearchBar";
import { SearchResultsList } from "./SearchResultsList";
// import { SearchBar } from './Components/SearchBar';
// import { SearchResultsList } from './Components/SearchResultsList';
 import { useState } from 'react';
import Category from "./Category";
import Carousal from "./Carousal";
import Choose from "./Choose";
import AllRoutes from "./AllRoutes";
import Footer from "./Footer";




function Home(){
    const [results, setResults] = useState([]);
    return (<>
    
    <VStack  >
    <Heading >EXPLORE YOUR KNOWLEDGE & START YOUR JOURNEY</Heading>
    <SearchBar setResults={setResults}/>
       {results && results.length > 0 && <SearchResultsList results={results} />}
</VStack>
  
    <HStack marginTop={100} gap={400}>
       
        <VStack marginLeft={130} >
   <Heading>WELCOME TO LEARNING BEES</Heading>
   
   <Text >We have State-Of-Art learning facilities and Innovative <br /> Technologies To Ensure Our Students Have Access To A <br />World-Class Educaton, As A Bonus.</Text>
   <HStack marginTop={10}>
   <FaUserGraduate/><Text>SCHOLARSHIP FACILITY</Text>
   </HStack>
   <HStack>
   <FaUserGraduate/><Text>SCHOLARSHIP FACILITY</Text>
   </HStack>
   <HStack>
   <FaUserGraduate/><Text>SCHOLARSHIP FACILITY</Text>
   </HStack>
   <Button marginTop={25} width={200} borderRadius={25} >LEARN MORE</Button>
   </VStack>
   <Image src="https://www.asmaindia.in/wp-content/uploads/2022/01/online-g5c61a2a4f_1280.jpg" width="600px"/>
    </HStack>
    <Category/>
    <Carousal/>
    <Choose/>
    <Footer/>
    </>
    )
}
export default Home