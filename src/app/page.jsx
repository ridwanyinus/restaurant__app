import Image from "next/image";
import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import SpecialMenu from "./sections/SpecialMenu";
import Story from "./sections/Story";
import Footer from "./sections/Footer";
import Dining from "./sections/Dining";
import Specialties from "./sections/Specialties";

export default function Home() {
  return (
    <section>
      <Nav />
      <Hero />
      <SpecialMenu />
      <Specialties />
      <Story />
      <Footer />
      <Dining />
    </section>
  );
}
