"use client";

import StarIcon from '@mui/icons-material/Star';
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
  isApproved: boolean;
  role: string;
}

export default function Doctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const response = await fetch("/api/doctors");

        const result = await response.json();

        if (result.success) {
          setDoctors(result.data);
        }
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
      <h1 className="text-3xl font-semibold mb-6">  Doctors Listed : </h1>

      <div className="mb-6">
        <p className="text-lg font-medium"> Total Number of Doctors:{" "}
          <span className="text-blue-700"> {doctors.length} </span>
        </p>
      </div>

      {loading ? ( <p>Loading doctors...</p> ) : doctors.length === 0 ? ( <p>No doctors found.</p> ) 
      : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-3 text-left"> # </th>
                <th className="border px-4 py-3 text-left">  Name  </th>
                <th className="border px-4 py-3 text-left"> Email </th>
                <th className="border px-4 py-3 text-left">  Phone </th>
                <th className="border px-4 py-3 text-left"> Specialization </th>
                <th className="border px-4 py-3 text-left"> Qualification </th>
                <th className="border px-4 py-3 text-left"> Experience </th>
                <th className="border px-4 py-3 text-left"> Consultation Fee </th>
                <th className="border px-4 py-3 text-left"> Rating </th>
                <th className="border px-4 py-3 text-left"> Status </th>
              </tr>
            </thead>

            <tbody>
              {doctors.map((doctor, index) => (
                <tr key={doctor._id} className="hover:bg-gray-50">
                  <td className="border px-4 py-3"> {index + 1} </td>
                  <td className="border px-4 py-3 font-medium"> {doctor.name} </td>
                  <td className="border px-4 py-3"> {doctor.email} </td>
                  <td className="border px-4 py-3"> {doctor.phone} </td>
                  <td className="border px-4 py-3"> {doctor.specialization} </td>
                  <td className="border px-4 py-3"> {doctor.qualification} </td>
                  <td className="border px-4 py-3"> {doctor.experience} years </td>
                  <td className="border px-4 py-3"> ₹{doctor.consultationFee} </td>
                  <td className="border px-4 py-3 font-semibold">
                    <StarIcon className='text-yellow-400'/> {doctor.rating} <span className="text-gray-500 ml-1"> ({doctor.totalReviews})
                    </span>
                  </td>

                  <td className="border px-4 py-3"> {doctor.isApproved ? (
                      <span className="text-green-600 font-medium"> Approved </span>
                    ) : (
                      <span className="text-yellow-600 text-lg font-semibold"> Pending </span>
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