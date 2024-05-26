import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import CodeExample from '../../components/CodeExample/CodeExample';

const Explanations = () => {
  return (
    <Box pl={10} pt={10}>
      <Heading as="h1" size="xl" mb={4}>
        Explanations and Examples
      </Heading>
      <Text fontSize="lg" mb={10} width={"80vw"}>
        Welcome to our interactive guide on developer-side accessibility best practices! Below, you will find explanations and examples for using alt text, semantic HTML, and ARIA tags.
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
            <CodeExample originalCode={"<div>test</div>"} changedCode={"<div>test2</div>"}/>
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
            <CodeExample originalCode={"<div>test</div>"} changedCode={"<div>test2</div>"}/>
          </VStack>
        </Box>
      </VStack>
      
    </Box>
  );
};

export default Explanations;
