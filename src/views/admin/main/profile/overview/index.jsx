// Chakra imports
import { Box, Grid } from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/main/profile/overview/components/Banner";
import General from "views/admin/main/profile/overview/components/General";
import Notifications from "views/admin/main/profile/overview/components/Notifications";
import Projects from "views/admin/main/profile/overview/components/Projects";
import Storage from "views/admin/main/profile/overview/components/Storage";
import Upload from "views/admin/main/profile/overview/components/Upload";
import Order from "views/admin/main/ecommerce/orderDetails/index";
import RequestManager from './components/RequestManager'; // Adjust the path according to your file structure
import FundingProcess from "./components/FundingProcess";

// Assets
import profileAvatar from "assets/img/pearapp/company logos/TENLO-black-dark-Blue.png";
import avatar from "assets/img/avatars/avatar4.png";
import React from "react";

import TutorialComp from "./components/TutorailComp"
export default function Overview() {
  const [isTutorialOpen, setIsTutorialOpen] = React.useState(true); // Assuming the tutorial should open by default

  const handleCloseTutorial = () => {
    setIsTutorialOpen(false);
    // Handle the "do not show again" logic here if needed
  };
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
         <TutorialComp isOpen={isTutorialOpen} onClose={handleCloseTutorial} />
      {/* Main Fields */}
      <Grid
        templateColumns="1fr 3fr"
        templateRows="1fr"
        gap="0px" // Set gap to zero
      >
        <Banner
          gridArea='1 / 1 / 2 / 2'
          banner={profileAvatar}
          avatar={avatar}
          name='Users name'
          job='Company Name'
          posts='2'
          followers='$850K'
          following='750'
          approved="True"
        />
        <General
          gridArea='1 / 2 / 2 / 3'
          minH='365px'
          pe='20px'
        />
      </Grid>
      <Grid
        templateColumns="1fr 3fr"
        templateRows="1fr"
        gap="0px" // Set gap to zero
      >
        <Projects
          gridArea='2 / 1 / 3 / 2'
          banner={profileAvatar}
          avatar={profileAvatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
        <RequestManager
          gridArea='2 / 2 / 3 / 3'
          banner={profileAvatar}
          avatar={profileAvatar}
          name='Adela Parkson'
          job='Product Designer'
          posts='17'
          followers='9.7k'
          following='274'
        />
      </Grid>
    </Box>
  );
}
