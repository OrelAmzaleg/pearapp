// TutorialComponent.js
import React, { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button, Image, Checkbox, Flex, Box } from "@chakra-ui/react";
import IMG1 from 'assets/img/pearapp/tutorialComp/1.png'
import IMG2 from 'assets/img/pearapp/tutorialComp/2.png'
import IMG3 from 'assets/img/pearapp/tutorialComp/3.png'
import IMG4 from 'assets/img/pearapp/tutorialComp/4.png'
import IMG5 from 'assets/img/pearapp/tutorialComp/5.png'
import IMG6 from 'assets/img/pearapp/tutorialComp/6.png'
import IMG7 from 'assets/img/pearapp/tutorialComp/7.png'


const TutorialComponent = ({ isOpen, onClose }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [doNotShowAgain, setDoNotShowAgain] = useState(false);
  const images = [
    IMG1,IMG2,IMG3,IMG4,IMG5,IMG6,IMG7,
  ];

  const handlePrev = () => {
    if (slideIndex > 0) setSlideIndex(slideIndex - 1);
  };

  const handleNext = () => {
    if (slideIndex < images.length - 1) setSlideIndex(slideIndex + 1);
  };

  const handleCheckboxChange = () => {
    setDoNotShowAgain(!doNotShowAgain);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Welcome to PearApp</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex direction="column" align="center">
            <Image src={images[slideIndex]} boxSize="500px" />
            <Box mt="4">
              <Button onClick={handlePrev} disabled={slideIndex === 0}>Prev</Button>
              <Button onClick={handleNext} ml="2" disabled={slideIndex === images.length - 1}>Next</Button>
            </Box>
            <Checkbox isChecked={doNotShowAgain} onChange={handleCheckboxChange} mt="4">
              Don't show this again
            </Checkbox>
          </Flex>
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

export default TutorialComponent;
