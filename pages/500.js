import Head from "next/head";

export default function Custom500() {
  return (
    <>
      <Head>
        <title>500 - Error!</title>
        <link rel="canonical" href="/500" />
      </Head>
      <div className="items-center text-center">
        <h1 className="text-center items-center text-red-600 py-10 text-5xl">
          500 - Server-side error occurred
        </h1>
      </div>
    </>
  );
}
