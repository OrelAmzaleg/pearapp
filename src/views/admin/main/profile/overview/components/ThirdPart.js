import React, { useState } from 'react';
import { 
  Button, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, 
  ModalCloseButton, ModalBody, ModalFooter, useDisclosure, Slider, 
  SliderTrack, SliderFilledTrack, SliderThumb, Box, Text, Badge,VStack, Card 
} from '@chakra-ui/react';

const DealModal = ({ isOpen, onClose, dealSummary, index }) => {
  const [localFundersOffer, setLocalFundersOffer] = useState(dealSummary.fundersOffer);

  const handleSliderChange = (value) => {
    const updatedOffer = dealSummary.askedAmount * (value / 100);
    setLocalFundersOffer(updatedOffer);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Deal Summary {index + 1}</ModalHeader>
        <ModalCloseButton />
 
        <ModalBody>
          <Text>Asked Amount: {dealSummary.askedAmount}</Text>
          <Text>Funder's Offer: {localFundersOffer}</Text>
          <Text>Interest: {dealSummary.interest}</Text>
          <Text>Commission: {dealSummary.commission}</Text>
          <Text>Payment Basis: {dealSummary.paymentBasis}</Text>
          <Text>Amount Pre Pay: {dealSummary.amountPrePay}</Text>
          <Slider defaultValue={dealSummary.fundersOffer / dealSummary.askedAmount * 100} min={0} max={100} onChange={handleSliderChange}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

const ThirdPartComponent = () => {
  const modals = [
    useDisclosure(),
    useDisclosure(),
    useDisclosure()
  ];


  const dealSummaries = [
    {
      askedAmount: 5000,
      fundersOffer: 4500,
      interest: '5%',
      commission: '2%',
      paymentBasis: 'Monthly',
      amountPrePay: 200,
    },
    {
      askedAmount: 10000,
      fundersOffer: 9000,
      interest: '6%',
      commission: '2.5%',
      paymentBasis: 'Weekly',
      amountPrePay: 400,
    },
    {
      askedAmount: 15000,
      fundersOffer: 13500,
      interest: '7%',
      commission: '3%',
      paymentBasis: 'Bi-Weekly',
      amountPrePay: 600,
    },
  ];


  return (
    <Flex direction="row" align="center" mb={15} ml={50} >
      {dealSummaries.map((dealSummary, index) => (
        <Card>
        <VStack key={index} m={5}>
          <Button onClick={modals[index].onOpen}>
            ${dealSummary.fundersOffer.toLocaleString()}
          </Button>
          <Text fontSize="sm">Interest: {dealSummary.interest}</Text>
          <Text fontSize="sm">Payment: {dealSummary.paymentBasis}</Text>
          <Text fontSize="sm">Prepay: ${dealSummary.amountPrePay}</Text>
        </VStack>
        </Card>
      ))}
      
      {dealSummaries.map((dealSummary, index) => 
        <DealModal 
          isOpen={modals[index].isOpen}
          onClose={modals[index].onClose}
          dealSummary={dealSummary}
          index={index}
        />
      )}
    </Flex>
  );
};

export default ThirdPartComponent;