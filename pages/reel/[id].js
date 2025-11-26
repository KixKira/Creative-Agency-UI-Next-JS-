import Head from "next/head";
import { showcase } from "@/assets/data/dummydata";
import ReelView from "@/components/ReelView";

export default function ReelPage({ item }) {
  return (
    <>
      <Head>
        <title>{item ? item.title : "Reel"}</title>
      </Head>
      <ReelView item={item} />
    </>
  );
}

export async function getStaticPaths() {
  const paths = showcase.map((s) => ({ params: { id: String(s.id) } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const id = parseInt(params.id, 10);
  const item = showcase.find((s) => s.id === id) || null;
  return { props: { item } };
}
