import { Box, Heading, Text, VStack, Link, Button } from '@chakra-ui/react';

const Explanations = () => {
  return (
    <Box pl={10} pt={10} height={"100vh"}>
      <Heading as="h1" size="xl" mb={4}>
        Explanations and Examples
      </Heading>
      <Text fontSize="lg" mb={4}>
        Welcome to our interactive guide on developer-side accessibility best practices! Below, you will find explanations on alt text, semantic HTML, and accessibility tags.
      </Text>

      <VStack align="start" spacing="8">
        <Box
          p="4"
          borderWidth="1px"
          borderRadius="lg"
          w="90%"
          textAlign="left"
        >
          <VStack align="start" spacing="4">
            <Heading as="h3" size="md" color="blue.600">
              Semantic HTML
            </Heading>
            <Text>
              Semantic HTML means...
            </Text>
            <Link href="#" isExternal>
              <Button colorScheme="blue">See an example</Button>
            </Link>
          </VStack>
        </Box>

        <Box
          p="4"
          borderWidth="1px"
          borderRadius="lg"
          w="90%"
          textAlign="left"
        >
          <VStack align="start" spacing="4">
            <Heading as="h3" size="md" color="blue.600">
              Alternative Text
            </Heading>
            <Text>
              Alternative text is...
            </Text>
            <Link href="#" isExternal>
              <Button colorScheme="blue">See an example</Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
      
    </Box>
  );
};

export default Explanations;
