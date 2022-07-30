import LogginButton from "../LogginButon";
import ShortenForm from "../ShortenForm";

export default function Header() {
  return (
    <header className="w-full h-16 flex justify-around items-center gap-2 px-4 sm:px-8 bg-white sticky top-0 shadow-md">
      <h1
        className="hidden sm:block text-2xl font-extrabold bg-gradient-to-r
      from-[#485563] to-[#29323c] bg-clip-text text-transparent
      lg:text-4xl"
      >
        TMUrl
      </h1>
      <ShortenForm />
      <LogginButton />
    </header>
  );
}
