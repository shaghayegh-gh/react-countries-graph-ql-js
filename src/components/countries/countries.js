import * as React from "react";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroller";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import Country from "../country/country";
import CountriesHead from "../countries-head/countries-head";
import { useState } from "react";
import { useEffect } from "react";
import { countriesStyles } from "./countries-style";
import useChunk from "../../hooks/useChunk";

function Countries({ countries }) {
  const chunkSize = parseInt(process.env.REACT_APP_CHUNK_SIZE, 10);
  const pages = useChunk(countries, chunkSize);
  const [items, setItems] = useState([]);
  const [activeItem, setActiveItem] = useState({
    index: null,
    isActive: false,
  });
  const [mount, setMount] = useState(true);
  const [page, setPage] = useState(0);
  const [data, setData] = useState([]);
  const [isMorePage, setMorePage] = useState(true);

  useEffect(() => {
    const length = countries.length;
    if (length > chunkSize) {
      setData(pages);
    }

    if (0 < length && length <= chunkSize) {
      setItems(countries);
      setMorePage(false);
    }
    setMount(true);
    // eslint-disable-next-line
  }, [countries]);

  useEffect(() => {
    if (data.length) {
      const items = data[page];
      setItems(items);
    }
    // eslint-disable-next-line
  }, [data]);

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

  const loadMoreDate = () => {
    const totalPage = data.length;
    const nextPage = page + 1;
    if (nextPage < totalPage) {
      const newPage = data[page + 1];
      setPage((prv) => prv + 1);
      setItems((prv) => [...prv, ...newPage]);
    }

    if (nextPage === totalPage) {
      setMorePage(false);
    }
  };

  return (
    <Box sx={{ ...countriesStyles }}>
      <CountriesHead />
      <InfiniteScroll
        pageStart={0}
        loadMore={loadMoreDate}
        hasMore={isMorePage}
        loader={<LinearProgress key={0} />}
      >
        {items.map((c, i) => (
          <Country
            index={"country" + i}
            key={c.code + i}
            country={c}
            isActive={generateActiveState(i)}
            onClick={() => handelOnClick(i)}
          />
        ))}
      </InfiniteScroll>
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
