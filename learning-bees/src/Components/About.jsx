import { Center, HStack, Heading,Text, VStack } from "@chakra-ui/react";
import { IconName } from "react-icons/fc";
import {FcGlobe} from "react-icons/fc"
import {FcSettings} from "react-icons/fc"
import {FcStatistics} from "react-icons/fc"
import {FcNext} from "react-icons/fc"
import { Image } from "@chakra-ui/react";
import Footer from "./Footer";
function About() {
  return (<>
    <HStack gap={40}>
        <VStack>
            <Heading>Our mission</Heading>
        <Text fontSize={22} >
        Nurture each child’s passion, curiosity, optimism, and educational success.
        </Text>
        <br />
        <Heading>Our philosophy</Heading>
        <Text fontSize={22}>Proven learning approaches</Text>
        <Text>Teaching is one of the most challenging and complex jobs on the planet. Our digital resources, tools, and learning <br /> materials are developed by educational experts to incorporate leading pedagogical practices. They are useful in <br /> any type of teaching moment and many can be used to support national education standards.</Text>
       <Text fontSize={22}>Empowered educators</Text>
       <Text>From school teachers and tutors to home schoolers and parents, engaged adults are the key to unlocking each <br /> child's potential and drive to learn. We empower all kinds of educators to teach kids by providing the best <br /> educational resources in any form or device to be used at home, at school, and everywhere in-between.</Text>
       <Text fontSize={22}>Unique experiences</Text>
       <Text>There is no such thing as "one size fits all" in education; each educator and child has unique challenges and goals. <br /> We celebrate the diversity of our users by offering differentiated resources that can meet a wide range of <br /> educational needs - and raise kids' confidence in learning.</Text>
       <Text fontSize={22}>Conscientious and supportive</Text>
       <Text>We continue to provide academically sound content of the highest caliber and welcome input from our users as <br /> we address issues of equity, diversity, inclusivity and representation. Since we know there are many different <br /> approaches to teaching and education, we develop our materials to complement these different philosophies <br /> across subjects and grades.</Text>
       
       
        </VStack>
        <Image src="https://static.vecteezy.com/system/resources/previews/000/484/658/original/online-education-vertical-banners-set-vector.jpg" w={700}  />
    </HStack>
    <VStack marginTop={20}>
<Heading>Our reach</Heading>
<Text>Our reach
The people who visit Education.com are the most important part of what we do. <br />
We provide learning resources in over 20 countries and six continents. <br />
Every user is different, but they share the same goal: to improve the lives of children through education.</Text>
   
<FcGlobe/>
<Text fontSize={22}>Over 43,128,798 people have signed up as Education.com members</Text>
   <HStack gap={490}>
    <VStack>
    <FcStatistics/>
<Text fontSize={22}>21,564,399 are teachers</Text>
    </VStack>
    <VStack>
    <FcSettings/>
<Text fontSize={22}>10,000 new members join every day</Text>
    </VStack>
   </HStack>
   
    </VStack>
    <Heading textAlign="Center" marginTop={10} marginBottom={10}>What our members say</Heading>
    <HStack  paddingBottom={10}  gap={40} width="70%" justifyContent="center" alignItems="center" display="flex" margin="auto">
        <Text>  Students like the interactive games to practice reading and writing. As a teacher, I love the correlation to standards, and that I am able to see the progress and struggles my students have in obtaining skills.

- Sara D., Teacher</Text>
<Text>
Education.com has been an invaluable aid to me in teaching my children from home, no matter what the grade level. It's so quick and easy to look for and download specifically what I need in a moment, and at a most reasonable cost.

- Patricia K., Homeschooler
</Text>
    </HStack>
    <Footer/>
    </>
  );
}
export default About;
