/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import CodeExample from '../../components/CodeExample/CodeExample';

const Explanations = () => {

  const d1 = [
    {
      isMod: true,
      lineIndex: 0,
      modifiedLine: "<h2 aria-label=\"Welcome to our site!\">Welcome to our site!</h2>",
      originalLine: "<h2>Welcome to our site!</h2>",
      reason: "The modified version added an aria-label attribute to the <h2> element to provide a text alternative for screen readers, making the content more accessible to users with visual impairments. This modification ensures that all users, including those who rely on screen readers, can understand the purpose of the heading."
    },
    {
      isMod: true,
      lineIndex: 1,
      modifiedLine: `<p aria-label="Click on the links below to check things out">Click on the links below to check things out</p>`,
      originalLine: "<p>Click on the links below to check things out</p>",
      reason: "The accessibility modification was necessary to provide a more descriptive label for screen reader users who may not be able to see the visual content. Adding the `aria-label` attribute ensures that users with disabilities can understand the purpose of the link without relying on visual cues."
    },
    {
      isMod: true,
      lineIndex: 2,
      modifiedLine: `<a href="https://www.w3schools.com" aria-label="Visit W3Schools">Visit W3Schools</a>`,
      originalLine: "<a href=\"https://www.w3schools.com\">Visit W3Schools</a> ",
      reason: "The accessibility modification was necessary to provide a descriptive label for the link that is read out by screen readers, making it clear to users with visual impairments where the link will take them."

    },
  ]


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
            <CodeExample diff={d1}/>
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
            <CodeExample diff={d1}/>
          </VStack>
        </Box>
      </VStack>
      
    </Box>
  );
};

export default Explanations;
