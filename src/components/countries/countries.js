import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Country from "../country/country";
import { useState } from "react";
import { useEffect } from "react";
import { countriesStyles } from "./countries-style";

function Countries({ countries }) {
  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState({
    index: null,
    isActive: false,
  });
  const [mount, setMount] = useState(true);

  useEffect(() => {
    setItems(countries);
  }, [countries]);

  const handelOnClick = (index) => {
    if (mount) setMount(false);
    const isPrvElement = activeItem.index === index;
    setActiveItem((prv) => ({
      index,
      isActive: isPrvElement ? !prv.isActive : true,
    }));
  };

  const generateActiveState = (index) => {
    if (mount) {
      if (index === 9) {
        return true;
      }

      if (items.length < 10 && index === items.length - 1) {
        return true;
      }
    }

    if (index === activeItem.index) return activeItem.isActive;

    return false;
  };

  return (
    <Box sx={{ ...countriesStyles }}>
      {items.map((c, i) => (
        <Country
          index={"country" + i}
          key={c.code + i}
          country={c}
          isActive={generateActiveState(i)}
          onClick={() => handelOnClick(i)}
        />
      ))}
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
