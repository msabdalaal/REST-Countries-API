import useFetch from "../Hook/useFetch";
import CountryCard from "./CountryCard";
import GridLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

function Countries({ search, region, ligthTheme }) {
  let { result: countries, loading } = useFetch(
    `https://restcountries.com/v2/${region == "" ? "all" : `region/${region}`}`
  );
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
    let counter = 0;
    if (search == "") {
      return countryCards;
    } else {
      let Content = countries.map((country) => {
        if (country.name.toLowerCase().match(search.toLowerCase())) {
          counter++;
          return (
            <Link key={country.name} to={`/country/${country.alpha3Code}`}>
              <CountryCard country={country} ligthTheme={ligthTheme} />
            </Link>
          );
        } else {
          return null;
        }
      });
      console.log(counter);
      return counter == 0 ? (
        <h1 className={`${!ligthTheme && `text-gray-100`} text-2xl`}>
          No Results
        </h1>
      ) : (
        Content
      );
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
