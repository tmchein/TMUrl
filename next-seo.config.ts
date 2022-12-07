import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "TMUrl - URL Shortener",
  description:
    "TMUrl is a URL shortener that allows you to create short links for your long URLs.",
  canonical: "https://tmurl.vercel.app/",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tmurl.vercel.app/",
    siteName: "TMUrl",
    title: "TMUrl - URL Shortener",
    description:
      "TMUrl is a URL shortener that allows you to create short links for your long URLs.",
    images: [
      {
        url: "/images/tmurl_og.jpg",
        width: 1200,
        height: 630,
        alt: "TMUrl",
      },
    ],
  },
  twitter: {
    handle: "@tmchein",
    site: "@tmchein",
    cardType: "summary_large_image",
  },
};

export default config;
