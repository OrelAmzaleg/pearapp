import { Icon, Text, Flex, Box, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import IconBox from 'components/icons/IconBox';

function StepIcon({ title, icon }) {
    const brandColor = useColorModeValue('brand.500', 'white');
  
    return (
      <Flex direction="column" align="center">
        <IconBox
          h="50px"
          w="50px"
          icon={<Icon as={icon} color={brandColor} h="24px" w="24px" />}
        />
        <Flex direction="column" align="center">
        <Text fontWeight="10px" fontSize="5px" mt="5"></Text>
        </Flex>
      </Flex>
    );
  }