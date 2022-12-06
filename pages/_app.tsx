import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "../context/UserContext";
import { LinkContextProvider } from "../context/LinkContext";
import { AlertContextProvider } from "../context/AlertContext";
import { SessionProvider } from "next-auth/react";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <UserContextProvider>
      <AlertContextProvider>
        <LinkContextProvider>
          <SessionProvider session={session}>
            <Component {...pageProps} />
          </SessionProvider>
        </LinkContextProvider>
      </AlertContextProvider>
    </UserContextProvider>
  );
}

export default App;
