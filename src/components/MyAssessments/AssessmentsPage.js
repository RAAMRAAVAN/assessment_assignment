import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { AssessmentsOverview } from "./AssessmentsOverview";
import { MyAssessments } from "./MyAssessments";
import { useMediaQuery } from "@mui/material";

// AssessmentsPage component
export default function AssessmentsPage() {
  // Check if the current view is mobile
  const isMobileView = useMediaQuery('(max-width:600px)');

  // State to manage active tab value
  const [value, setValue] = React.useState("1");

  // Handler for tab change
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        {/* TabList for switching between tabs */}
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="My Assessments" value="1" />
            <Tab label="Unstop Assessments" value="2" />
          </TabList>
        </Box>
        {/* TabPanel for rendering content based on the selected tab */}
        <TabPanel value="1">
          {/* Conditionally render AssessmentsOverview only on non-mobile view */}
          {!isMobileView && <AssessmentsOverview />}
          <MyAssessments />
        </TabPanel>
        <TabPanel value="2">{/* Content for second tab */}</TabPanel>
      </TabContext>
    </Box>
  );
}
