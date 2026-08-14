"use client";
import { Calendar, FileText, Home, MessageSquare, Pill, Settings} from "lucide-react"
import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar"
import Link from "next/link"
import { AddCircleRounded, FavoriteRounded, HelpOutlineRounded, LogoutRounded } from "@mui/icons-material"
import { useRouter } from "next/navigation";

const navItems = [
  { title: "Dashboard", url: "/patient", icon: Home },
  { title: "Appointments", url: "/patient/appointments", icon: Calendar },
  { title: "Medical Records", url: "/patient/records", icon: FileText },
  { title: "Prescriptions", url: "/patient/prescriptions", icon: Pill },
  { title: "Settings", url: "/patient/settings", icon: Settings },
]

export function PatientSidebar() {
  const router = useRouter()
  return (
    <Sidebar>                                                 
      <SidebarHeader className="border-b px-5 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 text-green-600">
            <FavoriteRounded fontSize="large" />
          </div>

          <div>
            <h2 className="text-lg font-bold text-xl text-green-700"> Patient Portal </h2>
            <p className="text-md text-gray-500"> Health Services </p>
          </div>
        </div>

        <button onClick={()=> router.push("/patient/bookAppointment") }
        className="mt-6 flex w-full items-center justify-center cursor-pointer gap-2 rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700">
          <AddCircleRounded fontSize="large" />
          <p className="text-lg"> Book Appointment </p>
        </button>
      </SidebarHeader>

    
      <SidebarContent className="px-4 py-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`h-14 rounded-xl items-center`}>
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon fontSize="large" />
                      <span className="text-lg"> {item.title}  </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

     
      <SidebarFooter className="border-t px-3 py-7 mb-5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link href="/support"  className="flex items-center gap-3">
                <HelpOutlineRounded fontSize="medium" />
                <span className="text-lg">  Support </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => console.log("Patient logout")} className="text-red-500 hover:bg-red-50">
              <LogoutRounded fontSize="medium" />
              <span className="text-lg">  Logout  </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
 