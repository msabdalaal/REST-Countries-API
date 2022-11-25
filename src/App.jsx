import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
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
    <main
      className={`bg-[#fafafa] ${!ligthTheme && `bg-[#202c37]`} min-h-screen select-none drag`}
    >
      <BrowserRouter>
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
      </BrowserRouter>
    </main>
  );
}

export default App;
