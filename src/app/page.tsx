import LandingPageNavbar from "@/components/landingPage/LandingPageNavbar";
import HeroSection from "@/components/landingPage/LandingPageHero";
import LandingPageFooter from "@/components/landingPage/LandingPageFooter";
import LandingPageContent from "@/components/landingPage/LandingPageContent";

export default function Home() {
  return (    
  <div> 
   <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
    <LandingPageNavbar/>    
   </nav>
   
   <div className="mt-2 p-8">
   <HeroSection/>
   </div>

   <div>
    <LandingPageContent/>
   </div>

   <div>
    <LandingPageFooter/>
   </div>


</div>  
  );
}
