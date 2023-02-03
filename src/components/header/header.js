import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TravelExplore from "@mui/icons-material/TravelExplore";
import { headerStyles, contentStyles } from "./header-style";

function Header() {
  return (
    <Box sx={{ ...headerStyles }}>
      <Container sx={{ ...contentStyles }}>
      <TravelExplore fontSize="large" color="inherit" sx={{ mr: 0.5 }} />
        <Typography  sx={{ mb: 0 }} variant="h5" gutterBottom>
          Search your country here!
        </Typography>
      </Container>
    </Box>
  );
}

export default Header;
