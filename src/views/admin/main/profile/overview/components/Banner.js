import { Avatar, Box, Flex, Text, useColorModeValue, Icon } from '@chakra-ui/react';
import { GiRibbonMedal } from "react-icons/gi";  // Example icon, replace with your choice
import { FaHourglassHalf } from "react-icons/fa"; // Example icon, replace with your choice
import { ImCross } from "react-icons/im"; // Example icon, replace with your choice
import Card from 'components/card/Card';

export default function Banner(props) {
  const { banner, avatar, name, job, posts, followers, following, approved, ...rest } = props;

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'gray.400';
  const borderColor = useColorModeValue('white !important', '#111C44 !important');
  const approvalColor = approved === 'True' ? 'green.500' : approved === 'Pending' ? 'orange.400' : 'red.500';

  const ApprovalIcon = () => {
    if (approved === 'True') return <Icon as={GiRibbonMedal} color={approvalColor} w={6} h={6} />;
    if (approved === 'Pending') return <Icon as={FaHourglassHalf} color={approvalColor} w={6} h={6} />;
    return <Icon as={ImCross} color={approvalColor} w={6} h={6} />;
  };

  return (
    <Card mb={{ base: '0px', lg: '20px' }} alignItems="center" {...rest}>
     <Box
        bgImage={`url(${banner})`} // Set the banner image here
        bgSize="cover"
        bgPosition="center" // Adjusts how the background image is positioned
        borderRadius="16px"
        h="131px"
        w="100%"
      />
      <Flex justifyContent="center" position="relative" alignItems="center">
        <Avatar
          src={avatar}
          h="87px"
          w="87px"
          mt="-43px"
          border="4px solid"
          borderColor={borderColor}
        />
        <Flex position="absolute" right="-100px" alignItems="center">
          <ApprovalIcon />
          <Text
            ml="2"
            color={approvalColor}
            fontWeight="bold"
          >
            {approved === 'True' ? 'Approved' : approved === 'Pending' ? 'In-Process' : 'False'}
          </Text>
        </Flex>
      </Flex>
      <Text color={textColorPrimary} fontWeight="bold" fontSize="xl" mt="10px">
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize="sm">
        {job}
      </Text>
      <Flex w="max-content" mx="auto" mt="26px">
        <Flex mx="auto" me="60px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {posts}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
          Open Deals
          </Text>
        </Flex>
        <Flex mx="auto" me="60px" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {followers}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
           Total money ever got
          </Text>
        </Flex>
        <Flex mx="auto" align="center" direction="column">
          <Text color={textColorPrimary} fontSize="2xl" fontWeight="700">
            {following}
          </Text>
          <Text color={textColorSecondary} fontSize="sm" fontWeight="400">
            rate
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
