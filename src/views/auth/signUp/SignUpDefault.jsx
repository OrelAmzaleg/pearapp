// Chakra imports
import {
  Flex,
} from '@chakra-ui/react';
// Assets
import illustration from 'assets/img/auth/auth.png';
import DefaultAuth from 'layouts/auth/types/Default';
import React from 'react';
import StepFour from './components/StepFour';
import StepManager from './components/StepManager';
function SignUp() {
  // Chakra color mode
  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
     
  <StepManager /> 
      
  
    </DefaultAuth>
  );
}

export default SignUp;
