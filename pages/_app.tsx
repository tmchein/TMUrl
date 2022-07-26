import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "../context/UserContext";
import { LinkContextProvider } from "../context/LinkContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <LinkContextProvider>
        <Component {...pageProps} />
      </LinkContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
