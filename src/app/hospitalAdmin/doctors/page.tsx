"use client";

import StarIcon from "@mui/icons-material/Star";
import { useEffect, useState } from "react";

interface Doctor {
  _id: string;
  name: string;
  email: string;
  phone: string;
  specialization: string;
  qualification: string;
  experience: number;
  consultationFee: number;
  rating: number;
  totalReviews: number;
  status: "pending" | "approved" | "rejected";
  role: string;
}

export default function Doctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);


  const handleStatusChange = async (doctorId: string, status: "approved" | "rejected") => {
    try {
      const response = await fetch(`/api/doctors/${doctorId}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({status}),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Failed to update doctor status");
        return;
      }    
    setDoctors((previousDoctors) => previousDoctors.map((doctor) => doctor._id === doctorId ? {...doctor,status: status} : doctor));
    } catch (error) {
      console.error("Status Update Error:", error);
      alert("Something went wrong");
    }
  };


  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await fetch("http://localhost:3000/api/doctors");
        const result = await response.json();

        if (result.success)  setDoctors(result.doctors); 
      } catch (error) {
        console.error("Failed to fetch doctors:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchDoctors();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-semibold mb-6">
        Doctors Listed
      </h1>

      <div className="mb-6">
        <p className="text-lg font-medium">
          Total Number of Doctors:{" "}
          <span className="text-blue-700">
            {doctors.length}
          </span>
        </p>
      </div>

      {loading ? (
        <p>Loading doctors...</p>
      ) : doctors.length === 0 ? (
        <p>No doctors found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-3 text-left"> S.No. </th>
                <th className="border px-4 py-3 text-left"> Name </th>
                <th className="border px-4 py-3 text-left">  Email </th>
                <th className="border px-4 py-3 text-left"> Phone </th>
                <th className="border px-4 py-3 text-left"> Specialization </th>
                <th className="border px-4 py-3 text-left"> Qualification </th>
                <th className="border px-4 py-3 text-left"> Experience </th>
                <th className="border px-4 py-3 text-left"> Consultation Fee </th>
                <th className="border px-4 py-3 text-left">  Rating </th>
                <th className="border px-4 py-3 text-left"> Status </th>
                <th className="border px-4 py-3 text-left"> Actions </th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={doctor._id} className="hover:bg-gray-50" >
                  <td className="border px-4 py-3"> {index + 1} </td>
                  <td className="border px-4 py-3 font-medium">  {doctor.name} </td>
                  <td className="border px-4 py-3"> {doctor.email} </td>
                  <td className="border px-4 py-3"> {doctor.phone} </td>
                  <td className="border px-4 py-3"> {doctor.specialization} </td>
                  <td className="border px-4 py-3"> {doctor.qualification} </td>
                  <td className="border px-4 py-3"> {doctor.experience} years </td>
                  <td className="border px-4 py-3">  ₹ {doctor.consultationFee} </td>
                  <td className="border px-4 py-3 font-semibold">
                    <div className="flex items-center gap-1"> <StarIcon className="text-yellow-400" /> {doctor.rating}
                      <span className="text-gray-500 ml-1"> ({doctor.totalReviews}) </span>
                    </div>
                  </td>

                  {/* STATUS */}
                  <td className="border px-4 py-3"> <span
                      className={`px-4 py-2 rounded text-sm font-semibold uppercase ${
                        doctor.status === "approved"
                          ? "bg-green-200 text-green-900"
                          : doctor.status === "rejected"
                          ? "bg-red-100 text-red-800"
                          : "bg-yellow-300 text-yellow-800" }`} >
                      {doctor.status} </span>
                  </td>

                  {/* ACTIONS */}
                  <td className="border px-4 py-3">
                    {doctor.status === "pending" ? (
                      <div className="flex gap-2">

                        <button onClick={() => handleStatusChange( doctor._id, "approved")}
                          className="px-3 py-2 rounded bg-green-600 text-white hover:bg-green-700">
                          Approve
                        </button>

                        <button onClick={() => handleStatusChange(doctor._id, "rejected")}
                          className="px-3 py-2 rounded bg-red-600 text-white hover:bg-red-700">
                          Reject
                        </button>

                      </div>
                    ) : (
                      <span className="text-gray-500 text-md">
                        No action required
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}