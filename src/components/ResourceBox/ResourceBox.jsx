/* eslint-disable react/prop-types */
import { Box, Link } from "@chakra-ui/react";

const ResourceBox = (props) => {

    return (
        <Box
            p="4"
            borderWidth="2px"
            borderRadius="lg"
            w="90%"
            textAlign="left"
        >
            <Link href="https://example.com" isExternal>
              <Box as="h2" fontSize="xl" fontWeight="semibold">
                {props.link}
              </Box>
            </Link>
              <Box fontSize="md" mt="2">
                {props.text}
              </Box>
        </Box>
    );

}

export default ResourceBox;