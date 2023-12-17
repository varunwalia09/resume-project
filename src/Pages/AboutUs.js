import { Stack, Typography, Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";


import YouTubeIcon from '@mui/icons-material/YouTube';
import { GitHub } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import { Navbar } from "./";
import aboutCV2 from "../Utils/Images/aboutCV2.jpg";

// An overview of the website

export default function ButtonMUI() {
  return (
    <>
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume-Builder Project Belong to AlmaBetter</h2>
        <Stack
          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px"
        >
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify",
            }}
          >
            
            <b>Create Your Professional Resume Free.</b><br/>
            This Resume Builder is designed keeping in mind the requirements of today's industry. A unique resume, built by our Resume Builder will give you the upper hand in landing any interview. You get a variety of templates to choose from, make some modifications according to your choice and viola..... A brand new resume will be served to you for your professional use. You may save your resume and edit it anytime later.

          </Typography>
          <Stack
            sx={{
              width: "30%",
              placeSelf: "center",
            }}
          >
            <img
              src={aboutCV2}
              alt="img"
            // style={{width:"20%", height:"10%"}}
            />
          </Stack>
        </Stack>
        <Box mt="25px">
          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },
              fontWeight: "400",
              color: "dark",
            }}
          >
            Follow me on this links
          </Typography>
          <Box className="icons">
            <Link to="https://www.instagram.com/pb39hyper/">
              <Instagram
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="error"
              />
            </Link>

           

            <Link to="https://www.linkedin.com/in/coder-varun-walia/">
              <LinkedInIcon
                sx={{ fontSize: "40px", paddingLeft: "15px" }}
                color="primary"
              />
            </Link>
            
            <Link to="https://www.youtube.com/@pb39Hyepr">
              < YouTubeIcon
                sx={{ fontSize: "40px", paddingLeft: "15px",color:"red" }}
                
              />
            </Link>
            <Link to="https://github.com/varunwalia09">
              <GitHub
                sx={{ fontSize: "40px", paddingLeft: "15px", color: "black" }}
              />
            </Link>
          </Box>
        </Box>
      </Stack>
    </>
  );
}
