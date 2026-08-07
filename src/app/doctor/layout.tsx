import DoctorNavbar from "@/components/doctor/DoctorNavbar";
import { DoctorSidebar } from "@/components/doctor/DoctorSidebar";
import {SidebarProvider, SidebarInset} from "@/components/ui/sidebar";

export default function DoctorLayout({children}: {children: React.ReactNode}) {
  return (
    
    <SidebarProvider defaultOpen={false}>
      <DoctorSidebar />

      <SidebarInset>
        <DoctorNavbar />

        <div className="min-h-screen bg-blue-200/20 p-6">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
    
  );
}