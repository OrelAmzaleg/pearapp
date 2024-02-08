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
    Select,
    VStack,
  } from '@chakra-ui/react';
  // Assets
  
  import { HSeparator } from 'components/separator/Separator';
  
  import { NavLink } from 'react-router-dom';
  import React from 'react';
  import { FcGoogle } from 'react-icons/fc';
  import { MdOutlineRemoveRedEye } from 'react-icons/md';
  import { RiEyeCloseLine } from 'react-icons/ri';
  ///TODO****להחליף את השדות לפרטים על בעל העסק וכו. זה קומפוננטה 5***********
  
  function StepSix({ onValidityChange }) {
    const [firstName, setFirstName] = React.useState('');
    const [firstNameTouched, setFirstNameTouched] = React.useState(false);
    const [lastName, setLastName] = React.useState('');
    const [lastNameTouched, setLastNameTouched] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [emailTouched, setEmailTouched] = React.useState(false);
    const [password, setPassword] = React.useState('');
    const [passwordTouched, setPasswordTouched] = React.useState(false);
    const isValidFirstName = firstName.trim() !== '';
    const [selectedButton, setSelectedButton] = React.useState(null);
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
      const isValid =
        isValidFirstName && isValidLastName && isValidEmail && isValidPassword;
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
            What's your personal Information?
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Let Us Know you Better!
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
            <SimpleGrid
              columns={{ base: '1', md: '4' }}
              gap={{ sm: '10px', md: '15px' }}
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
                  SSN<Text color={brandStars}>*</Text>
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
                   Owner Name<Text color={brandStars}>*</Text>
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
                 Title<Text color={brandStars}>*</Text>
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
                  placeholder="CEO \ VP \..."
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
            
              <Flex direction="column">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                 %Ownership<Text color={brandStars}>*</Text>
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
              columns={{ base: '1', md: '3' }}
              gap={{ sm: '10px', md: '15px' }}
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
                  Home Address
                  <Text color={brandStars}>*</Text>
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
                  placeholder="Business Address"
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
  
              <Flex direction="column">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  City
                  <Text color={brandStars}>*</Text>
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
                  placeholder="City"
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
              <Flex direction="column">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  State & ZIP Code
                  <Text color={brandStars}>*</Text>
                </FormLabel>
                <Flex>
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
                    placeholder="State"
                    variant="auth"
                    mb={!isValidLastName && lastNameTouched ? '0px' : '24px'}
                    size="lg"
                  />
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
                    placeholder="ZIP"
                    variant="auth"
                    mb={!isValidLastName && lastNameTouched ? '0px' : '24px'}
                    size="lg"
                  />
                </Flex>
              </Flex>
            </SimpleGrid>
            <SimpleGrid
              columns={{ base: '1', md: '3' }}
              gap={{ sm: '10px', md: '15px' }}
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
                 DOB<Text color={brandStars}>*</Text>
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
              <Flex direction="column">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                 Your Email Address
                  <Text color={brandStars}>*</Text>
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
                  placeholder="Business Address"
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
  
              <Flex direction="column">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Private Phone Number
                  <Text color={brandStars}>*</Text>
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
                  placeholder="City"
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
     
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="start"
            maxW="100%"
            mt="0px"
          >
            <Text color={textColorDetails} fontWeight="400" fontSize="sm">
              Already a member? asdasdas kjasd jkas
            </Text>
          </Flex>
        </Flex>
      </Flex>
    );
  }
  
  export default StepSix;
  