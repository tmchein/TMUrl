import { useState, createContext } from "react";

const Context = createContext({});

export function LinkContextProvider({ children }: any) {
  const [listOfLinks, setListOfLinks] = useState<any>([]);
  return (
    <Context.Provider value={{ listOfLinks, setListOfLinks }}>
      {children}
    </Context.Provider>
  );
}

export default Context;
