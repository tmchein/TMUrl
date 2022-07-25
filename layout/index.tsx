import Header from "../components/Header";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <div className="w-full h-screen">
      <Header />
      <main className="w-full h-[calc(100%-64px)]">{children}</main>
    </div>
  );
}
