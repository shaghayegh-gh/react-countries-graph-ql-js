import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LIST_COUNTRIES } from "./queries/countries-queries";
import SearchBox from "./components/search-box/search-box";
import Countries from "./components/countries/countries";
import Container from "@mui/material/Container";
import Loading from "./components/loading/loading";
import Error from "./components/error/error";

function App() {
  const [countries, setCountries] = useState([]);
  const { data, loading, error, refetch } = useQuery(LIST_COUNTRIES);

  useEffect(() => {
    if (data?.countries) {
      setCountries(data.countries);
    }
  }, [data]);

  if (error) return <Error />;

  return (
    <Container sx={{ mt: 5, mb: 5, minHeight: "100vh" }}>
      <SearchBox params={(p) => refetch(p)} />
      {loading ? <Loading /> : <Countries countries={countries} />}
    </Container>
  );
}

export default App;
