/* eslint-disable no-unused-vars */
import { Box, Heading, Text, VStack, Center, Link, Button, ListItem, UnorderedList } from '@chakra-ui/react';
import '../../App.css'
import ResourceBox from '../../components/ResourceBox/ResourceBox';

const Resources = () => {
  return (
    <Center className="gradient" width={"100%"} overflowY="auto" display="flex" flexDirection="column">
      <Box p={4} textAlign={'center'} width={"70%"} marginBottom="3vh">
        <Heading as="h1" size="xl" m={"2vh"}>
          Resources
        </Heading>
        <Text fontSize="lg" mb={10}>
          Further reading, interactive tools and websites, checklists
        </Text>
      </Box>

      <VStack align="center" spacing="8" width={"90vw"} mb={"5vh"}>
        
        <ResourceBox link="https://www.a11yproject.com/" text="The A11Y Project site is a comprehensive online resource dedicated to promoting web accessibility. You can find accessibility workshops, videos, checklists, and connections to a community of accessibility-focused developers and designers. Check out the Resources tab which has plenty of books, articles, blogs, and online tools related to accessibility!"/>

        <ResourceBox link="https://all.rit.edu/" text="The Accessible Learning Labs (ALL) site provides a series of interactive online labs intended to educate students on how to create accessible software. Labs include Accessibility for Sound and Speech, Accessibility to Colorblindness, Accessibility to Cognitive Impairments, and Ethics of AI. Each lab includes interactive reading and a few short exercises and simulations! "/>

        <ResourceBox link="https://wave.webaim.org/" text="The WAVE accessibility evalutation tool allows you to paste in a link to a site and see all the accessibility features and issues on that site. Try it by pasting a link to a site into the input bar at the top of the page. You'll then see icons around the page indicating the presence (or lack) of certain attributes like ARIA tags!"/>

        <ResourceBox link="https://wcag.com/developers/" text="This site provides a set of cards with common WCAG success criteria. Each card has a short descripton and link to the full WCAG site. Great at-a-glance resouce for developer WCAG compliance."/>

        <ResourceBox link="https://www.getstark.co/" text="Stark provides an end-to-end accessibility workflow intended more for a company setting. You can add Stark plugins to Figma and Github, manage project-wide accessibility tools through the web dashboard, and manage company-wide accessibility initiatives through a centralized compliance center. "/>
      </VStack>
    </Center>  
  );
};

export default Resources;
