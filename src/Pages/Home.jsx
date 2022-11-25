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
  function handleReset() {
    setSearch("");
  }
  function handleRegion(e) {
    setRegion((prev) => e.target.value);
  }
  return (
    <div className="Home min-h-screen">
      <Search
        handleSearch={handleSearch}
        search={search}
        region={region}
        handleRegion={handleRegion}
        ligthTheme={ligthTheme}
        handleReset={handleReset}
      />
      <Countries search={search} region={region} ligthTheme={ligthTheme} />
    </div>
  );
}

export default Home;
