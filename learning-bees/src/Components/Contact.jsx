import React from 'react'
import { Box, Container, Heading, Text } from '@chakra-ui/react'
import Footer from './Footer'
import ContactForm from './ContactForm'

function Contact(){
  return(
    <Box>
       <Box as="section" className="contact-section" marginBottom="46px">
          <Container>
             <Heading>Contact Us</Heading>
                <Text marginBottom={10}>If you have any questions 
                or inquiries, feel free to reach out to us.</Text>
              <ContactForm/>
          </Container>
        </Box>
        <Footer/>
    </Box>
  )
}

export default Contact



















































































































































































