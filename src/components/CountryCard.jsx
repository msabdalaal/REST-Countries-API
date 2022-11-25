function CountryCard({ country, ligthTheme }) {
  return (
    <article
      className={`bg-white w-72 rounded-md shadow-md mb-10 hover:shadow-lg hover:scale-110 transition-all cursor-pointer ${
        !ligthTheme && `text-gray-100 bg-[#2b3945]`
      }`}
    >
      <div
        className="img h-52 w-full bg-cover bg-center mb-4 rounded-t-md text-transparent"
        style={{ backgroundImage: `url(${country.flags.svg})` }}
      >
        {country.name}
      </div>
      <div className="info p-4 pb-8">
        <h2 className="font-bold text-xl mb-4">{country.name}</h2>
        <ul>
          <li>
            <strong>Population:</strong> {country.population}
          </li>
          <li>
            <strong>Region:</strong> {country.region}
          </li>
          <li>
            <strong>Capital:</strong> {country.capital}
          </li>
        </ul>
      </div>
    </article>
  );
}

export default CountryCard;
