import { Box, Heading, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Center } from '@chakra-ui/react';

const Explanations = () => {
  return (
    <Center height={"100vh"}>
    <Box p={4}>
      <Heading as="h1" size="xl" mb={4}>
        Accessibility Awareness
      </Heading>
      <Text fontSize="lg" mb={4}>
        Welcome to our interactive guide on accessibility best practices! Below, you will find explanations on alt text, semantic HTML, and accessibility tags.
      </Text>
      
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Alt Text
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize="md">
              Alt text is a brief description of an image that is used by screen readers to describe images to visually impaired users. It should be concise yet descriptive, conveying the essential information conveyed by the image.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Semantic HTML
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize="md">
              Semantic HTML elements are tags that convey meaning beyond their appearance. They provide context and structure to content, making it easier for assistive technologies like screen readers to interpret and navigate the content.
            </Text>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                A11y Tags
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Text fontSize="md">
              Accessibility (a11y) tags are attributes or elements used to enhance the accessibility of web content. They provide additional information to assistive technologies and improve the usability of websites for users with disabilities.
            </Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
    </Center>
  );
};

export default Explanations;
