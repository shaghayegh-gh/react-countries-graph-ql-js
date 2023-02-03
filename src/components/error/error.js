import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";
import { errorStyles } from "./error-style";

function Error({ message }) {
  return (
    <Box sx={{ ...errorStyles }}>
      <Box sx={{ fontSize: "24px" }}>Something Wrong :(</Box>
      <Box>{message}</Box>
    </Box>
  );
}

Error.propTypes = {
  message: PropTypes.string,
};

export default Error;
