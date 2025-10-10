

import Cybersecurity from './Cybersecurity';
import AISkills from './AISkills';
import FrontendBackend from './FrontendBackend';
import LogoDesign from './LogoDesign';
import Hero from "./Hero";
import Portfolio from "./Portfolio";
import Process from "./Process";
import Skills from "./Skills";
import Pricing from "./Pricing";
import Blog from "./Blog";

export default function HomeCom() {
  return (
    <div>
      <Hero />
      <Portfolio />
      <FrontendBackend />
      <AISkills />
      <Cybersecurity />
      <LogoDesign />
      <Process />
      <Skills />
      <Pricing />
      <Blog /> 
    </div>
  );
}