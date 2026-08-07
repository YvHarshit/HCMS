"use client";

import { usePathname } from "next/navigation";
import { DashboardSidebar } from "@/shared/Sidebar";


import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
const adminMenu = [
  {
    title: "Dashboard",
    url: "/hospitalAdmin",
    icon: DashboardRoundedIcon,
  },
  {
    title: "Doctors",
    url: "/hospitalAdmin/doctors",
    icon: LocalHospitalRoundedIcon,
  },
  {
    title: "Patients",
    url: "/hospitalAdmin/patients",
    icon: PeopleRoundedIcon,
  },
  {
    title: "Analytics",
    url: "/hospitalAdmin/analytics",
    icon: AnalyticsRoundedIcon,
  },
];


export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <DashboardSidebar
      menuItems={adminMenu}
      activeUrl={pathname}
      onLogout={() => console.log("Admin Logout")}
    />
  );
}