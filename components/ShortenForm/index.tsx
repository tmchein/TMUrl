import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

export default function ShortenForm() {
  const [url, setUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const { user }: any = useContext(UserContext);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const data = await fetch("/api/shortenUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, user }),
    });
    const response = await data.json();
    setShortUrl(response.shortenedUrl);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center justify-self-center gap-2 sm:gap-4 w-5/6 sm:w-2/6"
    >
      <input
        id="url"
        onChange={handleChange}
        value={url}
        placeholder="Paste your URL here!"
        className="w-full h-10 bg-[#EFF2F6] focus:outline-none
          text-center placeholder:text-[#7A97B1] rounded-lg"
        type="text"
      />
      <input
        type="submit"
        value="Shorten!"
        className="bg-sky-400 h-10 px-2 text-white font-bold uppercase hover:bg-sky-600
           text-sm sm:text-lg rounded-lg"
      />
    </form>
  );
}
