import FrontendBackend from '../components/FrontendBackend';


import LogoDesign from '../components/LogoDesign';
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import Skills from "@/components/Skills";
import Pricing from "@/components/Pricing";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <FrontendBackend />
      <LogoDesign />
      <Process />
      <Skills />
      <Pricing />
      <Blog />
      <Footer />
    </div>
  );
}