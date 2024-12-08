import Image from "next/image";
import Header from "../components/header/Header";
import HeroSection from "@/components/herosection/HeroSection";
import AboutSection from "@/components/aboutsection/AboutSection";
import AboutBottomImage from "@/components/aboutsection/aboutbottomimage/AboutBottomImage";
import Portfolio from "@/components/portfolio/Portfolio";
import Services from "@/components/services/Services";
import Testimonals from "@/components/testimonals/Testimonals";
import ContactMe from "@/components/contact-me/ContactMe";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
   <>
   
    <Header/>
    <HeroSection/>
    <AboutSection/>
    <AboutBottomImage/>
    <Portfolio/>
    <Services/>
    <Testimonals/>
    <ContactMe/>
    <Footer/>
   
   </>
    
   
  );
}
