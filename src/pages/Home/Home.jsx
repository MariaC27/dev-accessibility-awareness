import { Heading, Text, Center, Box, Link } from '@chakra-ui/react';
import '../../App.css'

const Home = () => {
  return (
    <Center className="gradient" width={"100%"} height={"90vh"} overflowY="hidden" display="flex" flexDirection="column">
        <Box p={4} textAlign={'center'} width={"70%"} marginBottom="3vh">
          <Heading as="h1" size="xl" textAlign={'center'} m={"2vh"}>
            Welcome to the Dev Accessibility Awareness Project
          </Heading>
          <Text fontSize="lg" textAlign={'center'} marginBottom="5vh">
            Promoting developer awareness of accessible coding practices outside of the 
            production sphere.
          </Text>
          <Text fontSize="md" textAlign={"center"}>
              Here, you will find resources, examples, and an AI-powered code editor to help you understand
              and implement accessibility best practices in your projects. Click on the links in the navbar to get started!
          </Text>
        </Box>
        <Box as="footer" mt="auto" py="4" textAlign="center">
          <Text fontSize="sm">
            © {new Date().getFullYear()} Dartmouth College | 
            Made by Maria Cristoforo | <Link href="https://github.com/MariaC27/dev-accessibility-awareness" isExternal color="blue.500"> GitHub</Link>
          </Text>
        </Box>
    </Center>
    
  );
};

export default Home;
