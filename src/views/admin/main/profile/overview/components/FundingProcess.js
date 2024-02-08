// Chakra imports
import { Icon, Text, Flex, useColorModeValue } from '@chakra-ui/react';

// Custom components
import Card from 'components/card/Card';
import OrderStep from 'components/dataDisplay/OrderStep';
import IconBox from 'components/icons/IconBox';
// Assets
import {
  MdPointOfSale,
  MdShoppingBasket,
  MdArchive,
  MdOutlineRequestQuote,
  MdCheckCircle,
} from 'react-icons/md';
import { BiSolidOffer } from "react-icons/bi";
import { LiaFileContractSolid } from "react-icons/lia";
import { GoMultiSelect } from "react-icons/go";
export default function FundingProcess(props) {
  const { processValue, ...rest } = props;


  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const completeIconColor = useColorModeValue(
    brandColor,
    'linear-gradient(180deg, #1F2A4F 0%, #18224D 50.63%, #111C44 100%)',
  );
  const incompleteIconColor = useColorModeValue(
    'gray',
    'linear-gradient(180deg, #1F2A4F 0%, #18224D 50.63%, #111C44 100%)',
  );
  const completeBg = useColorModeValue(
    'white',
    'linear-gradient(180deg, #1F2A4F 0%, #18224D 50.63%, #111C44 100%)',
  );
  const completeShadow = useColorModeValue(
    '0px 18px 40px rgba(112, 144, 176, 0.12)',
    'inset 0px 4px 4px rgba(255, 255, 255, 0.2)',
  );
  const incompleteColor = useColorModeValue(
    'secondaryGray.0',
    'whiteAlpha.200',
  );
  const incompleteShadow = useColorModeValue(
    'inset 0px 18px 22px rgba(112, 144, 176, 0.1)',
    'inset 0px 4px 4px #0B1437',
  );
  const lineColor = useColorModeValue('%23a3aed0', '%23FFFFFF1A');
  const steps = [
    { name: "Request Placed", icon: MdOutlineRequestQuote },
    { name: "Reviewing Your Docs", icon: MdShoppingBasket },
    { name: "Getting Few Different Offers", icon: GoMultiSelect },
    { name: "Pick Your Best", icon: LiaFileContractSolid },
    { name: "Get the Money", icon: MdCheckCircle },
  ];
  const getOrderStepStatusAndStyle = (stepIndex) => {
    const isCompleted = stepIndex <= processValue;
    return {
      color: isCompleted ? completeIconColor : incompleteIconColor,
      status: isCompleted ? 'done' : 'inprocess',
      bg: isCompleted ? completeBg : incompleteColor,
      boxShadow: isCompleted ? completeShadow : incompleteShadow
    
    };
  };
  const getCurrentFormattedDate = () => {
    const now = new Date();
    // Format the date as you prefer, e.g., 'DD/MM/YYYY, HH:MM:SS'
    return now.toLocaleString();
  };

  return (
    <Card flexDirection="column" w="100%" pt="30px" pb="20px" {...rest}>
      <Text
        color={textColor}
        fontSize="2xl"
        fontWeight="700"
        lineHeight="100%"
        mb="40px"
      >
        Funding Status
      </Text>
      <Flex position="relative" direction="column">
        <Flex
          position="absolute"
          left="32.5px"
          h="100%"
          w="2px"
          bg={`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='${lineColor}' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`}
          zIndex={1}
        />
{steps.map((step, index) => {
        const { color, status, bg, boxShadow } = getOrderStepStatusAndStyle(index);
        const date = index <= processValue ? getCurrentFormattedDate() : "Pending";
        return (
          <OrderStep
            key={index}
            mb="80px"
            name={step.name}
            date={date} // Replace with actual step date
            status={status}
            icon={
              <IconBox
                h="66px"
                w="66px"
                bg={bg}
                boxShadow={boxShadow}
                icon={<Icon as={step.icon} color={color} h="32px" w="32px" />}
              />
            }
          />
        );
      })}
      
      </Flex>
    </Card>
  );
}
