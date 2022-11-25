import React from "react";
import useFetch from "../Hook/useFetch";
import { IoIosArrowRoundBack } from "react-icons/io";
import GridLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

function Country({ ligthTheme, handleTheme }) {
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
        <div className="img lg:h-[30rem] px-4 my-14 lg:mr-10 lg:mb-0">
          <img
            src={country.flags.svg}
            alt="Flag"
            className="h-full  shadow-md"
          />
        </div>

        <div className="w-fit p-4">
          <h1 className={`font-bold text-2xl mb-10`}>{country.name}</h1>
          <ul className="info grid grid-cols-2 gap-4 font-normal mb-10">
            <li>
              <strong>Native Name: </strong>
              {country.nativeName}
            </li>
            <li>
              <strong>Population: </strong>
              {country.population}
            </li>
            <li>
              <strong>Region: </strong>
              {country.region}
            </li>
            <li>
              <strong>Sub Region: </strong>
              {country.subregion}
            </li>
            <li>
              <strong>Capital: </strong>
              {country.capital}
            </li>
            <li>
              <strong>Top Level Domain: </strong>
              {country.topLevelDomain}
            </li>
            <li>
              <strong>Currency: </strong>
              {country.currencies[0].code}
            </li>
            <li>
              <strong>Languages: </strong>
              {country.languages[0].name}
            </li>
          </ul>

          <div className="flex justify-start items-center flex-wrap">
            <strong>Border Countries: </strong>
            <ul className="flex justify-start items-center flex-wrap">
              {country.borders ? (
                country.borders.map((border) => {
                  return (
                    <li>
                      <button
                        key={border}
                        className={`p-2 rounded-md mb-2 bg-white shadow-sm mx-2 ${
                          !ligthTheme && `bg-[#2b3945]`
                        }`}
                        onClick={() => {
                          window.location.hash = `/country/${border}`;
                          window.location.reload();
                        }}
                      >
                        {border}
                      </button>
                    </li>
                  );
                })
              ) : (
                <p className="ml-4">None</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="pt-10">
      <Link
        to="/"
        className={`shadow-md w-fit  ml-4 lg:ml-20 mb-15 bg-white rounded-md px-6 py-5 h-4 flex justify-center items-center ${
          !ligthTheme && `text-gray-100 bg-[#2b3945]`
        }`}
      >
        <IoIosArrowRoundBack className="" />
        Back
      </Link>
      <div className="page w-full flex justify-center items-center">
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
