import { LocalHospitalRounded } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";

export default function login() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            <Image src="/h2.jpg" alt="photo" fill className="object-cover blur-sm brightness-90" priority />

                <Link href="/" className="absolute top-8 left-22 z-20 flex w-max items-center gap-4 cursor-pointer">
                        <LocalHospitalRounded fontSize="large" className="text-blue-600" />
                        <span className="text-3xl font-bold text-white"> City General </span>
                    
                </Link>
          

            <div className="relative z-10 flex flex-col justify-center items-center min-h-screen px-4">
                <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white text-center"> You have three options: </h2>
                <div className="flex flex-col gap-4 w-full max-w-md p-7 bg-white rounded-xl">
                    <Link href="/login/patient" className="w-full text-center text-xl bg-blue-100 text-blue-900 py-3 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out shadow-sm">  Login As PATIENT </Link>
                    <Link href="/login/doctor" className="w-full text-center text-xl bg-blue-100 text-blue-900 py-3 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out shadow-sm">  Login As DOCTOR </Link>
                    <Link href="/login/hospitalAdmin" className="w-full text-center text-xl bg-blue-100 text-blue-900 py-3 px-4 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200 ease-in-out shadow-sm">  Login As HOSPITAL ADMIN </Link>

                </div>
            </div>
        </div>

    );
}


 









