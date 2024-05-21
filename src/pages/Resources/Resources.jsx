/* eslint-disable no-unused-vars */
import { Box, Heading, Text, VStack, Link, Button, ListItem, UnorderedList } from '@chakra-ui/react';

const Resources = () => {
  return (
    <Box pl={10} pt={10} height={"100vh"}>
      <Heading as="h1" size="xl" mb={4}>
        Resources
      </Heading>
      <Text fontSize="lg" mb={4}>
        Feel free to check out these further resources:
      </Text>

      <VStack align="start" spacing="8">
        
        <Box
            p="4"
            borderWidth="2px"
            borderRadius="lg"
            w="90%"
            textAlign="left"
        >
            <Text fontSize="lg">Item 1</Text>
        </Box>

        <Box
            p="4"
            borderWidth="2px"
            borderRadius="lg"
            w="90%"
            textAlign="left"
        >
            <Text fontSize="lg">Item 2</Text>
        </Box>

        <Box
            p="4"
            borderWidth="2px"
            borderRadius="lg"
            w="90%"
            textAlign="left"
        >
            <Text fontSize="lg">Item 3</Text>
        </Box>

      </VStack>
      
    </Box>
  );
};

export default Resources;
