"use client";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import { motion, useCycle } from "framer-motion";
import Link from "next/link";
import {
  Rubik_Bubbles,
  Rubik_Burned,
  Rubik_Dirt,
  Rubik_Distressed,
  Rubik_Gemstones,
  Rubik_Glitch,
  Rubik_Iso,
  Rubik_Marker_Hatch,
  Rubik_Maze,
  Rubik_Microbe,
  Rubik_Mono_One,
  Rubik_Moonrocks,
  Rubik_Wet_Paint,
  Rubik_Spray_Paint,
  Ruda,
  Rubik_Pixels,
  Zen_Maru_Gothic,
  Rubik_Storm,
  Poppins,
  Shadows_Into_Light,
  Shadows_Into_Light_Two,
  Vast_Shadow,
  Merienda,
  Raleway_Dots,
  Kenia,
  Carter_One,
  Ultra,
  Bungee_Hairline,
  Bungee_Inline,
  Nabla,
} from "next/font/google";
import { GeistMono } from "geist/font/mono";
import { useEffect } from "react";
import { GeistSans } from "geist/font/sans";

// const nabla = Nabla({
//   subsets: ["latin"],
//   weight: "400",
// });
// const railway = Raleway_Dots({
//   subsets: ["latin"],
//   weight: "400",
// });

// const bungee_Hairline = Bungee_Hairline({
//   subsets: ["latin"],
//   weight: "400",
// });
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: "400",
// });
const rubik_Wet_Paint = Rubik_Wet_Paint({
  subsets: ["latin"],
  weight: "400",
});
const rubik_Glitch = Rubik_Glitch({
  subsets: ["latin"],
  weight: "400",
});
// const rubik_Gemstones = Rubik_Gemstones({
//   subsets: ["latin"],
//   weight: "400",
// });
// const rubik_Maze = Rubik_Maze({
//   subsets: ["latin"],
//   weight: "400",
// });
// const rubik_Bubbles = Rubik_Bubbles({
//   subsets: ["latin"],
//   weight: "400",
// });

export default function Hero() {
  const fonts = [
    // railway.className,
    // bungee_Hairline.className,
    // poppins.className,
    rubik_Wet_Paint.className,
    // rubik_Bubbles.className,
    rubik_Glitch.className,
    // rubik_Gemstones.className,
    // rubik_Maze.className,
  ];
  const [font, cycleFont] = useCycle(...fonts);

  useEffect(() => {
    const interval = setInterval(() => {
      cycleFont();
    }, 1000);

    return () => clearInterval(interval);
  }, [cycleFont]);
  return (
    <>
      <section className="lg:h-screen">
        <div className="flex flex-col justify-center lg:flex-row items-center ">
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ x: -100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                // transition={{ duration: 0.5 }}
              >
                <div className="select-none">
                  <Image src="./hero.png" width={700} height={300} alt="Hero" />
                </div>
              </motion.div>
            )}
          </InView>
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial={{ x: 100, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                // transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:mr-10 sm:mr-10 w-min my-10">
                  <div className="text-xs lg:text-3xl md:text-2xl sm:text-xs">
                    Welcome to our website
                  </div>
                  <div className="text-6xl lg:text-9xl md:text-7xl sm:text-5xl">
                    <motion.h1 className={font}>Big Brain</motion.h1>
                  </div>
                  <div className="flex text-xs lg:text-3xl md:text-2xl sm:text-xs justify-end">
                    Club at De Anza College
                  </div>

                  <div className="text-body-color dark:text-dark-6 hover:border-gray-900 hover:bg-gray-300 inline-block rounded-full border-2 dark:border-dark-3 py-[10px] px-7 text-xl font-medium transition hover:text-gray-900 mt-5 border-2 flex justify-center w-max">
                    <Link
                      href={"https://discord.gg/r4KsKrGzdT"}
                      target="_blank"
                    >
                      Join Our Discord Server
                    </Link>
                  </div>
                  <div className="text-body-color dark:text-dark-6 hover:border-gray-900 hover:bg-gray-300 inline-block rounded-full border-2 dark:border-dark-3 py-[10px] px-7 text-xl font-medium transition hover:text-gray-900 mt-5 border-2 flex justify-center w-max">
                    <Link
                      href={"https://forms.gle/NQhSayK2X331RHjy8"}
                      target="_blank"
                    >
                      Member Sign Up Form
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>
        </div>
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.1 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col items-center max-sm:h-20 mt-10 max-md:hidden">
            <svg
              width="59"
              height="94"
              viewBox="0 0 59 94"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="11.5"
                y="1.5"
                width="37"
                height="77"
                rx="18.5"
                stroke={`gray`}
                stroke-width="3"
              />
              <circle
                cx="29.5"
                cy="40"
                r="7.5"
                fill="gray"
                className="animate-bounce"
              />
            </svg>
            <h1 className="uppercase text-base">scroll</h1>
          </div>
        </motion.div>
      </section>
    </>
  );
}
