import MetricCard from "@/shared/Card"
import { AddHome, NoteAdd } from "@mui/icons-material"
import { BookAIcon, Calendar } from "lucide-react"

export default function InfoCards() {
  const cardData = [
    {
      icon: <Calendar fontSize="large" className="text-blue-600" />,
      quantity: 12,
      description: "Today's Appointments",
    },
    {
      icon: <NoteAdd fontSize="large" className="text-amber-600" />,
      quantity: 5,
      description: "Prescription Required",
    },
    {
      icon: <AddHome fontSize="large" className="text-emerald-600" />,
      quantity: 3,
      description: "New Consultations",
    },
    {
      icon: <BookAIcon fontSize="large" className="text-purple-600" />,
      quantity: 12,
      description: "Total Patients",
    },
  ]

  return (
    <div className="mt-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {cardData.map((card, index) => (
          <MetricCard
            key={index}
            icon={card.icon}
            quantity={card.quantity}
            description={card.description}
          />
        ))}
      </div>
    </div>
  )
}