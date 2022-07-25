type LinkType = {
  shortUrl: string;
  originalUrl: string;
};

export default function Link({ shortUrl, originalUrl }: LinkType) {
  return (
    <div className="bg-white w-full p-7 rounded-xl shadow-sm">
      <h1 className="text-3xl font-semibold text-sky-500">{shortUrl}</h1>
      <h2>{originalUrl}</h2>
    </div>
  );
}
