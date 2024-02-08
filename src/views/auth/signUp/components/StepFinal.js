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

function StepFinal({ onValidityChange }) {
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
  const handleClick = () => setShow(!show);
  
  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/auth/sign-in/default'); // Replace with your desired path
    }, 10000); // Redirect after 10 seconds
  };

  const thankYouMessage = (
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
           Thank You for Your Submission!
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
      gap={{ sm: '10px', md: '10px' }}
    >
      <Text color={textColorSecondary} fontSize="md">
        Your request is currently being processed by our team. We are excited to welcome you to PearApp and encourage you to explore new funding opportunities in your account. Stay updated and feel free to reach out to your agent for assistance.
      </Text>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <Image w={"250px"} src={PearAppLogo} mb="4" /> {/* Margin bottom to create space between image and spinner */}
        <Spinner 
          thickness='4px' 
          speed='0.65s' 
          emptyColor='gray.200' 
          color='blue.500' 
          size='xl'
        />
      </Flex>
    </SimpleGrid>
  </FormControl>
</Flex>

</Flex>
  );
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
      {isSubmitted ? (
          thankYouMessage
        ) : (
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
           <Text>
          * PearApp offers same-day funding, available in select states for term loans up to $100K.
          * Eligibility for this is Monday – Friday before 10:30 a.m. ET. 
          * Complete your process before this time to receive funds by 5 p.m. local time the same day. 
          * Applications after 10:30 a.m. ET, during weekends, or on bank holidays will see funds deposited in 2 – 3 business days. 
          * Terms and conditions apply. Instant Funding and withdrawals can be managed through the 
          * PearApp desktop and mobile website, but are not yet supported on the PearApp mobile app. 
          * Occasionally, transfers might take up to 30 minutes due to Visa and bank processing times. 
          * This feature comes at no extra cost and is supported by most major banks, available for transactions between $1K-$10K.
           </Text>

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
           <Button bg={"blue.100"} onClick={handleSubmit}>
              <Text fontSize="sm" textAlign="center" wordBreak="break-word">
                Submit
              </Text>
            </Button>
        </Flex>
      </Flex>
    </Flex>
        )}
   </Flex>
  );
}

export default StepFinal;
