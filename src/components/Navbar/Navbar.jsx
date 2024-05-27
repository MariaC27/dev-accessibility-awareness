import { Flex, Link, Spacer, HStack} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import a11ylogo from '../../assets/a11y-logo.png';
import './Navbar.css'

const Logo = () => {
    return (
      <Link as={RouterLink} to="/">
        <img src={a11ylogo} alt="main page logo" />
      </Link>
    );
};

const Navbar = () => {
  return (
      <Flex w="100%"
        px="5"
        py="5"
        align="center"
        justify="space-between"
        className="b-color"
        >
        <HStack as="nav" spacing="5">
          <Logo id="logo"/>
          <Spacer />
          <Link as={RouterLink} to="/editor">
            Editor
          </Link>
          <Spacer />
          <Link as={RouterLink} to="/examples">
            Examples
          </Link>
          <Spacer />
          <Link as={RouterLink} to="/resources">
            Resources
          </Link>
        </HStack>
      </Flex>
  );
};

export default Navbar;
