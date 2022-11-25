import { Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Country from "./Pages/Country";
import { useEffect, useState } from "react";

const data = JSON.parse(window.localStorage.getItem("theme") || `true`);

function App() {
  let [ligthTheme, setLigthTheme] = useState(data);
  useEffect(() => {}, []);

  useEffect(() => {
    window.localStorage.setItem("theme", JSON.stringify(ligthTheme));
  }, [ligthTheme]);

  let handleTheme = () => {
    setLigthTheme((e) => !e);
  };
  return (
    <HashRouter>
      <main
        className={`bg-[#fafafa] ${
          !ligthTheme && `bg-[#202c37]`
        } min-h-screen select-none drag`}
      >
        <Routes>
          <Route
            path="/"
            element={<Home ligthTheme={ligthTheme} handleTheme={handleTheme} />}
          />
          <Route
            path="/country/:id"
            element={
              <Country ligthTheme={ligthTheme} handleTheme={handleTheme} />
            }
          />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
