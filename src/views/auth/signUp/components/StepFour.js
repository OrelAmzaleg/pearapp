
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
} from '@chakra-ui/react';
// Assets
import { createUserWithEmailAndPassword, sendEmailVerification, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../../../../firebase'

import { HSeparator } from 'components/separator/Separator';

import { NavLink } from 'react-router-dom';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { RiEyeCloseLine } from 'react-icons/ri';

function StepFour({ onValidityChange }) {
  // Existing state declarations remain the same

  // Additional state for phone verification
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [verificationCode, setVerificationCode] = React.useState('');
  const [codeSent, setCodeSent] = React.useState(false); // To track if the code has been sent

  const [firstName, setFirstName] = React.useState('');
  const [firstNameTouched, setFirstNameTouched] = React.useState(false);
  const [lastName, setLastName] = React.useState('');
  const [lastNameTouched, setLastNameTouched] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [emailTouched, setEmailTouched] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [passwordTouched, setPasswordTouched] = React.useState(false);
  const isValidFirstName = firstName.trim() !== '';

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
  const handleSignUp = async () => {
    try {
      if (!isValidEmail || !isValidPassword) {
        alert('Please enter a valid email and password.');
        return;
      }

      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Send email verification
      await sendEmailVerification(user);

      // Request SMS code after successful sign up
      requestSMSCode();
    } catch (error) {
      console.error("Error signing up:", error);
      alert(error.message);
    }
  };

  // Function to request SMS verification code
  const requestSMSCode = async () => {
    try {
      const recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
        'size': 'invisible'
      }, auth);

      // Send phone verification code
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
      window.confirmationResult = confirmationResult;
      setCodeSent(true); // Indicate that the code has been sent
      alert('Verification code sent to phone.');
    } catch (error) {
      console.error("Error requesting SMS code:", error);
      alert(error.message);
    }
  };

  // Function to verify phone number with code
  const verifyPhoneCode = async () => {
    try {
      if (!window.confirmationResult) {
        throw new Error("Verification process not initiated correctly.");
      }

      const result = await window.confirmationResult.confirm(verificationCode);
      // Phone number successfully verified
      alert('Phone number verified successfully');
    } catch (error) {
      console.error("Error verifying phone code:", error);
      alert(error.message);
    }
  };



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
          Sign Up
        </Heading>
        <Text
          mb="36px"
          ms="4px"
          color={textColorSecondary}
          fontWeight="400"
          fontSize="md"
        >
          Enter your email and password to sign up!
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
            columns={{ base: '1', md: '2' }}
            gap={{ sm: '10px', md: '26px' }}
          >
            <Flex direction="column">
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                First name<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                  if (!firstNameTouched) setFirstNameTouched(true);
                }}
                onBlur={() => setFirstNameTouched(true)}
                fontSize="sm"
                ms={{ base: '0px', md: '4px' }}
                placeholder="First name"
                variant="auth"
                mb={!isValidFirstName && firstNameTouched ? '0px' : '24px'}
                size="lg"
              />
              {!isValidFirstName && firstNameTouched && (
                <Text
                  display="block"
                  ms="10px"
                  fontSize="sm"
                  fontWeight="500"
                  color="red.600"
                  mt="8px"
                  mb="16px"
                >
                  **First name is required
                </Text>
              )}
            </Flex>

            <Flex direction="column">
              <FormLabel
                display="flex"
                ms="4px"
                fontSize="sm"
                fontWeight="500"
                color={textColor}
                mb="8px"
              >
                Last name<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                isRequired={true}
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                  if (!lastNameTouched) setLastNameTouched(true);
                }}
                onBlur={() => setLastNameTouched(true)}
                fontSize="sm"
                ms={{ base: '0px', md: '4px' }}
                placeholder="Last name"
                variant="auth"
                mb={!isValidLastName && lastNameTouched ? '0px' : '24px'}
                size="lg"
              />
              {!isValidLastName && lastNameTouched && (
                <Text
                  display="block"
                  ms="10px"
                  fontSize="sm"
                  fontWeight="500"
                  color="red.600"
                  mt="8px"
                  mb="16px"
                >
                  **last name is required
                </Text>
              )}
            </Flex>
          </SimpleGrid>
          <SimpleGrid
            columns={{ base: '1', md: '2' }}
            gap={{ sm: '10px', md: '26px' }}
          >
              <Flex direction="column">
               <FormLabel
            display="flex"
            ms="4px"
            fontSize="sm"
            fontWeight="500"
            color={textColor}
            mb="8px"
          >
            Email<Text color={brandStars}>*</Text>
          </FormLabel>
          <Input
                isRequired={true}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (!emailTouched) setEmailTouched(true);
                }}
                onBlur={() => setEmailTouched(true)}
                fontSize="sm"
                ms={{ base: '0px', md: '4px' }}
                placeholder="Email name"
                variant="auth"
                mb={!isValidEmail && emailTouched ? '0px' : '24px'}
                size="lg"
              />
              {!isValidEmail && emailTouched && (
                <Text
                  display="block"
                  ms="10px"
                  fontSize="sm"
                  fontWeight="500"
                  color="red.600"
                  mt="8px"
                  mb="16px"
                >
                  **Email Address is required
                </Text>
              )}
 </Flex>
 <Flex direction="column">
  <FormLabel
    display="flex"
    ms="4px"
    fontSize="sm"
    fontWeight="500"
    color={textColor}
    mb="8px"
  >
    Phone Number<Text color={brandStars}>*</Text>
  </FormLabel>
  <Input
    isRequired={true}
    value={phoneNumber}
    onChange={(e) => {
      setPhoneNumber(e.target.value);
      // Update touch state if necessary
    }}
    fontSize="sm"
    ms={{ base: '0px', md: '4px' }}
    placeholder="Phone Number"
    variant="auth"
    mb="24px"
    size="lg"
  />
              {!isValidEmail && emailTouched && (
                <Text
                  display="block"
                  ms="10px"
                  fontSize="sm"
                  fontWeight="500"
                  color="red.600"
                  mt="8px"
                  mb="16px"
                >
                  **Phone Number is required
                </Text>
              )}
              </Flex>
              </SimpleGrid>
              <SimpleGrid
            columns={{ base: '1', md: '2' }}
            gap={{ sm: '10px', md: '26px' }}
          >
              <Flex direction="column">
 <FormControl>
  <FormLabel
    ms="4px"
    fontSize="sm"
    fontWeight="500"
    isRequired={true}
    color={textColor}
    display="flex"
  >
    Password<Text color={brandStars}>*</Text>
  </FormLabel>


  <InputGroup size="md">
    <Input
      isRequired={true}
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
        if (!passwordTouched) setPasswordTouched(true);
      }}
      onBlur={() => setPasswordTouched(true)}
      fontSize="sm"
      ms={{ base: '0px', md: '4px' }}
      placeholder="Min. 8 characters"
      variant="auth"
      mb="24px"
      size="lg"
      type={show ? 'text' : 'password'} // Toggle input type based on the show state
    />
    <InputRightElement display="flex" alignItems="center" mt="4px">
      <Icon
        color={textColorSecondary}
        _hover={{ cursor: 'pointer' }}
        as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye} // Toggle icon based on the show state
        onClick={handleClick} // Toggle visibility on icon click
      />
    </InputRightElement>
  </InputGroup>

  {!isValidPassword && passwordTouched && (
    <Text
      display="block"
      ms="10px"
      fontSize="sm"
      fontWeight="500"
      color="red.600"
      mt="-20px"
      mb="16px"
    >
      **Password is required
    </Text>
  )}
