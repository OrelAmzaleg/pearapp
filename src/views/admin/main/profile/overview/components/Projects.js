// Chakra imports
import { Text, useColorModeValue } from "@chakra-ui/react";
// Assets

// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Project from "views/admin/main/profile/overview/components/Project";

export default function Projects(props) {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='2xl'
        mt='10px'
        mb='4px'>
        Lending History
      </Text>
      <Text color={textColorSecondary} fontSize='md' me='26px' mb='40px'>
        Here you can find more details about your prev positions.
      </Text>
      <Project
        mb='20px'
        image={"Project1"}
        ranking='100,000'
        link='K'
        title='24 CAPITAL - MARCH-23'
      />
      <Project
        mb='20px'
        image={"Project2"}
        ranking='2'
        link='#'
        title='date - money - issues'
      />
      <Project
        image={"Project3"}
        ranking='3'
        link='#'
        title='date - money - issues'
      />
         <Project
        mb='20px'
        image={"Project1"}
        ranking='100,000'
        link='K'
        title='date - money - issues'
      />
         <Project
        mb='20px'
        image={"Project1"}
        ranking='100,000'
        link='K'
        title='date - money - issues'
      />
    </Card>
  );
}
