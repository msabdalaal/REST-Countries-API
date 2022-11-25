import { FaMoon, FaSun } from "react-icons/fa";
function Header({ ligthTheme, handleTheme }) {
  return (
    <header
      className={`flex justify-between px-4 lg:px-10 h-16 items-center shadow-md bg-white ${
        !ligthTheme && `bg-[#2b3945]`
      }`}
    >
      <h1
        className={`font-bold text-lg lg:text-2xl md:text-2xl ${
          !ligthTheme && `text-gray-100`
        }`}
      >
        Where in the world?
      </h1>
      <button
        onClick={() => handleTheme()}
        className={`flex items-center justify-center gap-4 lg:text-xl md:text-xl ${
          !ligthTheme && `text-gray-100`
        }`}
      >
        {ligthTheme ? <FaMoon /> : <FaSun />}
        {ligthTheme ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
}

export default Header;
