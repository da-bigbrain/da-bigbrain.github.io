import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

import HorScroll from "@/components/HScroll";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Timeline from "@/components/Timeline";
import ResponsiveDebug from "@/components/ResponsiveDebug";
import Contact from "@/components/Contact";
import PortfolioCart from "@/components/Projects/PortfolioCart";
import Socials from "@/components/Socials";
import DarkToggle from "@/components/DarkToggle";
import AddToHomeScreenButton from "@/components/AddHome";
import Carousel from "@/components/Carousel";

let prevScrollPos: number = typeof window !== "undefined" ? window.scrollY : 0;

if (typeof window !== "undefined") {
  window.addEventListener("scroll", function () {
    const currentScrollPos: number = window.scrollY;

    const navbar: Element | null = document.querySelector(".navbar");

    if (navbar) {
      if (prevScrollPos > currentScrollPos) {
        navbar.classList.add("show");
      } else {
        navbar.classList.remove("show");
      }
    }

    prevScrollPos = currentScrollPos;
  });
}

export default function Home() {
  return (
    <>
      {/* <ResponsiveDebug /> */}
      {/* <AddToHomeScreenButton /> */}
      <Navbar />
      {/* <DarkToggle /> */}
      <Hero />
      {/* <Timeline /> */}
      {/* <PortfolioCart /> */}
      <HorScroll />
      {/* <Carousel /> */}
      <Contact />
      <Socials />
      {/* <ParticleRing /> */}
      {/* <BouncyCardsFeatures /> */}
    </>
  );
}
