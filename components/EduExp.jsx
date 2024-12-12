import { useRef } from "react";
import { useInView } from "framer-motion";
import { AiFillCaretRight } from "react-icons/ai";
import Link from "next/link";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

const EduExp = () => {
  return (
    <>
      <div id="edu&exp" className="w-full lg:h-screen">
        <div className="w-full">
          <div className="max-w-[1240px] mx-auto px-2">
            <p className="text-xl tracking-widest uppercase font-bold text-indigo-500">
              Education
            </p>
            <h2 className="py-4">What I have achived</h2>
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Left */}
              <div className="col-span-3 lg:col-span-2 w-full h-full shadow-sm shadow-gray-300 rounded-xl p-4">
                <h2 className="text-center text-2xl border-b-4">Experience</h2>

                {/* Experience Item  */}
                <Section>
                  <div className="flex mt-8 md:pl-18">
                    <div className="mt-1 flex">
                      <AiFillCaretRight className=" text-blue-500 md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold dark:text-slate-200">
                          Nov 2023 - Present
                        </span>
                        <span className="pt-2 block text-lg font-bold">
                          IT Support Engineer at{" "}
                          <span className="capitalize">
                            INNOVATIVE SOFTWARE{" "}
                          </span>
                        </span>
                        <span className="text-sm ">Remote</span>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Experience Item  */}
                <Section>
                  <div className="flex mt-8 md:pl-18">
                    <div className="mt-1 flex">
                      <AiFillCaretRight className=" text-blue-500 md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold dark:text-slate-200">
                          April 2022 - February 24
                        </span>
                        <span className="pt-2 block text-lg font-bold">
                          Python Django Developer at{" "}
                          <span className="capitalize">Upwork </span>
                        </span>
                        <span className="text-sm ">Remote</span>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Experience Item  */}
                <Section>
                  <div className="flex mt-8 md:pl-18">
                    <div className="mt-1 flex">
                      <AiFillCaretRight className=" text-blue-500 md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold ">
                          Jan 2022 - Dec 2022
                        </span>
                        <span className="pt-2 block text-lg font-bold">
                          Software Engineer Trainee at{" "}
                          <span className="capitalize">MicrodreamIT</span>
                        </span>
                        <span className="text-sm ">
                          Sheikh Hasina Software & Technology Park, Jashore,
                          Bangladesh
                        </span>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Experience Item  */}
                <Section>
                  <div className="flex mt-8 md:pl-18">
                    <div className="mt-1 flex">
                      <AiFillCaretRight className=" text-blue-500 md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold">
                          Feb 2020 - Dec 2021
                        </span>
                        <span className="pt-2 block text-lg font-bold">
                          Jr. Infrastructure Engineer at{" "}
                          <span className="capitalize">
                            Aamra Networks Ltd.
                          </span>
                        </span>
                        <span className="text-sm">
                          Sheikh Hasina Software & Technology Park, Jashore,
                          Bangladesh
                        </span>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Experience Item  */}
                <Section>
                  <div className="flex mt-8 md:pl-18">
                    <div className="mt-1 flex">
                      <AiFillCaretRight className=" text-blue-500 md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold">
                          April 2019 - Feb 2020
                        </span>
                        <span className="pt-2 block text-lg font-bold">
                          Customer Service Executive at{" "}
                          <span className="capitalize">Chaldal</span>
                        </span>
                        <span className="text-sm">
                          Sheikh Hasina Software & Technology Park, Jashore,
                          Bangladesh
                        </span>
                      </div>
                    </div>
                  </div>
                </Section>
              </div>
              {/* Right */}
              <div className="col-span-3 lg:col-span-2 w-full h-full shadow-sm shadow-gray-300 rounded-xl p-4">
                <h2 className="text-center text-2xl border-b-4">
                  Education & Training
                </h2>

                {/* Education Item  */}
                <Section>
                  <div className="flex mt-8 md:pl-18">
                    <div className="mt-1 flex">
                      <AiFillCaretRight className=" text-blue-500 md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold dark:text-slate-200">
                          July 2024 - Oct 2024
                        </span>
                        <span className="pt-2 block text-lg font-bold">
                          International English Language Testing System{" "}
                          <span className="capitalize">(IELTS)</span>
                        </span>
                        <span className="text-sm dark:text-slate-200">
                          British Council
                        </span>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Education Item  */}
                <Section>
                  <div className="flex mt-8 md:pl-18">
                    <div className="mt-1 flex">
                      <AiFillCaretRight className=" text-blue-500 md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold dark:text-slate-200">
                          July 2023 - Dec 2023
                        </span>
                        <span className="pt-2 block text-lg font-bold">
                          The Ultimate Django Series{" "}
                          <span className="capitalize">(1-3)</span>
                        </span>
                        <span className="text-sm dark:text-slate-200">
                          Code with Mosh
                        </span>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Education Item  */}
                <Section>
                  <div className="flex mt-8 md:pl-18">
                    <div className="mt-1 flex">
                      <AiFillCaretRight className=" text-blue-500 md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold dark:text-slate-200">
                          Oct 2018 - Jan 2019
                        </span>
                        <span className="pt-2 block text-lg font-bold">
                          Basic Spoken in English at{" "}
                          <span className="capitalize">Lexicon</span>
                        </span>
                        <span className="text-sm dark:text-slate-200">
                          Khulna, Bangladesh
                        </span>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Education Item  */}
                <Section>
                  <div className="flex mt-8 md:pl-18">
                    <div className="mt-1 flex">
                      <AiFillCaretRight className=" text-blue-500 md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold dark:text-slate-200">
                          Nov 2017 - Feb 2018
                        </span>
                        <span className="pt-2 block text-lg font-bold">
                          Web Application Development(PHP Laravel){" "}
                          <span className="capitalize">at BITM</span>
                        </span>
                        <span className="text-sm dark:text-slate-200">
                          Dhaka, Bangladesh
                        </span>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Education Item  */}
                <Section>
                  <div className="flex mt-8 md:pl-18">
                    <div className="mt-1 flex">
                      <AiFillCaretRight className=" text-blue-500 md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold dark:text-slate-200">
                          April 2012 - Oct 2017
                        </span>
                        <span className="pt-2 block text-lg font-bold">
                          B.Sc(Hons) in CSE at{" "}
                          <span className="capitalize">
                            ILACS(National University)
                          </span>
                        </span>
                        <span className="text-sm dark:text-slate-200">
                          Khulna, Bangladesh
                        </span>
                      </div>
                    </div>
                  </div>
                </Section>

                {/* Education Item  */}
                <Section>
                  <div className="flex mt-8 md:pl-18">
                    <div className="mt-1 flex">
                      <AiFillCaretRight className=" text-blue-500 md:block" />
                      <div className="md:-mt-1 md:pl-8">
                        <span className="block font-bold dark:text-slate-200">
                          2008-2010
                        </span>
                        <span className="pt-2 block text-lg font-bold">
                          H.S.C(Science) at{" "}
                          <span className="capitalize">Keshabpur College</span>
                        </span>
                        <span className="text-sm dark:text-slate-200">
                          Keshabpur, Jashore, Bangladesh
                        </span>
                      </div>
                    </div>
                  </div>
                </Section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EduExp;
