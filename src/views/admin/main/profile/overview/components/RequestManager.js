import React, { useState } from 'react';
import { Box, Button, Flex, useColorModeValue, Text } from '@chakra-ui/react';
import RequestModal from './RequestModal';
import RequestSummary from './RequestSummary';
import Card from "components/card/Card";
import ProcessList from "./ProcessList";

export default function RequestManager() {
  const [requests, setRequests] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNewRequest = (newRequest) => {
    const newRequestWithStep = { ...newRequest, currentStepIndex: 0 };
    setRequests([...requests, newRequestWithStep]);
    setIsModalOpen(false);
  };

  const simulateProcessProgress = (index) => {
    setRequests(currentRequests => 
      currentRequests.map((request, idx) => 
        idx === index && request.currentStepIndex < 4 ? { ...request, currentStepIndex: request.currentStepIndex + 1 } : request
      )
    );
  };

  const brandColor = useColorModeValue("blue.500", "blue.200");


  return (
    <Box pt={{ base: "130px", md: "80px", xl: "0px" }}>
         <Card>
      <Flex>
      <ProcessList />
      </Flex>
        <Flex justifyContent="center" mb={5}>
          <Button colorScheme="blue" size="sm" mt={5}onClick={() => setIsModalOpen(true)}>+ New Request</Button>
        </Flex>
        <RequestModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onSubmit={handleNewRequest} />
        {requests.map((request, index) => (
          <RequestSummary key={index} request={request} onProcessAdvance={() => simulateProcessProgress(index)} />
        ))}
      </Card>
    </Box>
  );
}