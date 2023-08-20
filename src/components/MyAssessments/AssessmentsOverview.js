import {
  Add,
  BusinessCenterOutlined,
  GroupOutlined,
  HorizontalRule,
  Language,
  LinkOutlined,
  SplitscreenOutlined,
} from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const AssessmentsOverview = () => {
  return (
    <Box>
      <Typography variant="h6" sx={{ color: "#05056f" }}>
        Assessments Overview
        <Card
          sx={{
            minWidth: 275,
            borderRadius: "15px",
            boxShadow: "none",
            // backgroundColor: "#f1f0ef",
            border: "1px #d6d4d2 solid",
            marginTop: "15px",
            marginBottom:"15px",
          }}
        >
          <CardContent sx={{ margin: "0", padding: "0" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Grid2 container>
                <Grid2 xl={2} lg={2} md={4} sm={12} xs={12}>
                  <Box
                    sx={{
                      borderRight: "1px #d6d4d2 solid",
                      paddingLeft: "10px",
                      paddingTop: "5px",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      // justifyContent:"space-between"
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "12px",
                        color: "#05056f",
                        fontWeight: "bold",
                      }}
                    >
                      Total Assessment
                    </Typography>
                    <Box sx={{ display: "flex", paddingTop: "20px", alignItems:"center" }}>
                      <div
                        style={{
                          display: "flex",
                          borderRadius: "5px",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "#dcd1f5",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "5px",
                        }}
                      >
                        {" "}
                        <SplitscreenOutlined
                          fontSize="small"
                          sx={{ color: "#6c2cfb" }}
                        />
                      </div>
                      <Typography sx={{ fontWeight: "bold" }}>34</Typography>
                    </Box>
                  </Box>
                </Grid2>
                <Grid2 xl={3} lg={3} md={8} sm={12} xs={12}>
                  <Box
                    sx={{
                      borderRight: "1px #d6d4d2 solid",
                      paddingLeft: "10px",
                      paddingTop: "5px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "12px",
                        color: "#05056f",
                        fontWeight: "bold",
                      }}
                    >
                      Candidates
                    </Typography>
                    <Box sx={{ display: "flex", padding: "12px 0px", alignItems:"center" }}>
                      <div
                        style={{
                          display: "flex",
                          borderRadius: "5px",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "#d7bfd9",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                        }}
                      >
                        {" "}
                        <GroupOutlined
                          fontSize="small"
                          sx={{ color: "#8a0a92" }}
                        />
                      </div>
                      <Box sx={{display:"flex", flexDirection:"column", borderRight:"1px gray solid", paddingRight:"10px"}}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            11,145
                          </Typography>
                          <Typography
                            sx={{
                              color: "#59bc36",
                              fontSize: "12px",
                              fontWeight: "bold",
                              paddingLeft:"5px",
                            }}
                          >
                            +89
                          </Typography>
                        </Box>
                        <Typography sx={{fontSize:"12px"}}>Total Candidate</Typography>
                      </Box>
                      <Box sx={{display:"flex", flexDirection:"column",  paddingLeft:"10px"}}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            1,14
                          </Typography>
                          <Typography
                            sx={{
                              color: "#59bc36",
                              fontSize: "12px",
                              fontWeight: "bold",
                              paddingLeft:"5px",
                            }}
                          >
                            +89
                          </Typography>
                        </Box>
                        <Typography sx={{fontSize:"12px"}}>Who Attamped</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid2>
                <Grid2 xl={5} lg={5} md={8} sm={12} xs={12}>
                  <Box
                    sx={{
                      borderRight: "1px #d6d4d2 solid",
                      paddingLeft: "10px",
                      paddingTop: "5px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "12px",
                        color: "#05056f",
                        fontWeight: "bold",
                      }}
                    >
                      Candidates Source
                    </Typography>
                    <Box sx={{ display: "flex", padding: "12px 0px", alignItems:"center" }}>
                      <div
                        style={{
                          display: "flex",
                          borderRadius: "5px",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "#e0bac9",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "10px",
                        }}
                      >
                        {" "}
                        <Language
                          fontSize="small"
                          sx={{ color: "#ce0455" }}
                        />
                      </div>
                      <Box sx={{display:"flex", flexDirection:"column", borderRight:"1px gray solid", paddingRight:"10px"}}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            11,000
                          </Typography>
                          <Typography
                            sx={{
                              color: "#59bc36",
                              fontSize: "12px",
                              fontWeight: "bold",
                              paddingLeft:"5px",
                            }}
                          >
                            +89
                          </Typography>
                        </Box>
                        <Typography sx={{fontSize:"12px"}}>E-mail</Typography>
                      </Box>
                      <Box sx={{display:"flex", flexDirection:"column", borderRight:"1px gray solid", paddingRight:"10px",  paddingLeft:"10px"}}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            145
                          </Typography>
                          <Typography
                            sx={{
                              color: "#59bc36",
                              fontSize: "12px",
                              fontWeight: "bold",
                              paddingLeft:"5px",
                            }}
                          >
                            +89
                          </Typography>
                        </Box>
                        <Typography sx={{fontSize:"12px"}}>Social Share</Typography>
                      </Box>
                      <Box sx={{display:"flex", flexDirection:"column",  paddingLeft:"10px"}}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <Typography sx={{ fontWeight: "bold" }}>
                            145
                          </Typography>
                          <Typography
                            sx={{
                              color: "#59bc36",
                              fontSize: "12px",
                              fontWeight: "bold",
                              paddingLeft:"5px",
                            }}
                          >
                            +89
                          </Typography>
                        </Box>
                        <Typography sx={{fontSize:"12px"}}>Unique Link</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid2>
                <Grid2 xl={2} lg={2} md={4} sm={12} xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      height:"100%",
                      flexDirection: "column",
                      paddingLeft: "10px",
                      paddingTop: "5px",
                      // alignItems:"space-between"
                    }}
                  >
                    <Typography
                      style={{
                        fontSize: "12px",
                        color: "#05056f",
                        fontWeight: "bold",
                      }}
                    >
                      Total Purpose
                    </Typography>
                    <Box sx={{ display: "flex", paddingTop: "20px", alignItems:"center" }}>
                      <div
                        style={{
                          display: "flex",
                          borderRadius: "5px",
                          width: "30px",
                          height: "30px",
                          backgroundColor: "#bee8f7",
                          alignItems: "center",
                          justifyContent: "center",
                          marginRight: "5px",
                        }}
                      >
                        {" "}
                        <LinkOutlined
                          fontSize="small"
                          sx={{ color: "#256ec1" }}
                        />
                      </div>
                      <Typography sx={{ fontWeight: "bold" }}>11</Typography>
                    </Box>
                  </Box>
                </Grid2>
              </Grid2>
            </Box>
          </CardContent>
          <CardActions sx={{ margin: "0", padding: "0" }}>
            {/* <Button size="small">Learn More</Button> */}
          </CardActions>
        </Card>
      </Typography>
    </Box>
  );
};
