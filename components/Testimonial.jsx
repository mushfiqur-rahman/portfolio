import React, { useState } from "react";
import Image from "next/image";
import { client } from "@/data/client";
import Marquee from "react-fast-marquee";

const Testimonial = () => {
  const [message, setMessage] = useState(client);
  return (
    <>
      <div className="py-10 sm:py-16 lg:py-24 mt-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl text-xl font-bold tracking-widest uppercase text-indigo-500">
            <p>Testimonial</p>
          </div>
          <h2 className="py-4">My Clients</h2>

          <div className="py-5 text-center items-center drop-shadow-xl">
            <Marquee
              direction="left"
              reverse={false}
              pauseOnHover={true}
              speed={50}
            >
              {message.map((item, index) => (
                <div key={index} className="w-full flex carousel-item mx-2">
                  <div className="card bg-base-100 dark:bg-black/30 rounded-lg shadow-lg shadow-lime-300">
                    <figure className="p-5">
                      <Image
                        src={item.image}
                        alt={item.name}
                        message={message}
                        width={100}
                        height={100}
                        className="rounded-xl size-40"
                      />
                    </figure>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