</FormControl>
</Flex>
<Flex direction="column">
 <FormControl>
  <FormLabel
    ms="4px"
    fontSize="sm"
    fontWeight="500"
    isRequired={true}
    color={textColor}
    display="flex"
  >
    Password<Text color={brandStars}>*</Text>
  </FormLabel>


  <InputGroup size="md">
    <Input
      isRequired={true}
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
        if (!passwordTouched) setPasswordTouched(true);
      }}
      onBlur={() => setPasswordTouched(true)}
      fontSize="sm"
      ms={{ base: '0px', md: '4px' }}
      placeholder="Min. 8 characters"
      variant="auth"
      mb="24px"
      size="lg"
      type={show ? 'text' : 'password'} // Toggle input type based on the show state
    />
    <InputRightElement display="flex" alignItems="center" mt="4px">
      <Icon
        color={textColorSecondary}
        _hover={{ cursor: 'pointer' }}
        as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye} // Toggle icon based on the show state
        onClick={handleClick} // Toggle visibility on icon click
      />
    </InputRightElement>
  </InputGroup>

  {!isValidPassword && passwordTouched && (
    <Text
      display="block"
      ms="10px"
      fontSize="sm"
      fontWeight="500"
      color="red.600"
      mt="-20px"
      mb="16px"
    >
      **Password is required
    </Text>
  )}
</FormControl>
</Flex>
</SimpleGrid>
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
    
        </FormControl>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="start"
          maxW="100%"
          mt="0px"
        >
          <Text color={textColorDetails} fontWeight="400" fontSize="sm">
            Already a member?
            <NavLink to="/auth/sign-in">
              <Text color={textColorBrand} as="span" ms="5px" fontWeight="500">
                Sign in
              </Text>
            </NavLink>
          </Text>
          <Button onClick={handleSignUp}>Sign Up</Button>
          <Button onClick={verifyPhoneCode}>Verify Phone Code</Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default StepFour;
