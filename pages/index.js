import { Hero } from "@/sections";
import Head from "next/head";
import Brand from "@/components/Brand";

export default function Home() {
  return (
    <>
      <Head>
        <title>Juweare</title>
      </Head>
      <Hero />
      <Brand />
    </>
  );
}
