import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "../context/UserContext";
import { LinkContextProvider } from "../context/LinkContext";
import { AlertContextProvider } from "../context/AlertContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserContextProvider>
      <AlertContextProvider>
        <LinkContextProvider>
          <Component {...pageProps} />
        </LinkContextProvider>
      </AlertContextProvider>
    </UserContextProvider>
  );
}

export default MyApp;
