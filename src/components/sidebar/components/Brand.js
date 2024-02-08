// Chakra imports
import { Flex, Text, useColorModeValue, Image } from '@chakra-ui/react';

// Custom components
import { HorizonLogo } from 'components/icons/Icons';

import PearAppLogo from 'assets/img/pearapp/Logos/pearAppPng.png';
import { HSeparator } from 'components/separator/Separator';

export function SidebarBrand(props) {
  const { mini, hovered } = props;
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white');

  return (
    <Flex alignItems="center" flexDirection="column">
           <Image src={PearAppLogo} h="220px" w="230px" my="0px" />

    
      <Text
        display={
          mini === false
            ? 'none'
            : mini === true && hovered === true
            ? 'none'
            : 'block'
        }
        fontSize={'30px'}
        fontWeight="800"
        color={logoColor}
      >
        H
      </Text>
      <HSeparator mb="20px" />
    </Flex>
  );
}

export default SidebarBrand;
