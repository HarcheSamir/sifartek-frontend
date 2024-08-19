import Navbar from "../components/Navbar";
// import Hero from "./CustomizableSections/Hero";
import Hero from './CustomizableSections/Hero.customizable'
import Rooms from './CustomizableSections/Rooms.customizable'
import HomeAmbience from './CustomizableSections/HomeAmbience.customizable'
import ParallaxOne from './CustomizableSections/Parralax.customizable'
import Best from './CustomizableSections/Best.Customizable'
import Instagram from "./CustomizableSections/Instagram";
import Footer from "./CustomizableSections/Footer";
import useContentStore from "../stores/contentStore";
import React from "react";
export default function Home() {
  const { fetchContent } = useContentStore()
  React.useEffect(() => { fetchContent() }, [])
  return (
    <main className="flex min-h-screen select-none flex-col ">
      <Navbar />
      <Hero />
      <Rooms />
      <HomeAmbience />
      <ParallaxOne />
      <Best />
      <Instagram />
      <Footer />
    </main>
  );
}
