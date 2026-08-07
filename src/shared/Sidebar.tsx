"use client";

import Link from "next/link";
import {Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";

import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { SvgIconComponent } from "@mui/icons-material";
interface SidebarItem {
  title: string;
  url: string;
  icon: SvgIconComponent;
}

interface DashboardSidebarProps {
  menuItems: SidebarItem[];
  activeUrl: string;
  onLogout: () => void;
}

export function DashboardSidebar({
  menuItems,
  activeUrl,
  onLogout,
}: DashboardSidebarProps) {
  return (
    <Sidebar>
     
      <SidebarHeader className="border-b px-5 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <LocalHospitalRoundedIcon fontSize="large" />
          </div>

          <div>
            <h2 className="font-bold text-lg text-blue-700"> City General </h2>
            <p className="text-sm text-gray-500"> Medical Center </p>
          </div>
        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 py-3 text-white text-lg">
          <AddRoundedIcon />
          New Consultation
        </button>
      </SidebarHeader>

      <SidebarContent className="px-4 py-5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    className={`h-14 rounded-xl`}>
                    <Link href={item.url} className="flex items-center gap-3  text-lg">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

 
      <SidebarFooter className="border-t px-3 py-10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link href="/support" className="flex items-center gap-3 text-lg">
                <HelpOutlineRoundedIcon />
                Support
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={onLogout}
              className="text-red-500 hover:bg-red-50 text-lg"
            >
              <LogoutRoundedIcon />
              Logout
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}