import React from "react";
import PropTypes from 'prop-types';
import { DebounceInput } from "react-debounce-input";
import Box from "@mui/material/Box";
import { searchBoxStyle, hintBoxStyle } from "./search-box-style";


const SearchBox = ({ params }) => {
  const handelSearchChange = (value) => {
    const searchValue = value.match(/(?<=search:\s+).*?(?=\s+group)/gs);
    const groupValue = value.match(/(?<=group:\s+).*/gs);

    if (searchValue && groupValid(groupValue)) {
      const group = groupValue[0].trim();
      const prm = { filter: { [group]: { regex: searchValue[0] } } };
      params(prm);
    }

    if (value === "") {
      params();
    }
  };

  const groupValid = (value) => {
    if (value?.length) {
      const groups = ["code", "currency", "continent"];
      const isValidGroup = groups.includes(value[0].trim());
      return isValidGroup;
    }
    return false;
  };

  return (
    <Box sx={{ mb: 5 }}>
      <DebounceInput
        minLength={2}
        debounceTimeout={300}
        onChange={(event) => handelSearchChange(event.target.value)}
        placeholder="[Exp] search: europe  group:continent"
        style={searchBoxStyle}
      />
      <Box sx={{ ...hintBoxStyle }}>
        Group includes: code, currency and continent
      </Box>
    </Box>
  );
};

SearchBox.defaultProps = {
  params: () => {},
};

SearchBox.propTypes = {
  params: PropTypes.func
};

export default SearchBox;
