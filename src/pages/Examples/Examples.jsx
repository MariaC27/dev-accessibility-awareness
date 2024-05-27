/* eslint-disable no-unused-vars */
import { Box, Heading, Text, VStack, Center } from '@chakra-ui/react';
import CodeExample from '../../components/CodeExample/CodeExample';
import {d1, d2, d3} from '../../services/ExamplesDiff';
import '../../App.css'

const Explanations = () => {

  return (
    <Center className="gradient" width={"100vw"} overflowY="auto" display="flex" flexDirection="column">
    <Box p={4} textAlign={'center'} width={"70vw"} marginBottom="5vh">
      <Heading as="h1" size="xl" m={"2vh"}>
        Explanations and Examples
      </Heading>
      <Text fontSize="lg" mb={"2vh"}>
        Welcome to our interactive guide on developer-side accessibility best practices! Below, you will find explanations and examples for using alt text, semantic HTML, and ARIA tags.
      </Text>
      <Text fontSize="sn" mb={"3vh"}>
        In the examples, click on the highlighted areas to see the reasoning.
      </Text>
    </Box>
      <VStack align="start" spacing="8" width={"90vw"}>
        <Box
          p="4"
          borderWidth="3px"
          borderRadius="lg"
          w="100%"
          textAlign="left"
        >
          <VStack align="start" spacing="4">
            <Heading as="h3" size="md" color="blue.600">
              ARIA Labels
            </Heading>
            <Text>
            ARIA, which stands for Accessible Rich Internet Applications, provides
            attributes that can be added to HTML elements to improve accessibility
            for users with disabilities. ARIA labels are used to provide additional
            context or descriptive information to elements that may not be
            adequately conveyed through their default presentation or text content.
            They are particularly useful for elements like icons, buttons, or other
            non-textual elements.
            </Text>
            <CodeExample diff={d1}/>
          </VStack>
        </Box>

        <Box
          p="4"
          borderWidth="3px"
          borderRadius="lg"
          w="100%"
          textAlign="left"
        >
          <VStack align="start" spacing="4">
            <Heading as="h3" size="md" color="blue.600">
              Alternative Text
            </Heading>
            <Text>
            Alt text, short for alternative text, is a brief description of an
            image&apos;s content. It serves as a replacement for the image when it
            cannot be displayed to the user, either because of slow internet
            connection, browser limitations, or because the user is visually
            impaired and using a screen reader. Alt text should be concise and
            descriptive, conveying the purpose or meaning of the image to ensure
            that all users can understand the content.
            </Text>
            <CodeExample diff={d2}/>
          </VStack>
        </Box>

        <Box
          p="4"
          borderWidth="3px"
          borderRadius="lg"
          w="100%"
          textAlign="left"
        >
          <VStack align="start" spacing="4">
            <Heading as="h3" size="md" color="blue.600">
              Semantic HTML
            </Heading>
            <Text>
            Semantic HTML refers to the use of HTML elements that accurately describe the purpose of the content they contain. Semantic HTML should convey not only how content should be presented visually but also provide context and meaning to browsers and assistive technologies, such as screen readers.

            Some examples of semantic HTML elements include: 
              &lt;header&gt;: Represents introductory content at the beginning of a section or page.
              &lt;nav&gt;: Defines navigation links.
              &lt;main&gt;: Contains the primary content of a document.
              &lt;section&gt;: Groups related content together.
            </Text>
            <CodeExample diff={d3}/>
          </VStack>
        </Box>

      </VStack>
    </Center>
  );
};

export default Explanations;
