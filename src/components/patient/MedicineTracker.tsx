"use client";

import { Button } from "@/components/ui/button";
import { Clock3, Pill, SquarePlus, Check } from "lucide-react";

const medicines = [
  {
    id: 1,
    name: "Amoxicillin",
    dosage: "500mg • With food",
    time: "8:00 AM",
    taken: true,
  },
  {
    id: 2,
    name: "Vitamin D",
    dosage: "1000 IU",
    time: "1:00 PM",
    taken: false,
  },
  {
    id: 3,
    name: "Biotin",
    dosage: "100mg",
    time: "9:00 PM",
    taken: true,
  },
];

export default function MedicineTracker() {
  return (
    <div className="rounded-xl border bg-white shadow-sm">
      
      <div className="border-b p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100">
            <Clock3 className="h-8 w-8 text-blue-600" />
          </div>

          <div>
            <h2 className="text-2xl font-bold">Medicine Tracker</h2>
            <p className="text-md text-muted-foreground"> Today's Schedule  </p>
          </div>
        </div>
      </div>

      
      <div>
        {medicines.map((medicine, index) => (
          <div
            key={medicine.id}
            className={`flex items-center justify-between p-6 ${
              index !== medicines.length - 1 && "border-b" }`}>
          
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gray-100 border">               
                  <Pill className="h-6 w-6 text-gray-600" />               
              </div>

              <div>
                <h3 className="font-semibold text-lg"> {medicine.name} </h3>
                <p className="text-lg text-muted-foreground"> {medicine.dosage} </p>
                <p className="mt-1 text-md font-medium text-blue-600"> {medicine.time} </p>
              </div>
            </div>

           
            <div className="flex gap-3">
              <Button variant="outline" className="min-w-24 text-lg"> Missed </Button>

              {medicine.taken ? (
                <Button className="min-w-28 bg-emerald-500 hover:bg-emerald-600  text-lg">
                  <Check className="mr-2 h-4 w-4 text-lg" /> Taken
                </Button>
              ) : (
                <Button className="min-w-32 text-lg"> Mark Taken </Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}