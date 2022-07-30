import { useContext, useEffect } from "react";
import UserContext from "../../context/UserContext";
import LinkContext from "../../context/LinkContext";
import Link from "../Link";

export default function ListOfLinks() {
  const { user }: any = useContext(UserContext);
  const { listOfLinks, setListOfLinks }: any = useContext(LinkContext);

  useEffect(() => {
    const fetchData = async () => {
      if (!user?.email) {
        return;
      }
      await fetch("/api/getUserLinks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      })
        .then((response) => response.json())
        .then((response) => setListOfLinks(response));
    };
    fetchData();
  }, [user, setListOfLinks]);

  if (!user) {
    return (
      <div
        className="h-full w-full flex items-center justify-center flex-col gap-8
      text-gray-400"
      >
        <h1 className="text-6xl sm:text-8xl font-extrabold animate-bounce">
          ¯\_(ツ)_/¯
        </h1>
        <h2 className="text-lg font-semibold underline text-center">
          You are not logged in, sign in to save your shortened urls
        </h2>
      </div>
    );
  }

  if (!listOfLinks.length) {
    return (
      <div
        className="h-full w-full flex items-center justify-center flex-col gap-8
      text-gray-400"
      >
        <h1 className="text-6xl sm:text-8xl font-extrabold animate-bounce">
          ¯\_(ツ)_/¯
        </h1>
        <h2 className="text-lg font-semibold underline text-center">
          Your list of links is empty, start shortening!
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-col py-8 items-center gap-5 w-5/6 md:w-3/6 h-full m-auto">
      {listOfLinks.map((link: any) => (
        <Link key={link.short} shortUrl={link.short} originalUrl={link.url} />
      ))}
    </div>
  );
}
