import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import ContactImg from "../../public/contactImg.webp";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaSkype } from "react-icons/fa";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleContextmenu = (event) => {
      event.preventDefault();
    };

    document.addEventListener("contextmenu", handleContextmenu);

    return () => {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  const email = "mushfiqur-rahman@hotmail.com";

  const handleEmail = () => {
    window.location.href = `mailto:${email}`;
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "cc24ffa7-efdd-4575-8f1e-5192062370da");

      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
        event.target.reset(); // Reset the form fields
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Head>
        <title>Contact</title>
        <link rel="canonical" href="/contact" />
        <meta
          name="description"
          content="I am Mushfiqur Rahman from Bangladesh, a web developer and IT support engineer. My services are Google Workspace administration, Microsoft Office 365 administration, email deliverability, WordPress website bug-free transfer, DNS management (GoDaddy, Cloudflare, Namecheap), website & DNS issue fixes (CNAME, A records, IP, redirects), spam or junk issue fix, email migration, and IT consultancy. You may hire me through international marketplaces, such as Upwork or Fiverr, or directly."
        />
        <meta
          name="keywords"
          content="Django HTMX Bootstrap, khulna, jashore, jessore, IT Support Engineer"
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
                  />
                </div>

                <div className="text-center md:text-start">
                  <h2 className="py-2 text-3xl text-indigo-500">
                    Mushfiqur Rahman
                  </h2>

                  <p>IT Support Engineer</p>
                  <p className="font-mono">Address: Jashore, Khulna - 7400</p>
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

                  {/* Skype Button */}
                  <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 hover:text-yellow-500 ease-in duration-300">
                    <a
                      href="skype:live:mushfiq.style?chat"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Skype"
                    >
                      <FaSkype size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
              <div className="p-4">
                {isSubmitted ? (
                  <div className="text-center py-10">
                    <div className="text-green-500 text-5xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-indigo-500 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      {`Thank you for reaching out. I'll get back to you soon.`}
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-indigo-500 text-gray-100 mt-6 px-6 py-2 rounded-lg hover:bg-indigo-600 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Your Name
                      </label>
                      <input
                        className="border-2 rounded-lg p-3 flex border-gray-300"
                        type="text"
                        name="name"
                        placeholder="Your Full Name"
                        required
                      />
                    </div>

                    <div className="flex flex-col">
                      <label className="uppercase text-sm py-2">
                        Your Email
                      </label>
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
                      disabled={isLoading}
                      className="bg-indigo-500 text-gray-100 mt-4 w-full p-4 rounded-lg hover:bg-indigo-600 disabled:bg-indigo-400 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Sending..." : "Send Message"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
