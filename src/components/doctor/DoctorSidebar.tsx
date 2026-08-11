"use client";

import Link from "next/link";
import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";

import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const menuItems = [
  {
    title: "Dashboard",
    url: "/doctor",
    icon: DashboardRoundedIcon,
  },
  {
    title: "Appointments",
    url: "/doctor/appointments",
    icon: CalendarMonthRoundedIcon,
  },
  {
    title: "Patients",
    url: "/doctor/patients",
    icon: GroupsRoundedIcon,
  },
  {
    title: "Analytics",
    url: "/doctor/analytics",
    icon: AnalyticsRoundedIcon,
  },
];

export function DoctorSidebar() {
  return (
    <Sidebar className="border-r bg-white">
      
      <SidebarHeader className="border-b px-5 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <LocalHospitalRoundedIcon fontSize="large"/>
          </div>

          <div>
            <h2 className="font-bold text-lg text-blue-700">City General</h2>

            <p className="text-xs text-gray-500">Medical Center</p>
          </div>
        </div>

        {/* <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white transition hover:bg-blue-700">
          <AddRoundedIcon fontSize="medium" />
          New Consultation
        </button> */}
      </SidebarHeader>

     
      <SidebarContent className="px-4 py-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={`h-18 rounded-xl ${
                      index === 0 ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100" }`
                      }>
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon fontSize="medium" />
                      <span className="text-lg">{item.title}</span>
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
              <Link href="/support" className="flex items-center gap-3">
                <HelpOutlineRoundedIcon fontSize="medium" />
                 <span className="text-lg"> Support </span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => console.log("logout")}
              className="text-red-500 hover:bg-red-50">
              <LogoutRoundedIcon fontSize="medium" />
              <span className="text-lg">Logout</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

                     