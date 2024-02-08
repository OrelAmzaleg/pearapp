import React, { useState, useEffect } from 'react';
import {
  Text, SimpleGrid, Button, VStack, Icon, useColorModeValue, Flex,Box,Heading
} from '@chakra-ui/react';
import { GrUser } from 'react-icons/gr';
import { FaHandshake, FaRegBuilding } from 'react-icons/fa';
import { GoPeople } from 'react-icons/go';
import { HiOutlineBuildingStorefront } from 'react-icons/hi';

function StepThree({ onValidityChange }) {
  const [selectedButton, setSelectedButton] = useState(null);

  useEffect(() => {
    const isValid = selectedButton !== null;
    onValidityChange(isValid);
  }, [selectedButton, onValidityChange]);

  const titleColor = useColorModeValue('navy.700', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const textColor = useColorModeValue('navy.700', 'white');
  return (
    <Flex
    w="30%"
    maxW="50%"
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
          fontSize={{ base: '30px', lg: '34px' }}
          mb="10px"
        >      What Type Of Business Do You Own?
        </Heading>
  </Box>
  

      <SimpleGrid
        columns={{ base:1, md: 2, xl: 2 }}
        gap="20px"
        mb="50px"
        mt="50px"
      >
        {[
          { name: 'Sole Proprietor', icon: GrUser },
          { name: 'Partnership', icon: FaHandshake },
          { name: 'Limited Liability Company (LLC)', icon: GoPeople },
          { name: 'C Corporation', icon: FaRegBuilding },
          { name: 'S Corporation', icon: "HiOutlineBuildingStorefront" },
          { name: 'Other', icon: "HiOutlineBuildingStorefront"}
        ].map((businessType, index) => (
          <Button
            key={index}
            onClick={() => setSelectedButton(selectedButton === businessType.name ? null : businessType.name)}
            w="100%"
            h="100px"
            bgColor={selectedButton === businessType.name ? 'green.200' : undefined}
          >
            <VStack spacing={2}>
              <Icon as={"businessType.icon"} w="50px" h="50px" color={brandColor} />
              <Text fontSize="sm">{businessType.name}</Text>
            </VStack>
          </Button>
        ))}
      </SimpleGrid>
   
    </Flex>
  );
}

export default StepThree;
