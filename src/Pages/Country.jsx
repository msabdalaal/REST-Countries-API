import React from "react";
import Header from "../components/Header";
import useFetch from "../Hook/useFetch";
import { IoIosArrowRoundBack } from "react-icons/io";
import GridLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

function Country({ ligthTheme, handleTheme }) {
  console.log(window.location.hash.split("/")[2]);
  let { result: country, loading } = useFetch(
    `https://restcountries.com/v2/alpha?codes=${
      window.location.hash.split("/")[2]
    }`
  );

  let Content = country.map((country) => {
    return (
      <div
        key={country.name}
        className={` flex flex-col md:flex-row lg:flex-row justify-center items-center ${
          !ligthTheme && `text-gray-100`
        }`}
      >
        <div className="img lg:w-[40rem] mr-0 mb-10 lg:mr-10 lg:mb-0">
          <img
            src={country.flags.svg}
            alt="Flag"
            className="w-full  shadow-md"
          />
        </div>

        <div className="w-fit">
          <h1 className={`font-bold text-2xl mb-10`}>{country.name}</h1>
          <div className="info grid grid-cols-2 gap-4 font-normal mb-10">
            <p>
              <strong>Native Name: </strong>
              {country.nativeName}
            </p>
            <p>
              <strong>Population: </strong>
              {country.population}
            </p>
            <p>
              <strong>Region: </strong>
              {country.region}
            </p>
            <p>
              <strong>Sub Region: </strong>
              {country.subregion}
            </p>
            <p>
              <strong>Capital: </strong>
              {country.capital}
            </p>
            <p>
              <strong>Top Level Domain: </strong>
              {country.topLevelDomain}
            </p>
            <p>
              <strong>Currency: </strong>
              {country.currencies[0].code}
            </p>
            <p>
              <strong>Languages: </strong>
              {country.languages[0].name}
            </p>
          </div>
          <div className="flex justify-start items-center flex-wrap">
            <strong>Border Countries: </strong>
            {country.borders ? (
              country.borders.map((border) => {
                return (
                  <a
                    key={border}
                    className={`p-2 rounded-md mb-2 bg-white shadow-sm mx-2 ${
                      !ligthTheme && `bg-[#2b3945]`
                    }`}
                    href={`/country/${border}`}
                  >
                    {border}
                  </a>
                );
              })
            ) : (
              <p className="ml-4">None</p>
            )}
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="min-h-screen">
      <Header ligthTheme={ligthTheme} handleTheme={handleTheme} />
      <Link
        to="/"
        className={`shadow-md w-fit mt-10 ml-8 lg:ml-20 mb-20 bg-white rounded-md px-6 py-5 h-4 flex justify-center items-center ${
          !ligthTheme && `text-gray-100 bg-[#2b3945]`
        }`}
      >
        <IoIosArrowRoundBack className="" />
        Back
      </Link>
      <div className="page w-full flex justify-center items-center p-8">
        {!loading ? (
          <GridLoader
            className="w-full"
            size={150}
            color={`${ligthTheme ? `#2b3945` : `#ffff`}`}
          />
        ) : (
          Content
        )}
      </div>
    </div>
  );
}

export default Country;
