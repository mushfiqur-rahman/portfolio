import Head from "next/head";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>404 - Error!</title>
        <link rel="canonical" href="/404" />
      </Head>
      <div className="items-center text-center">
        <h1 className="text-center items-center text-blue-600 py-[50%] md:py-[20%] text-5xl">
          404 - Page Not Found
        </h1>
      </div>
    </>
  );
}
