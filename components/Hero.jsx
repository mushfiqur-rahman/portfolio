import React from "react";

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen text-center gradient-01">
      <div className="relative max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="mt-[10px] w-full justify-center content-center">
          <div className="text-2xl md:text-2xl font-bold mb-4">
            <h1> Build Your Online Presence with Website & Email Solutions</h1>
          </div>
          <div className="text-lg mb-8">
            <p>
              I help businesses create fast websites, set up Google Workspace &
              Microsoft 365, and run effective email marketing — all without
              hassle.
            </p>
          </div>
          <div className="py-2 font-bold md:text-2xl text-sm">
            <p>Book a Free Consultation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
