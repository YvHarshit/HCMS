import { PatientSidebar } from "@/components/patient/PatientSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";



export default function PatientLAyout({children} : {children: React.ReactNode}) {
    return (
        <SidebarProvider defaultOpen={false}>
        <PatientSidebar />
        
         <main className="flex-1 bg-blue-200/20">    

          {children}
         </main>
    </SidebarProvider>
    );
}