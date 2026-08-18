import LandingPageNavbar from "@/components/landingPage/LandingPageNavbar";
import { Brain, Computer, Eye, Goal, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div>

      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">  <LandingPageNavbar />  </nav>

      <div className="relative h-[calc(100dvh-5rem)] w-full overflow-hidden">
        <Image src="/h2.jpg" alt="bg-hospital" fill className="object-cover blur-xs brightness-100" priority />
       
        <div className="relative z-10 flex h-full items-center justify-center px-22 text-white mt-[1/2dvh]">
            <div className="flex flex-col items-center gap-5">
              <h2 className="text-7xl font-bold "> City General Hospital</h2>
              <p className=" text-2xl"> Defining the Future of Clinical Excellence. </p>
            </div>
        </div>
        
      </div>

        <div className="flex gap-4 my-12 mx-18">
            <div className="p-4 border flex-1 hover:bg-blue-600 hover:text-white transition duration-300 rounded-lg">
                <h2 className="text-3xl flex gap-4 items-center mb-3 font-semibold"> <Goal/>  Our Mission </h2>
                <p className="text-xl"> At <b> City General Hospital</b>, we believe that exceptional healthcare starts with precision. <br/>
                    Our multidisciplinary teams leverage cutting-edge diagnostic technology and evidence-based treatments to ensure 
                    every patient receives personalized, accurate, and gentle care. <br/> From routine check-ups to complex surgical procedures,
                     our promise is simple: <br/> clinical rigor without sacrificing warmth and empathy.</p>
            </div>
            <div className="p-4 border flex-1 hover:bg-blue-600 hover:text-white rounded-lg">
                <h2 className="text-3xl flex gap-4 items-center mb-3 font-semibold"> <Eye/>  Our Vision </h2>
                <p className="text-xl"> To cultivate healthier communities by delivering trusted, world-class medical <br/>
                    care where every patient receives precise diagnosis, seamless treatment, and genuine human connection. </p>
            </div>            
        </div>

        <div className="flex gap-4 my-12 mx-18">
            <div className="flex-1 p-2">
                <h2 className="text-4xl font-semibold mb-4"> A Legacy Of Care </h2>
                <p className="text-xl px-2">  Established in 1985, City General Hospital began as a modest community clinic. 
                    Through decades of relentless commitment to medical advancement and patient well-being, we have evolved into 
                    a premier regional medical center. <br/> <br/>
                    Our journey is defined by a continuous pursuit of excellence :— <br/>integrating the sterile efficiency of modern medical 
                    technology with the approachable, human-centric care that remains our cornerstone. </p>

            </div>
            <div className="relative flex-1 w-full h-[400px]">
            <Image src="/h3.jpg" alt="photo" fill className="rounded-lg  object-cover"/>
            </div>

        </div>

        <div className="my-12 mx-18">
            <h2 className="text-4xl font-semibold mb-3 w-max"> Our Core Values : </h2>
            <ul className="list-disc list-inside space-y-2"> 
                <li className="text-xl"> <b>Clinical Precision:</b> Adhering to the highest medical protocols to deliver accurate diagnoses and accurate treatments. </li>
                <li className="text-xl"> <b> Patient-Centric Care:</b> Designing every treatment plan around the physical, emotional, and psychological comfort of the individual. </li>
                <li className="text-xl"> <b> Integrity & Trust:</b> Maintaining complete transparency in medical communication, medical ethics, and treatment plans. </li>
                <li className="text-xl"> <b> Continuous Innovation:</b> Embracing state-of-the-art diagnostic and surgical technology to improve recovery times and outcomes. </li>
            </ul>
        </div>

        <footer className="my-12 mx-18 py-4 px-4 bg-blue-200/20 rounded-lg">
            <h2 className="text-4xl text-center my-5 font-semibold"> Why Choose City General Hospital ? </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col gap-3 border p-3 bg-white rounded">
                    <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 mx-2"> <ShieldCheck className="w-6 h-6 text-blue-900"/> </span>
                    <h2 className="text-3xl"> Clinical Excellence </h2>
                    <p className="text-xl"> Our multidisciplinary teams adhere to the highest standards of evidence-based medicine,
                        ensuring precise diagnoses and effective treatments.</p>
                </div>              
            

                <div className="flex flex-col gap-3 border p-3 bg-white rounded">
                    <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 mx-2"> <Brain className="text-xl"/> </span>
                    <h2 className="text-3xl"> Patient-Centric Care </h2>
                    <p className="text-xl"> We design every interaction to reduce cognitive load 
                        and emotional fatigue, providing a calm, supportive environment for healing.</p>
                </div>              

                <div className="flex flex-col gap-3 border p-3 bg-white rounded">
                    <span className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3 mx-2"> <Computer className="text-xl"/> </span>
                    <h2 className="text-3xl"> Advanced Technology </h2>
                    <p className="text-xl"> Equipped with state-of-the-art diagnostic and surgical tools, 
                        our facilities represent the forefront of modern medical infrastructure.</p>
                </div>              
            </div>

        </footer>
    </div>
  );
}
