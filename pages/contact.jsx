import React, { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import ContactImg from "../public/contactImg.webp";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaSkype } from "react-icons/fa";

const Contact = () => {
  useEffect(() => {
    const handleContextmenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextmenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  //
  const email = "mushfiq.kdu@gmail.com";
  const skype = "mushfiq.style";

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  const handleSkype = () => {
    window.location.href = `skype:username?call`;
  };

  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="canonical" href="/contact" />
        <meta name="description" content="Contact with Mushfiqur Rahman" />
        <meta
          name="keywords"
          content="Django HTMX Bootstrap, khulna, jashore, jessore, backend focused web developer, chuknagar"
        />
      </Head>
      <div className="dark:bg-gradient-to-r from-slate-900 to-slate-700">
        <div
          id="contact"
          className="max-w-[1240px] m-auto md:pl-5 p-4 py-16 glassmorphism"
        >
          <h1 className="py-8 text-4xl font-bold text-center text-indigo-500">
            Get in Touch
          </h1>
          <div className="grid lg:grid-cols-5 gap-8">
            {/* left */}
            <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl">
              <div className="lg:p-4 h-full">
                <div>
                  <Image
                    className="rounded-xl hover:scale-90 ease-in duration-300"
                    src={ContactImg}
                    alt="contact"
                    priority={true}
                  />
                </div>

                <div className="text-center md:text-start">
                  <h2 className="py-2 text-3xl text-indigo-500">
                    Mushfiqur Rahman
                  </h2>

                  <p>Back-end Focused Web Developer</p>
                  <p className="font-mono">
                    Address: Chuknagar, Dumuria, Khulna - 9252
                  </p>
                  <p className="py-4">
                    I am available for freelance or full-time positions. Contact
                    me and lets talk.
                  </p>
                </div>

                <div className="flex items-center justify-center gap-4 max-w-[350px] m-auto py-4">
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 hover:text-yellow-500 ease-in duration-300"
                    onClick={handleEmail}
                  >
                    <Link
                      href={`mailto:${email}`}
                      rel="noreferrer"
                      target="_blank"
                      aria-label="email"
                    >
                      <MdEmail size={20} />
                    </Link>
                  </div>
                  <div
                    className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 hover:text-[#0096DE] ease-in duration-300"
                    onClick={handleSkype}
                  >
                    <Link
                      href={`call:${skype}`}
                      rel="noreferrer"
                      target="_blank"
                      aria-label="skype"
                    >
                      <FaSkype size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                <form action="" method="POST" encType="multipart/form-data">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Your Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Your Email</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="email"
                      name="email"
                      placeholder="you@somewhere.com"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      rows="10"
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      name="message"
                      placeholder="Write your message"
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-indigo-500 text-gray-100 mt-4 w-full p-4 rounded-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="w-full h-full py-8 rounded">
            <div id="embed-ded-map-canvas" className="h-full w-full">
              <iframe
                className="h-full w-full border-0"
                frameBorder={0}
                src="https://www.google.com/maps/embed/v1/place?q=Tripti+Neer+-+তৃপ্তি+নীড়,+School+Road,+Chuknagar,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              />
            </div>

            <style
              dangerouslySetInnerHTML={{
                __html:
                  "#embed-ded-map-canvas img{max-height:none;max-width:none!important;background:none!important;}",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
