"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import { isExternal } from "util/types";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Home");
  const tabs = [
    { name: "Home", link: "/" },
    // { name: "Work", link: "#Work" },
    { name: "Projects", link: "/projects" },
    {
      name: "Join",
      link: "/#join",
    },
  ];

  const [show, setShow] = useState(true);

  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const visible = prevScrollPos > currentScrollPos;

      setShow(visible);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar ${
        show ? "sticky top-2 z-50" : " "
      } flex justify-center`}
    >
      {/* Navbar content */}

      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial={{
              opacity: 0,
              scale: 0.2,
            }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{
              type: "spring",
              duration: 1,
            }}
          >
            <div id="Navbar" className="flex justify-center my-3">
              <div className="flex p-1 bg-black rounded-full dark:bg-gray-300">
                {tabs.map((tab) => (
                  <div
                    key={tab.name}
                    className={`rounded-full ${
                      activeTab === tab.name
                        ? "bg-white text-black dark:bg-gray-700 dark:text-white"
                        : "bg-black text-white dark:bg-gray-300 dark:text-black"
                    }`}
                    onClick={() => setActiveTab(tab.name)}
                  >
                    <Link href={tab.link}>
                      <motion.div
                        whileHover={{ scale: 1.3 }}
                        whileTap={{ opacity: 0.5 }}
                      >
                        <div className="p-4 max-sm:p-3 lg:text-lg md:text-base max-sm:text-sm min-sm:text-lg hover:animate-pulse">
                          {tab.name}
                        </div>
                      </motion.div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </InView>
    </div>
  );
}
