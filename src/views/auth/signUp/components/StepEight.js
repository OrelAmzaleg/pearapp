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
    Slider,
    SliderTrack,
              SliderFilledTrack,
            SliderThumb ,
  } from '@chakra-ui/react';
  // Assets
  
  import { HSeparator } from 'components/separator/Separator';
  
  import { NavLink } from 'react-router-dom';
  import React from 'react';
  import { MdOutlineGppGood } from "react-icons/md";
  import { ImNeutral,ImCool,ImBaffled,ImHappy,ImCross,ImCheckmark } from "react-icons/im";
  import { TbCircleDashedNumber0, TbListNumbers ,TbCircleDashedNumber3  } from "react-icons/tb";
  
  function StepEight({ onValidityChange }) {
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
    const [selectedBT, setSelectedBT] = React.useState(null);
    const isValidLastName = lastName !== '';
    const isValidEmail = email !== '' && email.includes('@'); // Simple email validation
    const isValidPassword = password !== '' && password.length >= 8; // Example: Password must be at least 8 characters
    const [amount, setAmount] = React.useState(5000); // Default value
    const [amountTouched, setAmountTouched] = React.useState(false); // New state to track if slider has been touched
  
    const isValidAmount = amount > 0 && amountTouched; // Adjusted validation to include amountTouched
  
  
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
    const brandColor = useColorModeValue('brand.500', 'white');
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
            What's Your Finance Profile?
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
          <FormControl>
      
          <SimpleGrid
        columns={{ base: '2', md: '1' }} // 2 columns for Yes and No buttons
        gap={{ sm: '10px', md: '8px' }}
      >
           <Flex direction="column" mb={4}>
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="md"
                  fontWeight="500"
                  color={textColor}
                  mb="5px"
                >
                 What is yout Credit Score?
                  <Text color={brandStars}>*</Text>
                </FormLabel>
                <Flex justify="absolute">
                <SimpleGrid columns={4} spacing={3}>
      {[
        { name: 'Excellence 720+', icon: ImCool },
        { name: 'Good (680-719)', icon: ImHappy },
        { name: 'Fair (640-719)', icon:  ImNeutral},
        { name: 'Poor (639 or less)', icon: ImBaffled },
      ].map((CreditScoreType, index) => (
        <Button
          key={index}
          onClick={() => setSelectedBT(selectedBT === CreditScoreType.name ? null : CreditScoreType.name)}
          w="120px" // Adjusted width
          h="100px" // Adjusted height
          ml="2"
          bgColor={selectedBT === CreditScoreType.name ? 'green.200' : undefined}
        >
          <VStack spacing={1}>
            <Icon as={CreditScoreType.icon} w="30px" h="30px" color={brandColor} />
            <Text fontSize="sm" textAlign="center" wordBreak="break-word">
              {CreditScoreType.name}
            </Text>
          </VStack>
        </Button>
      ))}
    </SimpleGrid>

                   </Flex>
                </Flex>
                </SimpleGrid>

                <Box me="auto">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="md"
                  fontWeight="500"
                  color={textColor}
                  mb="5px"
                >
                  What Is Your Monthly Reveneu
                  <Text color={brandStars}>*</Text>
                </FormLabel>
        <Text
          mb="36px"
          ms="4px"
          color={textColorSecondary}
          fontWeight="400"
          fontSize="sm"
        >
        Choose Amount
        </Text>
      </Box>

       
      <Flex w="80%" mb="8" direction="column" align="center">
      {/* Amount Display */}
      <Text mb={4} fontSize="20px" fontWeight="bold" textAlign="center">
        ${amount.toLocaleString()} {/* Display chosen amount */}
      </Text>

      {/* Slider */}
      <Flex w="100%">
        <Slider
          defaultValue={500}
          min={5000}
          max={100000}
          step={500}
          onChange={(value) => {
            setAmount(value);
            setAmountTouched(true); // Set amount touched when slider value changes
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb 
            boxSize="22px" /* Thumb size */
            border="2px solid orange" /* Thumb border */
            boxShadow="0px 0px 10px 2px rgba(0, 0, 0.5, 0.6)" /* Thumb shadow */
            _focus={{ boxShadow: 'outline' }} /* Style for focus state */
          />
        </Slider>
      </Flex>
    </Flex>

    


                <SimpleGrid
        columns={{ base: '2', md: '3' }} // 2 columns for Yes and No buttons
        gap={{ sm: '10px', md: '35px' }}
      >
              <Flex direction="column">
              <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="md"
                  fontWeight="500"
                  color={textColor}
                  mb="5px"
                >
                  Have you ever took MCA before?
                  <Text color={brandStars}>*</Text>
                </FormLabel>
                <Flex justify="absolute">
                {[
                  { name: 'Yes', icon: ImCheckmark },
                  { name: 'No', icon: ImCross },
                 
                ].map((businessType, index) => (
                    <Button
                    key={index}
                    onClick={() => setSelectedButton(selectedButton === businessType.name ? null : businessType.name)}
                    w="60px"
                    h="60px"
                    ml="2"
                    bgColor={selectedButton === businessType.name ? 'green.200' : undefined}
                  >
                    <VStack spacing={1}>
                      <Icon as={businessType.icon} w="30px" h="30px" color={brandColor} />
                      <Text fontSize="md">{businessType.name}</Text>
                    </VStack>
                  </Button>
                ))}
                   </Flex>
                </Flex>
                <Flex direction="column">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="md"
                  fontWeight="500"
                  color={textColor}
                  mb="5px"
                >
                 How Many Open POS you have?
                  <Text color={brandStars}>*</Text>
                </FormLabel>
                <Flex justify="absolute">
                {[  
                  { name: '0', icon: TbCircleDashedNumber0 },
                  { name: '1-2', icon: TbListNumbers },
                  { name: '3+', icon: TbCircleDashedNumber3 },
                ].map((businessType, index) => (
                    <Button
                    key={index}
                    onClick={() => setSelectedButton(selectedButton === businessType.name ? null : businessType.name)}
                    w="60px"
                    h="60px"
                    ml="1"
                    bgColor={selectedButton === businessType.name ? 'green.200' : undefined}
                  >
                    <VStack spacing={1}>
                      <Icon as={businessType.icon} w="30px" h="30px" color={brandColor} />
                      <Text fontSize="md">{businessType.name}</Text>
                    </VStack>
                  </Button>
                ))}
                   </Flex>
                </Flex>
                <Flex direction="column">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="md"
                  fontWeight="500"
                  color={textColor}
                  mb="5px"
                >
                  Have you ever Defaulted?
                  <Text color={brandStars}>*</Text>
                </FormLabel>
                <Flex justify="absolute">
                {[
             { name: 'Yes', icon: ImCheckmark },
             { name: 'No', icon: ImCross },
            
                ].map((businessType, index) => (
                    <Button
                    key={index}
                    onClick={() => setSelectedButton(selectedButton === businessType.name ? null : businessType.name)}
                    w="60px"
                    h="60px"
                    ml="1"
                    bgColor={selectedButton === businessType.name ? 'green.200' : undefined}
                  >
                    <VStack spacing={1}>
                      <Icon as={businessType.icon} w="30px" h="30px" color={brandColor} />
                      <Text fontSize="md">{businessType.name}</Text>
                    </VStack>
                  </Button>
                ))}
                   </Flex>
                </Flex>
                </SimpleGrid>
        
            </FormControl>
   
          
              
     
         
        </Flex>
      </Flex>
    );
  }
  
  export default StepEight;
  