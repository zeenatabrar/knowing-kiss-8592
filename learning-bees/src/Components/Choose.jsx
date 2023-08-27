
import { HStack, Heading,Text,VStack } from "@chakra-ui/react"
import React from "react"
import {Image} from "@chakra-ui/react"
import why from "../assest/why.png"
function Choose(){
    return(
        <HStack marginTop={0} gap={200}>
       
        <VStack marginLeft={20} >
   <Heading>SCHOLARSHIP FACILITIES</Heading>
   
   <Text>The most significant advantage of online learning is that it is highly affordable compared to in-person or traditional education. Additionally, participants do not have to spend on commuting and other daily expenses, and the fees are usually lower than in-person courses.Online education gives educators a prospect to reach students who may not be competent to enrol in a traditional classroom course and supports students who require to work on their schedule and at their own pace.</Text>
  
   </VStack>
   <Image src={why} width="600px" />
    </HStack>  
    )
}
export default Choose