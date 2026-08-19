"use client";

import Link from "next/link";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ShareIcon from "@mui/icons-material/Share";
import PublicIcon from "@mui/icons-material/Public";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import SupportAgentOutlinedIcon from "@mui/icons-material/SupportAgentOutlined";
import { MailCheckIcon } from "lucide-react";

export default function LandingPageFooter() {
  return (
    <footer className="bg-[#2f3338] text-gray-300">
      <div className="mx-auto  px-12 py-12">
       
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          <div>
            <div className="flex items-center gap-3">
              <LocalHospitalIcon className="text-blue-400" />
              <h2 className="text-3xl font-bold text-white">
                City General Hospital
              </h2>
            </div>

            <p className="mt-5 leading-7 text-gray-400">
              Advanced clinical management systems for modern healthcare
              facilities. Precision, security, and care combined.
            </p>

            <div className="mt-6 flex gap-5">
              <ShareIcon className="cursor-pointer hover:text-blue-400" />
              <MailCheckIcon className="cursor-pointer hover:text-blue-400" />
              <PublicIcon className="cursor-pointer hover:text-blue-400" />
            </div>
          </div>

         
          <div>
            <h3 className="ml-1 mb-5 text-xl text-white">
              Patients
            </h3>

            <ul className="space-y-4">
              <li><Link href="#">Find a Doctor</Link></li>
              <li><Link href="#">Book Appointment</Link></li>
              <li><Link href="#">Patient Portal Guide</Link></li>
              <li><Link href="#">Billing & Insurance</Link></li>
            </ul>
          </div>

         
          <div>
            <h3 className="ml-1 mb-5 text-xl text-white">
              Providers
            </h3>

            <ul className="space-y-4">
              <li><Link href="#">HCMS Login</Link></li>
              <li><Link href="#">Clinical Resources</Link></li>
              <li><Link href="#">System Status</Link></li>
              <li><Link href="#">Help Center</Link></li>
            </ul>
          </div>

          
          <div>
            <h3 className="ml-2 mb-5 text-xl text-white">
              Contact
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <LocationOnOutlinedIcon className="text-blue-400" />
                <p>
                  123 Medical Center Noida
                  <br />
                  Noida District, 201013
                </p>
              </div>

              <div className="flex gap-3">
                <PhoneOutlinedIcon className="text-blue-400" />
                <p> 9874589687 </p>
              </div>

              <div className="flex gap-3">
                <SupportAgentOutlinedIcon className="text-blue-400" />
                <p>support@citygeneral.in </p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="my-10 border-t border-gray-600" />

        
        <div className="flex flex-col items-center justify-between gap-5 text-sm text-gray-400 md:flex-row">
          <p>
            @ 2026 City General Healthcare Management Systems. <br/>All rights
            reserved.
          </p>

          <div className="flex gap-8">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">HIPAA Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}