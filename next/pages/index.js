import Counter from "../lib/Counter";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>next</title>
      </Head>
      <main>
        <h1>next</h1>

        <h2>counter</h2>
        <Counter />
      </main>
    </>
  );
}
