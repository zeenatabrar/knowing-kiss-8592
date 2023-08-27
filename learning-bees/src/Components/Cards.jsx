import { VStack } from "@chakra-ui/react"

function Cards({id,name,avatar,}){
    return (<VStack marginTop={20}>


<img src={avatar}/>
<p>{name}</p>

    </VStack>)
}
export default Cards