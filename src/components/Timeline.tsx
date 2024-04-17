"use client";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
export default function Timeline() {
  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}

          // transition={{ duration: 0.3 }}
        >
          <div id="Work" className=" flex items-center lg:h-screen">
            <div className="container max-w-5xl px-4 py-12 mx-auto">
              <div className="grid gap-2 mx-4 sm:grid-cols-12 lg:flex lg:flex-col">
                <div className="col-span-12 sm:col-span-3">
                  <div className="text-center sm:text-left mb-14 ">
                    <h3 className="text-3xl font-semibold capitalize">
                      work experience
                    </h3>
                    <span className="text-sm font-bold track uppercase text-gray-600">
                      highlighted work experience
                    </span>
                  </div>
                </div>

                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                  <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-gray-700">
                      <h3 className="text-xl font-semibold">
                        IT Specialist |{" "}
                        <strong>University of Illinois, Chicago</strong>
                      </h3>
                      <time className="text-xs uppercase text-gray-600">
                        Chicago, IL | 2022
                      </time>
                      <p className="mt-3">
                        Counseled students in topics such as robotics
                        programming, Linux, Python, web building, biology
                        experiments, Arduino, electronic, and STEM projects to
                        increase students’ engagement by 150%.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-gray-700">
                      <h3 className="text-xl font-semibold tracki">
                        Prototype Engineer | <strong>Beelog Industries</strong>
                      </h3>
                      <time className="text-xs uppercase text-gray-600">
                        Mongolia | 2020 - 2022
                      </time>
                      <p className="mt-3">
                        Designed prototypes in Solidworks, creating 3D models
                        and assemblies, which streamlined the mechanical design
                        process, cutting production time by 80%.
                      </p>
                    </div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-gray-700">
                      <h3 className="text-xl font-semibold tracki">
                        Prototype Developer | <strong>Elec.mn</strong>
                      </h3>
                      <time className="text-xs uppercase text-gray-600">
                        Mongolia | 2019 - 2020
                      </time>
                      <p className="mt-3">
                        Designed PCBs for prototypes using Proteus Lab and
                        EasyEDA, contributing to the company’s portfolio and
                        leading to a 30% increase in customer engagement.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </InView>
  );
}
