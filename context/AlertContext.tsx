import { useState, createContext, useContext } from "react";

const Context = createContext({});

type ProviderChildren = {
  children: JSX.Element;
};

type AlertProps = {
  show: boolean;
  type: string;
  message: string;
};

function AlertContextProvider({ children }: ProviderChildren) {
  const [alert, setAlert] = useState<AlertProps>({
    show: false,
    type: "",
    message: "",
  });

  return (
    <Context.Provider value={{ alert, setAlert }}>{children}</Context.Provider>
  );
}

function useAlert() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAlert must be used within a AlertContextProvider");
  }
  return context;
}

export { AlertContextProvider, useAlert };
