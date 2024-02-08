import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  HStack,
  Select,
  useToast,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import SignatureComponent from 'views/admin/main/ecommerce/newProduct/components/SignatureComponent';

const urgencyOptions = ['Immediate', '1 Week', '1 Month', 'No Rush'];
const paymentBasisOptions = ['Daily', 'Weekly', 'Bi-Weekly', 'Monthly'];
export default function RequestModal({ isOpen, onClose, onSubmit }) {
  const [signatureData, setSignatureData] = useState(null);

  const handleSaveSignature = ({ signature, timestamp, ipAddress }) => {
    // Store the signature data and other details
    setSignatureData({ signature, timestamp, ipAddress });
  };
  const [dealNumber, setDealNumber] = useState('');
  const [amount, setAmount] = useState(5000);
  const [urgency, setUrgency] = useState('');
  const [paymentBasis, setPaymentBasis] = useState([]);
  const [purpose, setPurpose] = useState('');
  const toast = useToast();

  useEffect(() => {
    // Auto generate deal number (example logic)
    setDealNumber(`D${Math.floor(Math.random() * 90000) + 10000}`);
  }, [isOpen]);

  const handleSubmit = () => {
    if (!urgency || paymentBasis.length === 0 || !purpose) {
      toast({
        title: 'Error',
        description: "Please fill all the fields.",
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const newRequest = {
      date: new Date().toLocaleDateString(),
      dealNumber,
      amount: `$${amount}K`,
      urgency,
      paymentBasis: paymentBasis.join('/'),
    };
    onSubmit(newRequest);
  };

  const handlePaymentBasisChange = (option) => {
    setPaymentBasis(prev =>
      prev.includes(option) ? prev.filter(item => item !== option) : [...prev, option]
    );
  };
  const titleColor = useColorModeValue('brand.900', 'white');
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create New Request</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel>Date</FormLabel>
            <Input value={new Date().toLocaleDateString()} readOnly />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Deal Number</FormLabel>
            <Input value={dealNumber} readOnly />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Amount Requested</FormLabel>
            <Slider defaultValue={5000} min={1000} max={10000} step={500} onChange={(val) => setAmount(val)}>
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <FormLabel mt={2}>${amount}K</FormLabel>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>How Quick Do You Need the Money?</FormLabel>
            <HStack spacing={4}>
              {urgencyOptions.map((option) => (
                <Button
                  key={option}
                  colorScheme={urgency === option ? "green" : "gray"}
                  onClick={() => setUrgency(option)}
                >
                  {option}
                </Button>
              ))}
            </HStack>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>What Is Your Payment Basis?</FormLabel>
            <HStack spacing={4}>
              {paymentBasisOptions.map((option) => (
                <Button
                  key={option}
                  colorScheme={paymentBasis.includes(option) ? "green" : "gray"}
                  onClick={() => handlePaymentBasisChange(option)}
                >
                  {option}
                </Button>
              ))}
            </HStack>
          </FormControl>
          <FormControl mb={4}>
            <FormLabel>Why Do You Need the Money?</FormLabel>
            <Select placeholder="Select option" onChange={(e) => setPurpose(e.target.value)}>
              <option value="Option 1">Option 1</option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
              <option value="Option 4">Option 4</option>
              <option value="Option 5">Option 5</option>
              <option value="Option 6">Option 6</option>
            </Select>
          </FormControl>
     
          <SignatureComponent
                  titleColor={titleColor}
                  onSave={(signature) => setSignatureData(signature)}
                />
                  {signatureData && (
                  <img src={signatureData} alt="Signature Preview" />
             
                )}
               
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
            Send Request
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
