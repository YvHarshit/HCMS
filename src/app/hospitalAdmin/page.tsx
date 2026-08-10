import AdminCards from "@/components/hospitalAdmin/hospitalAdminCard";
import AdminApplications from "@/components/hospitalAdmin/hospitalAdminHero";

export default function Page() {
  return (
    <div>

        <div className="px-12 mt-5 flex justify-between items-center"> 
          <div>
            <h2 className="text-3xl font-semibold"> Overview</h2>
            <p className="text-lg text-gray-600">  Hospital operational metric for today.</p>
          </div>

          <div>
            <p className="px-5 py-2 rounded border-2 bg-gray-200/60 text-xl font-semibold"> All time data</p>
          </div>
        </div>
        

        <div className="px-12 mt-5">
            <AdminCards/>
        </div>
        <div className="px-12 mt-5">
            <AdminApplications/>
        </div>

    </div>
  )
}