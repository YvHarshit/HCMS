import AdminSidebar from "@/components/hospitalAdmin/hospitalAdminSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";




export default function AdminLayout({children} : {children: React.ReactNode}) {
    return (
        <SidebarProvider defaultOpen={false}>
        <AdminSidebar />
        
         <main className="flex-1 bg-blue-200/20">   
          {children}
         </main>
    </SidebarProvider>
    );
}