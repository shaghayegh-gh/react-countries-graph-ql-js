import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { LIST_COUNTRIES } from "./queries/countries-queries";
import Container from "@mui/material/Container";
import Loading from "./components/loading/loading";
import Error from "./components/error/error";

function App() {
  const [countries, setCountries] = useState([]);
  const { data, loading, error } = useQuery(LIST_COUNTRIES);

  useEffect(() => {
    if (data?.countries) {
      setCountries(data.countries);
    }
  }, [data]);

  if (error) return <Error />;

  return (
      <Container sx={{ mt: 5, mb: 5, minHeight: "100vh" }}>
        {loading ? <Loading /> : 
        countries.map((con,i) =>  <div key={i}>{con.name}</div> )}
      </Container>

  );
}

export default App;
