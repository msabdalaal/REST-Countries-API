function CountryCard({ country, ligthTheme }) {
  return (
    <div
      className={`bg-white w-72 rounded-md shadow-md mb-10 hover:shadow-lg hover:scale-110 transition-all cursor-pointer ${
        !ligthTheme && `text-gray-100 bg-[#2b3945]`
      }`}
    >
      <div
        className="img h-52 w-full bg-cover bg-center mb-4 rounded-t-md"
        style={{ backgroundImage: `url(${country.flags.svg})` }}
      ></div>
      <div className="info p-4 pb-8">
        <h2 className="font-bold text-xl mb-4">{country.name}</h2>
        <p>
          <strong>Population:</strong> {country.population}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Capital:</strong> {country.capital}
        </p>
      </div>
    </div>
  );
}

export default CountryCard;
