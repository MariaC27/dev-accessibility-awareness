import { Box, Button, Heading, Text, VStack, HStack, Link } from "@chakra-ui/react";

const Test = () => {
  return (
    <Box width="100%" padding="4">
      <VStack align="start" spacing="8">
        <Box>
          <HStack spacing="4" align="start">
            <Box boxSize="10">
              <Box
                bg="blue.500"
                w="10"
                h="10"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 12.713L1.9 6.75V18h20.2V6.75L12 12.713zM12 11.287l10.1-5.963H1.9l10.1 5.963zM0 4.5l12-7 12 7v15.5H0V4.5z" />
                </svg>
              </Box>
            </Box>
            <Heading as="h2" size="lg">
              Start Email Marketing and List Building
            </Heading>
          </HStack>
        </Box>

        <Box
          p="4"
          borderWidth="1px"
          borderRadius="lg"
          w="100%"
          textAlign="left"
        >
          <VStack align="start" spacing="4">
            <Heading as="h3" size="md" color="blue.600">
              ConvertKit
            </Heading>
            <Text>
              ConvertKit makes managing your email list and setting up autoresponders so easy and user-friendly. Segmenting my email subscribers into groups so that they get content specific to their individual needs has never been more simple.
              I highly recommend using ConvertKit for your email list building.
            </Text>
            <Link href="#" isExternal>
              <Button colorScheme="blue">Try ConvertKit</Button>
            </Link>
          </VStack>
        </Box>

        <Box
          p="4"
          borderWidth="1px"
          borderRadius="lg"
          w="100%"
          textAlign="left"
        >
          <VStack align="start" spacing="4">
            <Heading as="h3" size="md" color="blue.600">
              Step-by-Step How to Start an Email List Tutorial
            </Heading>
            <Text>
              Another one of my completely free, step-by-step tutorials! This one will teach you how to start an email list, which I consider your business’s most valuable asset—this is the key to connecting directly with your audience. I walk you through the technical setup and teach you how to write and promote your email list.
            </Text>
            <Link href="#" isExternal>
              <Button colorScheme="blue">Start Your Email</Button>
            </Link>
          </VStack>
        </Box>
      </VStack>
    </Box>
  );
};

export default Test;