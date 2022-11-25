import React, { useState } from "react";
import Countries from "../components/Countries";
import Header from "../components/Header";
import Search from "../components/Search";

function Home({ handleTheme, ligthTheme }) {
  let [search, setSearch] = useState("");
  let [region, setRegion] = useState("");
  function handleSearch(e) {
    setSearch((prev) => e.target.value);
  }
  function handleRegion(e) {
    setRegion((prev) => e.target.value);
  }
  return (
    <div className="Home min-h-screen">
      <Header ligthTheme={ligthTheme} handleTheme={handleTheme} />
      <Search
        handleSearch={handleSearch}
        search={search}
        region={region}
        handleRegion={handleRegion}
        ligthTheme={ligthTheme}
      />
      <Countries search={search} region={region} ligthTheme={ligthTheme} />
    </div>
  );
}

export default Home;
