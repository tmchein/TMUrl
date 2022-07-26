import { useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import LinkContext from "../../context/LinkContext";
import { useAlert } from "../../context/AlertContext";
import { copyTextToClipboard } from "../../utils/clipboard";

export default function ShortenForm() {
  const [url, setUrl] = useState<string>("");
  const [shortUrl, setShortUrl] = useState<string>("");
  const { user }: any = useContext(UserContext);
  const { setListOfLinks }: any = useContext(LinkContext);
  const { setAlert }: any = useAlert();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!user) {
      setAlert({
        show: true,
        type: "error",
        message: "Please login to shorten links",
      });
      return;
    }
    if (!url || url.length === 0 || url === " ") {
      setAlert({
        show: true,
        type: "error",
        message: "Please enter a valid url",
      });
      return;
    }

    await fetch("/api/shortenUrl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url, user }),
    })
      .then((response) => response.json())
      .then(async (response) => {
        setShortUrl(response.shortUrl);
        await copyTextToClipboard(`${window.location.host}/${response.short}`);
        setAlert({
          show: true,
          type: "success",
          message: "Link copied to clipboard 📋",
        });
      });

    if (user) {
      await fetch("/api/getUserLinks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user.email }),
      })
        .then((response) => response.json())
        .then((response) => setListOfLinks(response));
    }
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
