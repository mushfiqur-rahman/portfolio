import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const index = () => {
  return (
    <>
      <Head>
        <title>MUSHFIQ – IT Support Engineer | Upwork Profile</title>
        <meta
          name="description"
          content="Mushfiqur Rahman – IT Support Engineer specializing in Google Workspace, Microsoft 365, DNS, and Email Migration."
        />
      </Head>
      <div className="w-full min-h-screen py-12 pt-[100px]">
        <div className="max-w-[1240px] mx-auto px-4">
          <section className="bg-gray-100 py-8">
            <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border border-gray-200">
                  <Image
                    src="/mushfiqur.jpg" // Your photo in /public
                    alt="Mushfiqur Rahman"
                    width={112}
                    height={112}
                  />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h1 className="text-xl font-semibold text-gray-900">
                      Mushfiqur Rahman
                    </h1>
                    <p className="text-gray-600">
                      IT Support Engineer | Google Workspace | Microsoft 365
                      Expert
                    </p>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <FaMapMarkerAlt />
                      Khulna, Bangladesh
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 text-green-700 font-semibold text-lg">
                    $30.00/hr
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                  <a
                    href="https://www.upwork.com/freelancers/~01645495a4cd9b4a74"
                    target="_blank"
                    aria-label="upwork link"
                    className="px-5 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                  >
                    View Upwork Profile
                  </a>
                  <Link
                    href="/contact"
                    className="px-5 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default index;
