// Chakra imports
import {
    Box,
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Icon,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    SimpleGrid,
    Text,
    useColorModeValue,
    VStack,
    Image,
    Spinner,
  } from '@chakra-ui/react';
  // Assets
  
  import { HSeparator } from 'components/separator/Separator';
  
  import { useNavigate , useHistory } from 'react-router-dom';
  import React from 'react';
  import { FcGoogle } from 'react-icons/fc';
  import { MdOutlineRemoveRedEye } from 'react-icons/md';
  import { RiEyeCloseLine } from 'react-icons/ri';
  import PearAppLogo from 'assets/img/pearapp/Logos/pearAppPng.png'
  import Dropzone from './Dropzone';
  function StepNine({ onValidityChange }) {
    const [firstName, setFirstName] = React.useState('');
    const [firstNameTouched, setFirstNameTouched] = React.useState(false);
    const [lastName, setLastName] = React.useState('');
    const [lastNameTouched, setLastNameTouched] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [emailTouched, setEmailTouched] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [passwordTouched, setPasswordTouched] = React.useState(false);
    const isValidFirstName = firstName.trim() !== '';
    const [isSubmitted, setIsSubmitted] = React.useState(false); // New state for tracking submission
    const navigate = useNavigate(); // useNavigate for navigation
    const isValidLastName = lastName !== '';
    const isValidEmail = email !== '' && email.includes('@'); // Simple email validation
    const isValidPassword = password !== '' && password.length >= 8; // Example: Password must be at least 8 characters
    React.useEffect(() => {
      checkFormValidity();
    }, [
      firstName,
      lastName,
      email,
      password,
      firstNameTouched,
      lastNameTouched,
      emailTouched,
      passwordTouched,
    ]);
  
    // Function to check the overall form validity
    const checkFormValidity = () => {
      const isValid = isValidFirstName && isValidLastName && isValidEmail && isValidPassword;
      if (typeof onValidityChange === 'function') {
        onValidityChange(isValid);
      }
    };
    
  
    // Call checkFormValidity whenever any field value or its validity changes
   
    // Chakra color mode
    const textColor = useColorModeValue('navy.700', 'white');
    const textColorSecondary = 'gray.400';
    const textColorDetails = useColorModeValue('navy.700', 'secondaryGray.600');
    const textColorBrand = useColorModeValue('brand.500', 'white');
    const brandStars = useColorModeValue('brand.500', 'brand.400');
    const googleBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.200');
    const googleText = useColorModeValue('navy.700', 'white');
    const googleHover = useColorModeValue(
      { bg: 'gray.200' },
      { bg: 'whiteAlpha.300' },
    );
    const googleActive = useColorModeValue(
      { bg: 'secondaryGray.300' },
      { bg: 'whiteAlpha.200' },
    );
    const [show, setShow] = React.useState(false);
  
    return (
  
      <Flex
      w="100%"
      maxW="max-content"
      mx={{ base: 'auto', lg: '0px' }}
      me="auto"
      h="100%"
      justifyContent="center"
      mb={{ base: '30px', md: '60px' }}
      px={{ base: '25px', md: '0px' }}
      mt={{ base: '40px', md: '8vh' }}
      flexDirection="column"
    >
        <Box me="auto">
          <Heading
            color={textColor}
            fontSize={{ base: '34px', lg: '36px' }}
            mb="10px"
          >
            Final Step
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Submition and Terms Conditions
          </Text>
        </Box>
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: '100%', md: '620px' }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: 'auto', lg: 'unset' }}
          me="auto"
          mb={{ base: '20px', md: 'auto' }}
        >
          <Flex align="center" mb="25px">
            <HSeparator />
          </Flex>
          <FormControl>
            <SimpleGrid
              columns={{ base: '1', md: '1' }}
              gap={{ sm: '10px', md: '26px' }}
            >
                <Dropzone />
  
            <Flex justifyContent="space-between" align="center" mb="24px">
              <FormControl display="flex" alignItems="start">
                <Checkbox
                  id="remember-login"
                  colorScheme="brand"
                  me="10px"
                  mt="3px"
                />
                <FormLabel
                  htmlFor="remember-login"
                  mb="0"
                  fontWeight="normal"
                  color={textColor}
                  fontSize="sm"
                >
                  By creating an account means you agree to the{' '}
                  <Link
                    href="ss"
                    fontWeight="500"
                  >
                    Terms and Conditions,
                  </Link>{' '}
                  and our{' '}
                  <Link
                    href="ss"
                    fontWeight="500"
                  >
                    Privacy Policy
                  </Link>
                </FormLabel>
              </FormControl>
            </Flex>
      </SimpleGrid>
          </FormControl>
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            maxW="100%"
            mt="0px"
          >
          
          </Flex>
        </Flex>
      </Flex>

    );
  }
  
  export default StepNine;
  