import React, { useState, useEffect } from 'react';
import {
  Box, FormControl, FormLabel, Slider, SliderTrack, SliderFilledTrack, SliderThumb,
  Text, useColorModeValue, Flex, Heading, SimpleGrid, Button, VStack, Icon, Card
} from '@chakra-ui/react';
import { GrUser } from 'react-icons/gr';
import { FaHandshake, FaRegBuilding } from 'react-icons/fa';
import { GoPeople } from 'react-icons/go';
import { HiOutlineBuildingStorefront } from 'react-icons/hi';
import { HSeparator } from 'components/separator/Separator';
function StepTwo({ onValidityChange }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const [amount, setAmount] = useState(5000); // Default value
  const [amountTouched, setAmountTouched] = useState(false); // New state to track if slider has been touched
  const textColorSecondary = 'gray.400';
  const isValidAmount = amount > 0 && amountTouched; // Adjusted validation to include amountTouched
  const isValidButtonSelected = selectedButton !== null;
  const brandStars = useColorModeValue('brand.500', 'brand.400');
  useEffect(() => {
    const isValid = isValidAmount && isValidButtonSelected;
    onValidityChange(isValid);
  }, [amount, amountTouched, selectedButton, onValidityChange]);

  // Chakra color mode
  const textColor = useColorModeValue('navy.700', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');

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
        What's your Funding Information?
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
          columns={{ base: '1', md: '1' }}
          gap={{ sm: '10px', md: '15px' }}
        >
         
              <Flex direction="column">
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="xl"
              fontWeight="800"
              color={textColor}
              mb="8px"
            >
               How Much Money Do You Need?<Text color={brandStars}>*</Text>
            </FormLabel>
          <Text mb={2} fontSize="30px" fontWeight="bold" textAlign="center">
            ${amount.toLocaleString()} {/* Display chosen amount */}
          </Text>
          
          <Slider
            defaultValue={5000}
            min={5000}
            max={1000000}
            step={5000}
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
    </SimpleGrid>

        <FormControl mt={10}>
            
        <Heading color={textColor} fontSize={{ base: '25px', lg: '25px' }} mb="10px">
        How Quick You Need The Money?
        </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="20px" mb="50px" mt="30px">
            {[
              { name: 'Today-Tomorow', icon: GrUser },
              { name: 'Within 72H', icon: FaHandshake },
              { name: 'Within a Week', icon: GoPeople },
              { name: 'Within a Two-Three Weeks', icon: FaRegBuilding },
              { name: 'Within a Month', icon: "HiOutlineBuildingStorefront" },
              { name: 'Not Urgent', icon: "HiOutlineBuildingStorefront" }
            ].map((businessType, index) => (
              <Button
                key={index}
                onClick={() => setSelectedButton(selectedButton === businessType.name ? null : businessType.name)}
                w="100%"
                h="100px"
                bgColor={selectedButton === businessType.name ? 'green.200' : undefined}
              >
                <VStack spacing={2}>
                  <Icon as={businessType.icon} w="50px" h="50px" color={brandColor} />
                  <Text fontSize="sm">{businessType.name}</Text>
                </VStack>
              </Button>
            ))}
          </SimpleGrid>
        </FormControl>
      
      </Flex>
    </Flex>
  );
}

export default StepTwo;