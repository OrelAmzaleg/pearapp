import React, { useState, useEffect } from 'react';
import {
  Box,
  Text,
  Collapse,
  Button,
  Image,
  Flex,
  useColorModeValue,
  Badge,
  Center,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Grid,
} from '@chakra-ui/react';

import RequestDetailsTable from './RequestDetailsTable';
import Card from 'components/card/Card';
import PearAppLogo from 'assets/img/pearapp/Logos/pearAppPng.png';
import IconBox from 'components/icons/IconBox';
import FundingProcess from './FundingProcess';
import Messages from './Messages';
import { FaMoneyBillTransfer } from 'react-icons/fa6';
import { IoAlertCircleSharp } from 'react-icons/io5';
import { HiOutlineBellAlert } from 'react-icons/hi2';
import { BsEnvelopeExclamation } from 'react-icons/bs';
import ThirdPart from './ThirdPart';
import { FaRegClock } from 'react-icons/fa'; // Import a clock icon
export default function RequestSummary({ request, onProcessAdvance }) {
  const [showDetails, setShowDetails] = useState(false);
  const {
    isOpen: isChatOpen,
    onOpen: onChatOpen,
    onClose: onChatClose,
  } = useDisclosure();
  const {
    isOpen: isAlertOpen,
    onOpen: onAlertOpen,
    onClose: onAlertClose,
  } = useDisclosure();
  const {
    isOpen: isThirdOpen,
    onOpen: onThirdOpen,
    onClose: onThirdClose,
  } = useDisclosure();

  const isPartA = request.currentStepIndex > 1;
  const steps = [
    'Reviweing Your Docs',
    'More Documents Needed',
    'Getting Few Different Offers',
    'Peek Your Best',
    'Deal Closed',
  ];
  const [processValue, setProcessValue] = useState(0);
  const handleProcessAdvance = (req) => {
    onProcessAdvance(req);
    // Update the processValue state with the new value
    // Assuming it's just incrementing for now
    setProcessValue((prevValue) => prevValue + 1);
  };
  const currentStep = steps[request.currentStepIndex];
  const summaryMessage = 'Our Agents working now to UW your files...'; // Full message here
  // Function to determine badge color
  const getBadgeColor = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return 'yellow';
      case 1:
        return 'orange';
      case 2:
        return 'green';
      case 3:
        return 'blue';
      case 4:
        return 'green';
      default:
        return 'gray';
    }
  };

  const badgeColorScheme = getBadgeColor(request.currentStepIndex);
  const tableData = [
    {
      funderIcon: 'path/to/icon1.png',
      funderName: 'Funder A',
      term: '12 months',
      amount: '$5000',
      rate: '5%',
      match: 'Yes',
    },
    {
      funderIcon: 'path/to/icon1.png',
      funderName: 'Funder B',
      term: '10 Weeks',
      amount: '$5000',
      rate: '15%',
      match: 'No',
    },
    {
      funderIcon: 'path/to/icon1.png',
      funderName: 'Funder C',
      term: '12 months',
      amount: '$5000',
      rate: '25%',
      match: 'Yes',
    },
    // Add more rows as needed
  ];
  const ChatModal = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="40vw" height="80vh">
        <ModalHeader>Chat</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Messages status="active" name="Brandon Saf" />
        </ModalBody>
      </ModalContent>
    </Modal>
  );

  const AlertListModal = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>notfications</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{/* Chat content goes here */}</ModalBody>
      </ModalContent>
    </Modal>
  );

  const ThirdModal = ({ isOpen, onClose }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Alerts</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{/* Chat content goes here */}</ModalBody>
      </ModalContent>
    </Modal>
  );
  const [countdown, setCountdown] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    if (request.currentStepIndex === 2) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [request.currentStepIndex]);

  // Convert seconds to hours, minutes, seconds format
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsRemaining = seconds % 60;
    return `${hours}h:${minutes}m:${secondsRemaining}s`;
  };
  const CountdownTimer = ({ time }) => (
    <Flex
      align="center"
      justify="center"
      p="10px"
      bg="red.200" // Background color
      borderRadius="lg" // Rounded corners
      boxShadow="md" // Box shadow for depth
      w="fit-content" // Width to fit content
    >
      <Icon as={FaRegClock} color="blue.500" mr={2} w="20px" h="20px" />
      <Text fontSize="md" fontWeight="bold" color="blue.700">
        {formatTime(time)}
      </Text>
      <Text fontSize="md" fontWeight="bold" color="blue.700">
        {formatTime(time)}
      </Text>
    </Flex>
  );
  const ThirdPartComponent = () => (
    <Flex direction="column" align="center" justify="center" mt="4">
      {/* Your content for the third part goes here */}
      <Text>Third Part Content</Text>
    </Flex>
  );

  return (
    <Card>
      <Grid templateColumns="2fr 1fr" width="100%">
        {/* Request Info Section */}
        <Box>
          <Flex align="center">
            {/* IconBox and other components */}
            <IconBox
              h="50px"
              w="50px"
              icon={
                <Icon
                  as={FaMoneyBillTransfer}
                  color={'blue.700'}
                  h="24px"
                  w="24px"
                />
              }
            />

            <Text fontWeight="bold" color="blue.400">
              Request Number: #{request.dealNumber}
            </Text>
            <Badge colorScheme={'green'} borderRadius="full" mx="1">
              {request.date}
            </Badge>
            <Badge colorScheme={'red'} borderRadius="full" mx="1">
              {request.amount}
            </Badge>
            <Badge colorScheme={'purple'} borderRadius="full" mx="1">
              {request.urgency}
            </Badge>

            <Flex ml={5}>
              <Button
                onClick={onChatOpen}
                as={BsEnvelopeExclamation}
                color={'blue.700'}
                h="60px"
                w="60px"
              />
              <Button
                onClick={onAlertOpen}
                as={HiOutlineBellAlert}
                color={'blue.700'}
                h="60px"
                w="60px"
              />
              <Button
                onClick={onThirdOpen}
                as={IoAlertCircleSharp}
                color={'blue.700'}
                h="60px"
                w="60px"
              />
            </Flex>
          </Flex>
          {/* Modals */}
          <ChatModal isOpen={isChatOpen} onClose={onChatClose} />
          <AlertListModal isOpen={isAlertOpen} onClose={onAlertClose} />
          <ThirdModal isOpen={isThirdOpen} onClose={onThirdClose} />
          {request.currentStepIndex === 2 && (
            <Box mt={4} ml={80}>
              {' '}
              {/* Adjust margin as needed */}
              <CountdownTimer time={countdown} />
            </Box>
          )}

          <Badge colorScheme={badgeColorScheme} borderRadius="full" mt={2}>
            <Center>{currentStep}</Center>
          </Badge>
          {request.currentStepIndex >= 3 ? (
        <ThirdPart />
      ) : isPartA ? (
        <RequestDetailsTable data={tableData} />
      ) : (
            <Flex direction="column" align="center" justify="center" mt="4">
              <Image
                src={PearAppLogo}
                mt={3}
                boxSize="150px"
                objectFit="cover"
              />
              <Text color="gray.600" fontSize="lg" mt={3}>
                {summaryMessage}
              </Text>
            </Flex>
          )}

          <Button onClick={() => handleProcessAdvance(request)}>
            Advance Process
          </Button>
        </Box>

        {/* FundingProcess Section */}
        <Box>
          <FundingProcess processValue={processValue} />
        </Box>

        {/* Modals */}
        <ChatModal isOpen={isChatOpen} onClose={onChatClose} />
        <AlertListModal isOpen={isAlertOpen} onClose={onAlertClose} />
        <ThirdModal isOpen={isThirdOpen} onClose={onThirdClose} />
      </Grid>
    </Card>
  );
}
