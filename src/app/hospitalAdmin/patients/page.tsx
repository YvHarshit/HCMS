
"use client";

import { Patient } from "@/app/types/patient.types";
import { useEffect, useState } from "react";

export default function Patients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPatients() {
      try {
        const response = await fetch("/api/patients");

        const result = await response.json();

        if (result.success) {
          setPatients(result.data);
        }
      } catch (error) {
        console.error("Failed to fetch patients:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPatients();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6">
        Patients
      </h1>

      <div className="mb-6">
        <p className="text-lg font-medium">
          Total Number of Patients in Hospital:{" "}
          <span className="text-blue-600">
            {patients.length}
          </span>
        </p>
      </div>

      {loading ? (
        <p>Loading patients...</p>
      ) : patients.length === 0 ? (
        <p>No patients found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-3 text-left">#</th>
                <th className="border px-4 py-3 text-left">
                  Name
                </th>
                <th className="border px-4 py-3 text-left">
                  Email
                </th>
                <th className="border px-4 py-3 text-left">
                  Phone
                </th>
                <th className="border px-4 py-3 text-left">
                  Date of Birth
                </th>
                <th className="border px-4 py-3 text-left">
                  Gender
                </th>
                <th className="border px-4 py-3 text-left">
                  Address
                </th>
              </tr>
            </thead>

            <tbody>
              {patients.map((patient, index) => (
                <tr
                  key={patient._id}
                  className="hover:bg-gray-50"
                >
                  <td className="border px-4 py-3">
                    {index + 1}
                  </td>

                  <td className="border px-4 py-3">
                    {patient.name}
                  </td>

                  <td className="border px-4 py-3">
                    {patient.email}
                  </td>

                  <td className="border px-4 py-3">
                    {patient.phone}
                  </td>

                  <td className="border px-4 py-3">
                    {patient.dateOfBirth
                      ? new Date(
                          patient.dateOfBirth
                        ).toLocaleDateString("en-GB")
                      : "-"}
                  </td>

                  <td className="border px-4 py-3 capitalize">
                    {patient.gender || "-"}
                  </td>

                  <td className="border px-4 py-3">
                    {patient.address || "-"}
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