import React, { useState } from 'react';
import {
  Box,
  Card,
  Button,
  Flex,
  SimpleGrid,
  Icon,
  VStack,
  useColorModeValue,
  FormControl,
  FormLabel,
  Input,
  Progress,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Select,
} from '@chakra-ui/react';
import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import IconBox from 'components/icons/IconBox';
import MiniStatistics from 'components/card/MiniStatistics';
import { MdPerson, MdThumbUp } from 'react-icons/md';
import { GrUser } from 'react-icons/gr';
import { FaHandshake } from 'react-icons/fa';
import { GoPeople } from 'react-icons/go';
import { FaRegBuilding } from 'react-icons/fa';
import { HiOutlineBuildingStorefront } from 'react-icons/hi2';
import FundingSlider from './components/FundingSlider';
import { CheckIcon } from '@chakra-ui/icons';

export default function NewProduct() {
  const [currentTab, setCurrentTab] = useState(0);
  const totalTabs = 18;
  const titleColor = useColorModeValue('brand.900', 'white');
  const brandColor = useColorModeValue('brand.500', 'white');
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const [fundingAmount, setFundingAmount] = useState(5000);
  const [selectedOption, setSelectedOption] = useState(null);
  const [monthlyRevenue, setMonthlyRevenue] = useState('');
  const [someField, setSomeField] = useState('');
  const [someFieldError, setSomeFieldError] = useState(false);
  
  const handleRevenueChange = (event) => {
    // Remove non-numeric characters and format the number
    const formattedNumber = event.target.value.replace(/[^0-9]/g, '');
    const formattedValue = new Intl.NumberFormat().format(formattedNumber);
    setMonthlyRevenue(formattedValue);
  };
  const handleTabChange = (newIndex) => {
    // Validation logic for the current tab
    if (currentTab === 1) {
      // Example validation for tab 1
      if (!someField) {
        setSomeFieldError(true);
        return;
      }
    }
    setCurrentTab(newIndex);
};
  const [ownershipPercentage, setOwnershipPercentage] = useState('');

  const handleOwnershipChange = (event) => {
    setOwnershipPercentage(event.target.value);
  };

  const handleContinue = () => {
    if (ownershipPercentage >= 100) {
      // Logic to open new tab or provide additional info
      // For example, set current tab to a new tab
      setCurrentTab(currentTab + 2); // Replace newTabIndex with actual index of the new tab
    } else {
      // If ownership is 100%, move to the next regular tab
      handleTabChange(currentTab + 1);
    }
  };
  
  return (
    <Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
      <Flex direction="column" align="center" p={104}>
        <Card>
          <Progress
            value={(currentTab / totalTabs) * 100}
            size="sm"
            colorScheme="blue"
            width="100%"
            mb={4}
          />
          <Tabs index={currentTab} variant="unstyled">
            
            <TabPanels>
              {/* Tab 1 */}

              <TabPanel>
                <Text
                  textAlign="center"
                  color={titleColor}
                  fontWeight="500"
                  fontSize={{ base: '50px' }}
                  mt="10px"
                >
                  What type of business do you own?
                </Text>
                <SimpleGrid
                  columns={{ base: 1, md: 5, xl: 5 }}
                  gap="20px"
                  mb="50px"
                  mt="50px"
                >
                  {/* Button for Sole Proprietor */}
                  <Button
                    onClick={() => handleTabChange(currentTab + 1)}
                    w="100%"
                    h="100px"
                  >
                    <VStack spacing={2}>
                      <Icon as={GrUser} w="50px" h="50px" color={brandColor} />
                      <Text fontSize="sm">Sole Proprietor</Text>
                    </VStack>
                  </Button>
                  <Button
                    onClick={() => handleTabChange(currentTab + 1)}
                    w="100%"
                    h="100px"
                  >
                    <VStack spacing={2}>
                      <Icon
                        as={FaHandshake}
                        w="50px"
                        h="50px"
                        color={brandColor}
                      />
                      <Text fontSize="sm">Partnership</Text>
                    </VStack>
                  </Button>
                  <Button
                    onClick={() => handleTabChange(currentTab + 1)}
                    w="100%"
                    h="100px"
                  >
                    <VStack spacing={2}>
                      <Icon
                        as={GoPeople}
                        w="50px"
                        h="50px"
                        color={brandColor}
                      />
                      <Text fontSize="sm">Limited Liability Company (LLC)</Text>
                    </VStack>
                  </Button>
                  <Button
                    onClick={() => handleTabChange(currentTab + 1)}
                    w="100%"
                    h="100px"
                  >
                    <VStack spacing={2}>
                      <Icon
                        as={FaRegBuilding}
                        w="50px"
                        h="50px"
                        color={brandColor}
                      />
                      <Text fontSize="sm">C Corporation</Text>
                    </VStack>
                  </Button>
                  <Button
                    onClick={() => handleTabChange(currentTab + 1)}
                    w="100%"
                    h="100px"
                  >
                    <VStack spacing={2}>
                      <Icon
                        as={HiOutlineBuildingStorefront}
                        w="50px"
                        h="50px"
                        color={brandColor}
                      />
                      <Text fontSize="sm">S Corporation</Text>
                    </VStack>
                  </Button>
                </SimpleGrid>
              </TabPanel>
              {/* Tab 2 */}
              <TabPanel>
                <Flex direction="column" align="center" width="100%">
                  {/* Title */}
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px" // Adjust this as needed for space between title and slider
                  >
                    How much money do you need?
                  </Text>

                  {/* Funding Slider */}
                  <FundingSlider
                    value={fundingAmount}
                    onChange={setFundingAmount}
                  />

                  {/* Continue Button */}
                  <Button
                    onClick={() => handleTabChange(currentTab + 1)}
                    mt="40px" // Adjust this as needed for space between slider and button
                  >
                    Continue
                  </Button>
                  <Button
                    onClick={() => handleTabChange(currentTab - 1)}
                    mt="40px" // Adjust this as needed for space between slider and button
                  >
                    Prev
                  </Button>
                </Flex>
              </TabPanel>

              <TabPanel>
                <Flex direction="column" align="center" width="100%">
                  {/* Title */}
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    What are you getting financing for?
                  </Text>

                  {/* Dropdown for Financing Options */}
                  <Select placeholder="Select option" mb="40px" width="auto">
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option4">Option 4</option>
                    <option value="option5">Option 5</option>
                    <option value="option6">Option 6</option>
                    <option value="option7">Option 7</option>
                    <option value="option8">Option 8</option>
                    {/* ...add more options up to Option 10 */}
                  </Select>

                  {/* Continue Button */}
                  <Flex direction="column" align="center" width="100%">
                  <Button
                    onClick={() => handleTabChange(currentTab + 1)}
                    mt="40px"
                  >
                    Continue
                  </Button>
                  <Button
                    onClick={() => handleTabChange(currentTab - 1)}
                    mt="40px" // Adjust this as needed for space between slider and button
                  >
                    Prev
                  </Button>
                  </Flex>
                </Flex>
              </TabPanel>

              <TabPanel>
                <Flex direction="column" align="center" width="100%">
                  {/* Title */}
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    How quickly do you need the money?
                  </Text>

                  {/* Option Buttons */}
                  <SimpleGrid columns={2} spacing={5} mb="40px">
                    {['Option 1', 'Option 2', 'Option 3', 'Option 4'].map(
                      (option, index) => (
                        <Button
                          key={index}
                          onClick={() => setSelectedOption(index)}
                          rightIcon={
                            selectedOption === index ? <CheckIcon /> : null
                          }
                          colorScheme={
                            selectedOption === index ? 'green' : 'gray'
                          }
                        >
                          {option}
                        </Button>
                      ),
                    )}
                  </SimpleGrid>

                  {/* Continue Button */}
                  <Button
                    onClick={() => handleTabChange(currentTab + 1)}
                    mt="40px"
                  >
                    Continue
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex direction="column" align="center" width="100%">
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    What's your average monthly revenue?
                  </Text>

                  {/* Revenue Input */}
                  <Flex alignItems="center" mb="40px">
                    <Text mr={2}>$</Text>
                    <Input
                      type="number"
                      placeholder="Enter amount"
                      value={monthlyRevenue}
                      onChange={handleRevenueChange}
                    />
                  </Flex>

                  <Button onClick={() => handleTabChange(currentTab + 1)}>
                    Continue
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex direction="column" align="center" width="100%">
                  {/* Title */}
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    When did you start your business?
                  </Text>

                  {/* Month and Year Selection */}
                  <Flex mb="40px">
                    <Select placeholder="Month" mr={4}>
                      {/* List months here */}
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">Jun</option>
                      <option value="7">Jul</option>
                      <option value="8">Aug</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </Select>
                    <Select placeholder="Year">
                      {/* Generate year options dynamically or list them */}
                      {Array.from(
                        { length: 30 },
                        (_, i) => new Date().getFullYear() - i,
                      ).map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </Select>
                  </Flex>
                  <Flex alignItems="center" mb="40px">
                    <Input type="Number" placeholder="Federal Tax ID" />
                  </Flex>
                  <Flex alignItems="center" mb="40px">
                    <Input type="text" placeholder="Website" />
                  </Flex>
                  {/* Continue Button */}
                  <Button onClick={() => handleTabChange(currentTab + 1)}>
                    Continue
                  </Button>
                </Flex>
              </TabPanel>

              <TabPanel>
                {/* Content for Tab 7 */}
                <Flex direction="column" align="center" width="100%">
                  {/* Title */}
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    What's your credit score?
                  </Text>

                  {/* Option Buttons */}
                  <SimpleGrid columns={2} spacing={5} mb="40px">
                    {[
                      'Excallent 720+',
                      'Good (680-719)',
                      'Fair (640-719)',
                      'Poor (639 or less)',
                    ].map((option, index) => (
                      <Button
                        key={index}
                        onClick={() => setSelectedOption(index)}
                        rightIcon={
                          selectedOption === index ? <CheckIcon /> : null
                        }
                        colorScheme={
                          selectedOption === index ? 'green' : 'gray'
                        }
                      >
                        {option}
                      </Button>
                    ))}
                  </SimpleGrid>

                  {/* Continue Button */}
                  <Button
                    onClick={() => handleTabChange(currentTab + 1)}
                    mt="40px"
                  >
                    Continue
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                {/* Content for Tab 8 */}
                <Flex direction="column" align="center" width="100%">
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    What's the name of your business?
                  </Text>

                  {/* Revenue Input */}
                  <Flex alignItems="center" mb="40px">
                    <Input type="text" placeholder="Enter Business Name" />
                  </Flex>
                  <Flex alignItems="center" mb="40px">
                    <Input type="text" placeholder="Enter Business DBA" />
                  </Flex>
                  <Flex alignItems="center" mb="40px">
                    <Input type="text" placeholder="State of Incorporation" />
                  </Flex>
                  <Button onClick={() => handleTabChange(currentTab + 1)}>
                    Continue
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                {/* Content for Tab 9 */}
                <Flex direction="column" align="center" width="100%">
                  {/* Title */}
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    What industry are you in?
                  </Text>

                  {/* Dropdown for Financing Options */}
                  <Select placeholder="Select option" mb="40px" width="auto">
                    <option value="option1">Retial</option>
                    <option value="option2">MO\TO </option>
                    <option value="option3">Wholesale</option>
                    <option value="option4">Restaurant</option>
                    <option value="option5">Supermarket</option>
                    <option value="option6">Other</option>

                    {/* ...add more options up to Option 10 */}
                  </Select>
                  <Flex alignItems="center" mb="40px">
                    <Input type="text" placeholder="Product/Service Sold" />
                  </Flex>

                  {/* Continue Button */}
                  <Button
                    onClick={() => handleTabChange(currentTab + 1)}
                    mt="40px"
                  >
                    Continue
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                {/* Content for Tab 2 */}
                <Flex direction="column" align="center" width="100%">
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    Corporate Officer/Owner Name
                  </Text>

                  {/* Revenue Input */}
                  <Flex alignItems="center" mb="50px">
                    <Text
                      textAlign="right"
                      color={titleColor}
                      fontWeight="500"
                      fontSize={{ base: '15px' }}
                      mt="20px"
                      mb="40px"
                    >
                      DOB
                    </Text>
                    <Input type="date" placeholder="Month" />
                  </Flex>
                  <Flex alignItems="center" mb="40px">
                    <Input type="number" placeholder="SSN" />
                    <Input type="text" placeholder="First Name" />
                    <Input type="text" placeholder="Last Name" />
                    <Input type="text" placeholder="Title" />
                    <Input
                      type="number"
                      placeholder="Ownership %"
                      value={ownershipPercentage}
                      onChange={handleOwnershipChange}
                    />
                  </Flex>

                  <Button onClick={handleContinue}>Continue</Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                {/* Content for Tab 2 */}
                <Flex direction="column" align="center" width="100%">
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    PARTNER INFORMATION
                  </Text>

                  {/* Revenue Input */}
                  <Flex alignItems="center" mb="50px">
                    <Text
                      textAlign="right"
                      color={titleColor}
                      fontWeight="500"
                      fontSize={{ base: '15px' }}
                      mt="20px"
                      mb="40px"
                    >
                      DOB
                    </Text>
                    <Input type="date" placeholder="Month" />
                  </Flex>
                  <Flex alignItems="center" mb="40px">
                    <Input type="text" placeholder="Partner Name" />
                    <Input type="number" placeholder="SSN" />
                    <Input type="text" placeholder="Ownership%" />
                    <Input type="text" placeholder="Home Address" />
                  </Flex>
                  <Flex alignItems="center" mb="40px">
                    <Input type="number" placeholder="ZIP Code" />
                    <Input type="text" placeholder=" City" />
                    <Input type="text" placeholder=" State" />
                  </Flex>
                  <Button onClick={handleContinue}>Continue</Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                {/* Content for Tab 2 */}
                <Flex direction="column" align="center" width="100%">
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    What's the best ways to reach you
                  </Text>

                  {/* Revenue Input */}
                  <Flex alignItems="center" mb="40px">
                    <Input type="text" placeholder="Home Address" />
                    <Input type="text" placeholder="City" />
                    <Input type="text" placeholder="State" />
                    <Input type="number" placeholder="Zip" />
                    <Input type="number" placeholder="Cell#" />
                  </Flex>

                  <Button onClick={() => handleTabChange(currentTab + 1)}>
                    Continue
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                {/* Content for Tab 2 */}
                <Flex direction="column" align="center" width="100%">
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    What's the best ways to reach you???
                  </Text>

                  {/* Revenue Input */}
                  <Flex alignItems="center" mb="40px">
                    <Input type="number" placeholder="Phone Number" />
                  </Flex>
                  <Flex alignItems="center" mb="40px">
                    <Input type="text" placeholder="email address" />
                  </Flex>

                  <Button onClick={() => handleTabChange(currentTab + 1)}>
                    Continue
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                {/* Content for Tab 2 */}
                <Flex direction="column" align="center" width="100%">
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    Physical Address
                  </Text>

                  {/* Revenue Input */}
                  <Flex alignItems="center" mb="40px">
                    <Input type="number" placeholder=" Physical Address" />
                  </Flex>
                  <Flex alignItems="center" mb="40px">
                    <Input type="number" placeholder=" Business ZIP Code" />
                  </Flex>
                  <Flex alignItems="center" mb="40px">
                    <Input type="text" placeholder=" City" />
                  </Flex>
                  <Flex alignItems="center" mb="40px">
                    <Input type="text" placeholder=" State" />
                  </Flex>
                  <Button onClick={() => handleTabChange(currentTab + 1)}>
                    Continue
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                {/* Content for Tab 2 */}
                <Flex direction="column" align="center" width="100%">
                  <Text
                    textAlign="center"
                    color={titleColor}
                    fontWeight="500"
                    fontSize={{ base: '50px' }}
                    mt="20px"
                    mb="40px"
                  >
                    Comunication
                  </Text>

                  {/* Revenue Input */}
                  <Flex alignItems="center" mb="40px">
                    <Input type="text" placeholder="email address" />
                  </Flex>

                  <Button onClick={() => handleTabChange(currentTab + 1)}>
                    Continue
                  </Button>
                </Flex>
              </TabPanel>
              <TabPanel>
                {/* Content for Tab 10 */}
                <Button onClick={() => console.log('Submit Form')}>
                  Submit
                </Button>
              </TabPanel>
            </TabPanels>
            <TabList>
              {/* You can implement custom TabList if needed for specific navigation */}
            </TabList>
          </Tabs>
        </Card>
      </Flex>
    </Box>
  );
}
