import { createContext, useState } from "react";

const Context = createContext({});

type Props = {
  children: JSX.Element;
};

type User = {
  avatar: string;
  name: string;
  email: string;
};

export function UserContextProvider({ children }: Props) {
  const [user, setUser] = useState<User>();
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
}

export default Context;
