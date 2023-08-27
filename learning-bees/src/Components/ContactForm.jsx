


import React, { useState } from 'react';
import { Input, Textarea, Button } from '@chakra-ui/react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Form submitted:', { name, email, message });
    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <Input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Textarea
        placeholder="Your Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />
      <Button type="submit" colorScheme="blue">
        Submit
      </Button>
    </form>
  );
}

export default ContactForm;

