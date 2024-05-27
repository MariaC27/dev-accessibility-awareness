/* eslint-disable no-unused-vars */
import { Box, Heading, Text, VStack, Center, Link, Button, ListItem, UnorderedList } from '@chakra-ui/react';
import '../../App.css'

const Resources = () => {
  return (
    <Center className="gradient" width={"100vw"} overflowY="auto" display="flex" flexDirection="column">
      <Box p={4} textAlign={'center'} width={"70vw"} marginBottom="5vh">
        <Heading as="h1" size="xl" m={"2vh"}>
          Resources
        </Heading>
        <Text fontSize="lg" mb={10}>
          Feel free to check out these definitions and further resources:
        </Text>
      </Box>

      <VStack align="center" spacing="8" width={"90vw"}>
        
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
    </Center>  
  );
};

export default Resources;
