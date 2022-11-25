import { FaMoon, FaSun } from "react-icons/fa";
function Header({ ligthTheme, handleTheme }) {
  return (
    <header className="flex justify-between px-10 py-4 shadow-md">
      <h1 className={`font-bold text-2xl ${!ligthTheme && `text-gray-100`}`}>
        Where in the world?
      </h1>
      <button
        onClick={() => handleTheme()}
        className={`flex items-center justify-center gap-4 text-xl ${
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
