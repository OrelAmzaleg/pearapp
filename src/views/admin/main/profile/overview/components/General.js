// Chakra imports
import { SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
import Information from "views/admin/main/profile/overview/components/Information";

// Assets
export default function GeneralInformation(props) {
  const { ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  return (
    <Card mb={{ base: "0px", "2xl": "20px" }} {...rest}>
      <Text
        color={textColorPrimary}
        fontWeight='bold'
        fontSize='md'
        mt='10px'
        mb='4px'>
        General Information
      </Text>
      <Text color={textColorSecondary} fontSize='sm' me='26px' mb='40px'>
        As we live, our hearts turn colder. Cause pain is what we go through as
        we become older. We get insulted by others, lose trust for those others.
        We get back stabbed by friends. It becomes harder for us to give others
        a hand. We get our heart broken by people we love, even that we give
        them all...
      </Text>
      <SimpleGrid columns='5' gap='15px'>
        <Information title='Company Name' value='TENLO CAPITAL' />
        <Information title='DBA' value='TENLO BALBAL' />
        <Information title='Address' value='95, ASBNDMASDSAD' />
        <Information title='City' value='Briarwood' />
        <Information title='State' value='NY' />
        <Information title='Phone' value='(516)630-22255' />
        <Information title='E-mail' value='orelamzaleg@gmail.com' />
        <Information title='Federal TAX ID' value='12345616' />
        <Information title='Web Site' value='www.tenlocapital.com' />
        <Information title='Ownership' value='100%' />
      </SimpleGrid>
    </Card>
  );
}
