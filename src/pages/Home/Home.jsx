import Navbar from "../../components/Navbar";
import Hero from "./sections/Hero";
import Rooms from "./sections/Rooms";
import HomeAmbience from "./sections/HomeAmbience";
import ParallaxOne from "./sections/ParallaxOne";
import Best from "./sections/Best";
import Instagram from "./sections/Instagram";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen select-none flex-col ">
      <Navbar/>
      <Hero/>
      <Rooms/>
      <HomeAmbience/>
      <ParallaxOne/>
      <Best/>
      <Instagram/>
      <Footer/>
    </main>
  );
}
