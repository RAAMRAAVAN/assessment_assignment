import React from "react";
import { Close } from "@mui/icons-material";
import InputMask from "react-input-mask";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import DeletableChips from "../ReUsableComponents/DeletableChips";

export const NewAssessmentModal = (props) => {
  const isMobileView = useMediaQuery("(max-width:600px)");
  const { open, handleClose } = props;
  const handleModalContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
      onClick={handleModalContentClick}
      sx={{ display: "flex", justifyContent: "center", border: "none" }}
    >
      <Box
        sx={{
          maxHeight: "100vh",
          backgroundColor: "white",
          border: "none",
          borderRadius: "10px",
          overflow: "auto",
        }}
        style={
          isMobileView ? { width: "100%", marginTop: "50px" } : { width: "40%" }
        }
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "5px 15px",
          }}
        >
          <Typography
            sx={{ color: "#05056f", fontSize: "18px", fontWeight: "bold" }}
          >
            Create New Assessment
          </Typography>
          <IconButton onClick={handleClose}>
            <Close sx={{ color: "#05056f" }} />
          </IconButton>
        </Box>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "eeeaea",
            borderTop: "1px #eeeaea solid",
            flexDirection: "column",
            padding: "10px 20px",
          }}
        >
          <Typography sx={{ fontWeight: "bold", color: "#05056f" }}>
            Name of assessment
          </Typography>
          <TextField
            sx={{ borderRadius: "10px", padding: "10px 0" }}
            fullWidth
            id="fullWidth"
            placeholder="Type Here"
          />
          <Typography sx={{ fontWeight: "bold", color: "#05056f" }}>
            Purpose of the test is
          </Typography>
          <FormControl
            fullWidth
            sx={{ borderRadius: "10px", padding: "10px 0" }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Typography sx={{ fontWeight: "bold", color: "#05056f" }}>
            Description
          </Typography>
          <FormControl
            fullWidth
            sx={{ borderRadius: "10px", padding: "10px 0" }}
          >
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Age"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <Typography sx={{ fontWeight: "bold", color: "#05056f" }}>
            Skills
          </Typography>
          <Box
            sx={{
              display: "flex",
              border: "1px #eeeaea solid",
              flexDirection: "column",
            }}
          >
            <Box sx={{ padding: "10px", display: "flex" }}>
              <DeletableChips />
            </Box>
            <TextField placeholder="Type Here" sx={{ borderRadius: "0" }} />
          </Box>
          <Typography
            sx={{ fontWeight: "bold", color: "#05056f", marginBottom: "10px" }}
          >
            Duration of assessment
          </Typography>
          <InputMask mask="99:99:99" maskChar="_" alwaysShowMask={false}>
            {() => <TextField label="Time (HH:MM:SS)" placeholder="HH:MM:SS" />}
          </InputMask>
        </Box>
        <Button
          variant="contained"
          sx={{
            width: "93%",
            marginLeft: "20px",
            marginRight: "20px",
            marginBottom: "10px",
          }}
        >
          Next
        </Button>
      </Box>
    </Modal>
  );
};
