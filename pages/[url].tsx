import { db } from "../utils/db";

export default function ShortIdPage() {
  return <h1>Redirecting to page...</h1>;
}

export async function getServerSideProps({ params }: any) {
  const { url } = params;
  const data = await db.link.findFirst({
    where: { short: url },
  });

  if (!data) {
    return { redirect: { destination: "/" } };
  }

  return {
    redirect: { destination: data.url },
  };
}
