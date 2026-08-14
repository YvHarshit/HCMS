import { LocalHospital } from "@mui/icons-material";
import Image from "next/image";

export default function AuthSideImage() {
    return (
       
    <div className="relative w-full h-full">
      <Image
        src="/h5.jpg"
        alt="reception"
        loading="eager"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
        className="object-cover brightness-100  saturate-200"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-900/90 pointer-events-none" />
      <div className="relative z-10 flex flex-col h-full px-22 text-white">
        <div className="flex-1"> </div>
        <div className="flex-1 flex-col items-center gap-5 mt-12">
          <h3 className="text-3xl font-bold flex gap-4 items-center">
            <LocalHospital
              fontSize="large"
              className="text-blue-700 bg-white rounded text-center"
            />{" "}
            City General Hospital
          </h3>
          <h2 className="text-6xl mt-5 font-semibold">
            {" "}
            Welcome to Your <br />
            Health Journey
          </h2>
          <p className="text-xl mt-[4rem] hidden lg:block">
            {" "}
            Securely access your medicial Records, schedule appointments,
            and connects with <br /> your care team in centralized
            portal{" "}
          </p>
        </div>
      </div>
    </div>
    )
}
      