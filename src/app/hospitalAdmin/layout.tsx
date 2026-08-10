import HospitalAdminNavbar from "@/components/hospitalAdmin/hospitalAdminNavbar";
import AdminSidebar from "@/components/hospitalAdmin/hospitalAdminSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";




export default function AdminLayout({children} : {children: React.ReactNode}) {
    return (
        <SidebarProvider defaultOpen={false}>
        <AdminSidebar />

        <SidebarInset>
            <HospitalAdminNavbar/>
        
         <main className="flex-1 bg-blue-200/20 px-12 py-12">   
          {children}
         </main>
        </SidebarInset>
    </SidebarProvider>
    );
}