import { Box, Typography, useMediaQuery } from "@mui/material";
import AssessmentCard from "./AssessmentCard";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import NewAssessmentCard from "./NewAssessmentCard";
import { BarChart, Filter, FilterAlt, Search } from "@mui/icons-material";

export const MyAssessments = () => {
  const isMobileView = useMediaQuery("(max-width:600px)");
  return (
    <Box>
      <Box sx={{display:"flex", justifyContent:"space-between"}}>
        <Typography variant="h6" sx={{ color: "#05056f" }}>
          My Assessment
        </Typography>
        <Box>
          <Search sx={{marginRight:"5px", color:"#05056f"}}/>
          <FilterAlt sx={{marginRight:"5px", color:"#05056f"}}/>
          <BarChart sx={{color:"#05056f"}}/>
        </Box>
      </Box>

      <Grid2 container spacing={5} marginTop={1}>
        <Grid2
          xl={4}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          style={isMobileView ? { paddingLeft: "0", paddingRight: "0" } : {}}
        >
          <NewAssessmentCard />
        </Grid2>
        <Grid2
          xl={4}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          style={isMobileView ? { paddingLeft: "0", paddingRight: "0" } : {}}
        >
          <AssessmentCard />
        </Grid2>
        <Grid2
          xl={4}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          style={isMobileView ? { paddingLeft: "0", paddingRight: "0" } : {}}
        >
          <AssessmentCard />
        </Grid2>
        <Grid2
          xl={4}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          style={isMobileView ? { paddingLeft: "0", paddingRight: "0" } : {}}
        >
          <AssessmentCard />
        </Grid2>
        <Grid2
          xl={4}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          style={isMobileView ? { paddingLeft: "0", paddingRight: "0" } : {}}
        >
          <AssessmentCard />
        </Grid2>
        <Grid2
          xl={4}
          lg={4}
          md={6}
          sm={12}
          xs={12}
          style={isMobileView ? { paddingLeft: "0", paddingRight: "0" } : {}}
        >
          <AssessmentCard />
        </Grid2>
      </Grid2>
    </Box>
  );
};
