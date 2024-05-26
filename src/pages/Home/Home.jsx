import { Heading, Text, Center } from '@chakra-ui/react';

const Home = () => {
  return (
    <Center width={"100vw"} height={"100vh"} display="flex" flexDirection="column" justifyContent={'center'}>
        <Heading as="h1" size="xl" mb={4}>
          Welcome to the Dev Accessibility Awareness Project
        </Heading>
        <Text fontSize="lg" marginBottom="5vh">
          Promoting developer awareness of accessible coding practices outside of the 
          production sphere.
        </Text>
        <Text fontSize="lg">
            Here, you will find resources, examples, and an AI-powered code editor to help you understand
            and implement accessibility best practices in your projects. Click on the links in the navbar to get started!
        </Text>
    </Center>
  );
};

export default Home;
