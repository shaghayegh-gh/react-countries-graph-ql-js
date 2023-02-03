import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { colors } from "./colors";
import { row, cell } from "./country.style";

function Country({ country, isActive, onClick, ...props }) {
  const { name, capital, continent, currency, code, emoji } = country;
  const randomNumber = Math.floor(Math.random() * 10);
  const color = colors[randomNumber];
  const bgcolor = isActive ? color : "#fff";
  const borderColor = isActive ? color : "grey.300";
  const items = [emoji, name, capital, continent.name, currency, code];

  return (
    <Box onClick={onClick}>
      <Grid container sx={{ ...row, bgcolor, borderColor }}>
        {items.map((value, i) => (
          <Grid
            sx={{ ...cell }}
            key={"card-cell-" + i}
            {...props}
            md={2}
            sm={6}
            xs={12}
            item
          >
            {value}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

Country.defaultProps = {
  country: PropTypes.shape({
    name: PropTypes.string,
    capital: PropTypes.string,
    continent: PropTypes.string,
    currency: PropTypes.string,
    code: PropTypes.string,
    emoji: PropTypes.string,
  }),
  isActive: false,
  onClick: () => {},
};

Country.propTypes = {
  country: PropTypes.object,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Country;
