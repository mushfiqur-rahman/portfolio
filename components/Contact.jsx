import React, { useState } from "react";
import Image from "next/image";
import ContactImg from "../public/contactImg.webp";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);

    // Client-side email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newEmail)) {
      setError("Invalid email address");
    } else {
      setError("");
    }
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    // Client-side validation for word count
    const wordCount = newText.trim().split(/\s+/).length;
    if (wordCount < 50) {
      setError("Minimum 50 words required");
    } else if (wordCount > 150) {
      setError("Maximum 150 words allowed");
    } else {
      setError("");
    }

    // Client-side validation for links
    const hasLink = /(?:https?|ftp):\/\/[\n\S]+/i.test(newText);
    if (hasLink) {
      setError("Remove any links from the text");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
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
                <p>Web Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and lets talk.
                </p>
              </div>

              <div className="flex items-center py-4">
                <div className=" p-2">
                  <div className="font-bold ">
                    <span className="text-blue-500">Mail:</span>{" "}
                    <span>mushfiq.kdu@gmail.com</span>
                  </div>
                  <div className="font-bold">
                    <span className="text-blue-500">Skype:</span>{" "}
                    <span>mushfiq.style</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/c5c082f5-315e-47c3-b3b7-e0c73974c08f"
                method="POST"
                encType="multipart/form-data"
                onSubmit={handleSubmit}
              >
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
                    value={email}
                    onChange={handleEmailChange}
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
                    onChange={handleTextChange}
                    value={text}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-indigo-500 text-gray-100 mt-4 w-full p-4 rounded-lg"
                >
                  Send Message
                </button>
              </form>

              {error && (
                <p className="font-bold" style={{ color: "red" }}>
                  {error}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;