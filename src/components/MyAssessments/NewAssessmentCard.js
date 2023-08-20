import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Add,
} from "@mui/icons-material";
import { NewAssessmentModal } from "./NewAssessmentModal";

// NewAssessmentCard component
export default function NewAssessmentCard() {
  // State to manage the modal open/close
  let [open, setOpen] = React.useState(false);

  // Function to toggle the modal
  const handleClose = () => {
    setOpen(!open);
  };

  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: "15px",
        boxShadow: "none",
        backgroundColor: "#f1f0ef",
        border: "1px #d6d4d2 dashed",
      }}
      onClick={handleClose}
    >
      {/* NewAssessmentModal component */}
      <NewAssessmentModal open={open} handleClose={handleClose} />
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
          {/* Icon */}
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", backgroundColor: "white", width: "73px", height: "73px" }}>
            <Add color="primary" fontSize="large" />
          </Box>
          {/* Title */}
          <Typography variant="h6" sx={{ color: "#05056f" }}>New Assessment</Typography>
          {/* Description */}
          <Typography sx={{ fontSize: "12px", textAlign: "center", padding: "5px", color: "#05056f" }}>
            From here you can add questions of multiple types like MCA's, subjective (text or paragraph)!
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ width: "0", height: "0" }}>
        {/* No actions */}
      </CardActions>
    </Card>
  );
}
