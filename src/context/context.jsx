import { createContext, useState, useEffect } from "react";

export const Context = createContext();
const ContextProvider = (props) => {
  const [dark, setDark] = useState(() =>
    localStorage.getItem("dark")
      ? JSON.parse(localStorage.getItem("dark"))
      : false,
  );

  function shuffle(array) {
    let cIndex = array.length;
    while (cIndex > 0) {
      let rIndex = Math.floor(Math.random() * cIndex);
      cIndex--;
      [array[cIndex], array[rIndex]] = [array[rIndex], array[cIndex]];
    }
  }
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  const contextValue = {
    dark,
    setDark,
    shuffle,
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
