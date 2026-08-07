import PersonAddAlt1RoundedIcon from "@mui/icons-material/PersonAddAlt1Rounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import AttachMoneyRoundedIcon from "@mui/icons-material/AttachMoneyRounded";
import MetricCard from "@/shared/Card";

export const adminCards = [
  {
    title: "Total Doctors",
    quantity: "124",
    icon: PersonAddAlt1RoundedIcon,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Pending Verifications",
    quantity: "12",
    icon: AssignmentTurnedInRoundedIcon,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
    className: "bg-red-50",
  },
  {
    title: "Total Patients",
    quantity: "1,450",
    icon: GroupsRoundedIcon,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Revenue (MTD)",
    quantity: "$45.2k",
    icon: AttachMoneyRoundedIcon,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
];


export default function AdminCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {adminCards.map((card) => (
        <MetricCard
          key={card.title}
          quantity={card.quantity}
          className={card.className}
          icon={
            <div className="flex items-center justify-between">
              <span className="text-xl font-medium"> {card.title} </span>

              <div className={`rounded-full p-2 ${card.iconBg}`}>
                <card.icon className={card.iconColor} />
              </div>
            </div>
          }
        />
      ))}
    </div>
  );
}


