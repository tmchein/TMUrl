import "../styles/globals.css";
import type { AppProps } from "next/app";
import { UserContextProvider } from "../context/UserContext";
import { LinkContextProvider } from "../context/LinkContext";
import { AlertContextProvider } from "../context/AlertContext";
import { SessionProvider } from "next-auth/react";
import { NextSeo } from "next-seo";
import SEO from "../next-seo.config";

function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <NextSeo noindex={false} nofollow={true} {...SEO} />
      <UserContextProvider>
        <AlertContextProvider>
          <LinkContextProvider>
            <SessionProvider session={session}>
              <Component {...pageProps} />
            </SessionProvider>
          </LinkContextProvider>
        </AlertContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;
