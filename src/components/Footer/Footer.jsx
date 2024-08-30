import React from "react";
import {
  Container,
  Grid,
  IconButton,
  Typography,
  Link,
  Box,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#3b3b3b", // Brownish-black background color
        padding: "2rem 0",
        mt: "auto",
        borderTop: "1px solid",
        borderColor: "divider",
        color: "white",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {/* Social Media Links */}
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h6" gutterBottom>
                Follow Us
              </Typography>
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: "1rem" }}
              >
                <IconButton color="inherit" href="https://facebook.com">
                  <FacebookIcon />
                </IconButton>
                <IconButton color="inherit" href="https://twitter.com">
                  <TwitterIcon />
                </IconButton>
                <IconButton color="inherit" href="https://google.com">
                  <GoogleIcon />
                </IconButton>
                <IconButton color="inherit" href="https://instagram.com">
                  <InstagramIcon />
                </IconButton>
                <IconButton color="inherit" href="https://linkedin.com">
                  <LinkedInIcon />
                </IconButton>
                <IconButton color="inherit" href="https://github.com">
                  <GitHubIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", marginTop: "2rem" }}>
          <Typography variant="body2" color="white">
            {"© "}
            {new Date().getFullYear()} My Website. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
