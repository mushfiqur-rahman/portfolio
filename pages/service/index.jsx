import Head from "next/head";
import React from "react";

const service = () => {
  return (
    <>
      <Head>
        <title>Services</title>
        <link rel="canonical" href="/service" />
        <meta
          name="description"
          content="My services are Google Workspace administration, Microsoft Office 365 administration, email deliverability, WordPress website bug-free transfer, DNS management (GoDaddy, Cloudflare, Namecheap), website & DNS issue fixes (CNAME, A records, IP, redirects), spam or junk issue fix, cold mail setup, email migration, Web Development and IT consultancy"
        />
        <meta
          name="keywords"
          content="Google Workspace administration, Microsoft Office 365 administration, email deliverability, WordPress website bug-free transfer, DNS management (GoDaddy, Cloudflare, Namecheap), website & DNS issue fixes (CNAME, A records, IP, redirects), spam or junk issue fix, cold mail setup, email migration, Web Development and IT consultancy, USA, United Kingdome"
        />
      </Head>
      <div className="w-full lg:h-screen p-2">
        <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full pt-16 lg:pt-0">
          <h1 className="py-8 text-4xl font-bold text-center text-indigo-500">
            My Services
          </h1>
          <p className="text-center mb-8">My Provided services are</p>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-lg shadow-xl shadow-gray-200 hover:shadow-xl hover:shadow-gray-400 transition-shadow duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-500 mb-4">
                  Web Development
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className=" p-6 rounded-lg shadow-xl shadow-gray-200 hover:shadow-xl hover:shadow-gray-400 transition-shadow duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-500 mb-4">
                  Service 2
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className=" p-6 rounded-lg shadow-xl shadow-gray-200 hover:shadow-xl hover:shadow-gray-400 transition-shadow duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-500 mb-4">
                  Service 3
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-lg shadow-xl shadow-gray-200 hover:shadow-xl hover:shadow-gray-400 transition-shadow duration-300">
              <div className="text-center">
                <div className="text-2xl font-bold text-indigo-500 mb-4">
                  Service 4
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default service;
