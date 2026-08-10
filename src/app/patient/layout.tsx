import PatientNavbar from "@/components/patient/PatientNavbar";
import { PatientSidebar } from "@/components/patient/PatientSidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";



export default function PatientLayout({children}: {children: React.ReactNode;}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <PatientSidebar />

      <SidebarInset>
        <PatientNavbar />

        <main className="flex-1 bg-blue-200/20">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}