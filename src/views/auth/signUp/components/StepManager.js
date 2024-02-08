import React, { useState } from 'react';
import { Flex, Button, Progress, useToast, Box, VStack,useColorModeValue,Icon, Text } from '@chakra-ui/react';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepFour from './StepFour';
import StepFive from './StepFive';
import StepSix from './StepSix';
import StepSeven from './StepSeven';
import StepEight from './StepEight';
import StepNine from './StepNine';
import { GrPrevious,GrNext  } from "react-icons/gr";
import StepFinal from './StepFinal';
const totalSteps = 9;

const StepManager = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStepValid, setIsStepValid] = useState(false);
  const toast = useToast();
  const handleStepValidityChange = (isValid) => {
    setIsStepValid(isValid);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepFour onValidityChange={handleStepValidityChange} />;
      case 2:
        return <StepTwo onValidityChange={handleStepValidityChange} />;
      case 3:
        return <StepThree onValidityChange={handleStepValidityChange} />;
      case 4:
        return < StepFive onValidityChange={handleStepValidityChange} />;
      case 5:
        return <StepSix onValidityChange={handleStepValidityChange} />;
      case 6:
        return <StepSeven onValidityChange={handleStepValidityChange} />;
        case 7:
            return <StepEight onValidityChange={handleStepValidityChange} />;
            case 8:
              return <StepNine onValidityChange={handleStepValidityChange} />;
            case 9:
              return <StepFinal onValidityChange={handleStepValidityChange} />;
      default:
        return null;
    }
  };

  const progressValue = (currentStep / totalSteps) * 100;
  const brandColor = useColorModeValue('brand.500', 'white');
  return (
    <Flex>
      {/* Fixed Header */}
      <Box position="fixed" top="20" width="100%">
        <Progress value={progressValue} w="30%" mb="4" />
        <Flex justify="space-between" mb="0">
          {currentStep < totalSteps && (
      <Flex justify="space-between" mb="0">
      {/* Prev Button */}
      {currentStep > 1 && ( // Show only if it's not the first step
        <Button onClick={() => setCurrentStep(currentStep - 1)}>
          <VStack>
            <Icon as={GrPrevious} w="20px" h="20px" color={brandColor} />
            <Text fontSize="sm" textAlign="center" wordBreak="break-word">
              Prev
            </Text>
          </VStack>
        </Button>
      )}

      {/* Next Button */}
      {currentStep < totalSteps && (
        <Button
          onClick={() => {
            if (isStepValid) {
              toast({
                title: 'Error',
                description: 'Please fill all the fields.',
                status: 'error',
                duration: 3000,
                isClosable: true,
              });
              return;
            }
            setCurrentStep(currentStep + 1);
          }}
        >
          <VStack>
            <Icon as={GrNext} w="20px" h="20px" color={brandColor} />
            <Text fontSize="sm" textAlign="center" wordBreak="break-word">
              Next
            </Text>
          </VStack>
        </Button>
      )}
    </Flex>
          )}
        </Flex>
 
        {/* Content Area */}
        <Box>
          {' '}
          {renderStep()}
        </Box>
      </Box>
    </Flex>
  );
};

export default StepManager;
