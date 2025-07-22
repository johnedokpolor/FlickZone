import { useState, useEffect, useContext } from "react";
import fetchFromApi from "./api/fetchFromApi";
import PageRoutes from "./routes/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./style.css";
import { Context } from "./context/context";

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));

function App() {
  const { dark, setDark } = useContext(Context);
  useEffect(() => {
    setDark(true);
  }, []);

  return (
    <div className={dark ? "dark" : "light"}>
      <Header />
      <PageRoutes />

      <Footer />
    </div>
  );
}

export default App;
