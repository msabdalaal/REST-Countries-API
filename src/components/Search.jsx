import { FaSearch } from "react-icons/fa";
import { BiReset } from "react-icons/bi";

function Search({
  handleSearch,
  search,
  handleRegion,
  ligthTheme,
  handleReset,
}) {
  return (
    <div className="Search flex justify-between pt-10 px-10 ">
      <div
        className={`bg-white searchInput md:w-72 lg:w-72 shadow-sm flex justify-center  items-center p-2.5 ${
          !ligthTheme && `bg-[#2b3945]`
        }`}
      >
        <FaSearch
          className={`text-gray-400 ${!ligthTheme && `text-gray-100`}`}
        />
        <input
          autoComplete="off"
          type="text"
          name="search"
          id="search"
          placeholder="Search for a country"
          className={`w-full h-5 focus:outline-0 indent-4 ${
            !ligthTheme && `bg-[#2b3945] text-white`
          }`}
          onChange={(e) => handleSearch(e)}
          value={search}
        />
        {search && (
          <button
            className={`${!ligthTheme && `text-gray-100`}`}
            onClick={handleReset}
          >
            <BiReset className="scale-110" />
          </button>
        )}
      </div>
      <label htmlFor="countries"></label>
      <select
        name="selectRegion"
        id="countries"
        className={`md:w-72 lg:w-72 ml-4 bg-white shadow-sm text-black text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block p-2.5 focus:outline-0 ${
          !ligthTheme && `bg-[#2b3945] text-gray-200`
        }`}
        onChange={(e) => handleRegion(e)}
      >
        <option defaultValue value="">
          All Regions
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
}

export default Search;
