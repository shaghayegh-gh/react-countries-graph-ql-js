import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useEffect } from "react";
import { countriesStyles } from "./countries-style";

function Countries({ countries }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(countries);
  }, [countries]);

  return (
    <Box sx={{ ...countriesStyles }}>
      {!!items?.length && items?.map((c, i) => <div key={i}>{c.name}</div>)}
    </Box>
  );
}
Countries.defaultProps = {
  countries: [],
};

Countries.propTypes = {
  countries: PropTypes.array,
};

export default Countries;
