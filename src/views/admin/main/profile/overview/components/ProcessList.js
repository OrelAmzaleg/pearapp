import { Icon, Text, Flex, Box, useColorModeValue } from '@chakra-ui/react';
import Card from 'components/card/Card';
import IconBox from 'components/icons/IconBox';

// Assets
import { MdOutlineRequestQuote, MdShoppingBasket, GoMultiSelect, LiaFileContractSolid, MdCheckCircle } from 'react-icons/md';
import { BiSolidOffer } from "react-icons/bi";

export default function ProecessList(props) {
  const { ...rest } = props;
  const brandColor = useColorModeValue('brand.500', 'white');
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  return (
    <Box>
         <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>Open New Request</Text>
         <Text color={textColorSecondary} fontSize='md' me='26px' mb='4px'>Easy safe bla jkasbdkjas d askdj askjd asjkd asdasjdk </Text>
         <Text color={textColorSecondary} fontSize='md' me='26px' mb='4px'>Easy safe bla jkasbdkjas d askdj askjd asjkd asdasjdk </Text>
         <Text color={textColorSecondary} fontSize='md' me='26px' mb='4px'>Easy safe bla jkasbdkjas d askdj askjd asjkd asdasjdk </Text>

       <Text
        color={brandColor}
        fontWeight="bold"
        fontSize="20px"
        mt={"10px"}
     
      >
        Few simple steps
        </Text>
    <Flex direction="row" align="right" justify="space-around">
      
      {/* Steps with connecting lines */}
      <StepIcon title="Request Placed" icon={MdOutlineRequestQuote} />
      <StepIcon title="Reviweing Your Docs" icon={MdShoppingBasket} />
      <StepIcon title="Getting Few Different Offers" icon={"GoMultiSelect"} />
      <StepIcon title="Peek Your Best" icon={"LiaFileContractSolid"} />
      <StepIcon title="Get your money" icon={MdCheckCircle} />
    </Flex>
    <ConnectorLine />
    </Box>
    
  );
}

function StepIcon({ title, icon }) {
  const brandColor = useColorModeValue('brand.500', 'white');
  const completeBg = useColorModeValue(
    'white',
    'linear-gradient(180deg, #1F2A4F 0%, #18224D 50.63%, #111C44 100%)',
  );
  const completeShadow = useColorModeValue(
    '0px 8px 40px rgba(112, 144, 176, 0.12)',
    'inset 0px 4px 4px rgba(255, 255, 255, 0.2)',
  );

  return (
    <Flex direction="column" align="center" w="110px" mb="2">
      
      <IconBox
        h="50px"
        w="50px"
        bg={completeBg}
        boxShadow={completeShadow}
        icon={<Icon as={icon} color={brandColor} h="25px" w="25px" />}
      />
      <Text fontWeight="bold" color="gray.400" fontSize="13px" mt="2" textAlign="center">
        {title}
      </Text>
    </Flex>
  );
}


function ConnectorLine() {
  const lineColor = useColorModeValue('gray.200', 'whiteAlpha.500');
  return <Box flex="1" height="3px" bg={lineColor} />;
}
