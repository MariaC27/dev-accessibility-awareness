import { Heading, Text, Center } from '@chakra-ui/react';
import '../../App.css'

const Home = () => {
  return (
    <Center className="gradient" width={"100vw"} height={"100vh"} display="flex" flexDirection="column">
        <Heading as="h1" size="xl" mb={4}>
          Welcome to the Dev Accessibility Awareness Project
        </Heading>
        <Text fontSize="lg" marginBottom="5vh">
          Promoting developer awareness of accessible coding practices outside of the 
          production sphere.
        </Text>
        <Text fontSize="md" textAlign={"center"} width="70vw">
            Here, you will find resources, examples, and an AI-powered code editor to help you understand
            and implement accessibility best practices in your projects. Click on the links in the navbar to get started!
        </Text>
    </Center>
  );
};

export default Home;
