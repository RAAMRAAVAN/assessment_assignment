import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  AccessAlarm,
  BusinessCenter,
  BusinessCenterOutlined,
  EventNote,
  HorizontalRuleOutlined,
  LinkOutlined,
  MoreVertOutlined,
} from "@mui/icons-material";
import { Avatar, AvatarGroup, Chip, Divider } from "@mui/material";

// AssessmentCard component
export default function AssessmentCard() {
  return (
    <Card
      sx={{
        minWidth: 275,
        borderRadius: "15px",
        boxShadow: "none",
        border: "1px gray solid",
      }}
    >
      <CardContent>
        {/* Header */}
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              borderRadius: "10px",
              width: "50px",
              height: "50px",
              backgroundColor: "#dcd1f5",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {" "}
            <BusinessCenterOutlined
              style={{
                color: "#6c2cfb",
                display: "flex",
                width: "30px",
                height: "40px",
              }}
            />
          </div>
          <MoreVertOutlined style={{ color: "#05056f" }} />
        </Box>
        {/* Title */}
        <Typography style={{ color: "#05056f" }}>Math Assessment</Typography>
        {/* Job and Date */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography style={{ fontSize: "14px" }}>Job</Typography>
          <HorizontalRuleOutlined
            style={{ rotate: "90deg", color: "lightgray" }}
          />
          <EventNote
            style={{
              display: "flex",
              width: "15px",
              color: "#05056f",
              paddingRight: "2px",
            }}
          />
          <Typography style={{ color: "lightgray", fontSize: "14px" }}>
            20 Apr 2023
          </Typography>
        </Box>
        {/* Divider */}
        <Divider
          style={{
            border: "1px #05056f dashed",
            marginTop: "13px",
            marginBottom: "13px",
          }}
        />
        {/* Statistics */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <Box sx={{ marginRight: "5px" }}>
              <Typography style={{ color: "#05056f", fontSize: "14px", fontWeight: "bold" }}>
                00
              </Typography>
              <Typography style={{ color: "#05056f", fontSize: "12px" }}>
                Duration
              </Typography>
            </Box>
            <Box>
              <Typography style={{ color: "#05056f", fontSize: "14px", fontWeight: "bold" }}>
                00
              </Typography>
              <Typography style={{ color: "#05056f", fontSize: "12px" }}>
                Questions
              </Typography>
            </Box>
          </Box>
          {/* Share and Avatar */}
          <Box sx={{ display: "flex", width: "55%" }}>
            <Box>
              <Chip
                style={{
                  color: "#05056f",
                  border: "1px #05056f solid",
                  display: "flex",
                  width: "80px",
                  height: "30px",
                  marginLeft: "20px",
                }}
                icon={
                  <LinkOutlined
                    fontSize="small"
                    style={{ rotate: "135deg", color: "#05056f" }}
                  />
                }
                variant="outlined"
                label="Share"
              />
            </Box>
            <Box>
              <AvatarGroup
                max={3}
                sx={{
                  display: "flex",
                  "& .MuiAvatar-root": {
                    width: 30,
                    height: 30,
                    fontSize: 15,
                    fontWeight: "bold",
                    marginRight: "-0px",
                  },
                }}
              >
                {/* Avatars */}
              </AvatarGroup>
            </Box>
          </Box>
        </Box>
      </CardContent>
      {/* Card actions */}
      <CardActions sx={{ padding: "0", margin: "0" }}>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
}
