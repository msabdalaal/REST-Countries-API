import useFetch from "../Hook/useFetch";
import CountryCard from "./CountryCard";
import GridLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

function Countries({ search, region, ligthTheme }) {
  let { result: countries, loading } = useFetch(
    `https://restcountries.com/v2/${region == "" ? "all" : `region/${region}`}`
  );
  console.log(loading);
  let countryCards = countries.map((country) => {
    return (
      <Link key={country.name} to={`/country/${country.alpha3Code}`}>
        <CountryCard
          key={country.name}
          country={country}
          ligthTheme={ligthTheme}
        />
      </Link>
    );
  });
  function Content({ ligthTheme }) {
    if (search == "") {
      return countryCards;
    } else {
      let Content = countries.map((country) => {
        if (country.name.toLowerCase().match(search)) {
          return (
            <a
              key={country.name}
              href={`/REST-Countries-API/country/${country.alpha3Code}`}
            >
              <CountryCard country={country} ligthTheme={ligthTheme} />
            </a>
          );
        }
      });
      return Content;
    }
  }
  return (
    <div className="page w-full flex justify-center items-center min-h-[80vh]">
      <div className="flex w-full flex-wrap justify-evenly item-start px-10 mt-10">
        {!loading ? (
          <GridLoader
            className="w-full"
            size={150}
            color={`${ligthTheme ? `#2b3945` : `#ffff`}`}
          />
        ) : (
          <Content ligthTheme={ligthTheme} />
        )}
      </div>
    </div>
  );
}

export default Countries;
