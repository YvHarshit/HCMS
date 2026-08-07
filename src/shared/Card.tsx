import React from "react"

interface MetricCardProps {
  icon?: React.ReactNode
  quantity?: string | number
  description?: string
  className?: string
}

export default function MetricCard({icon, quantity, description, className = ""}: MetricCardProps) {
  return (
    <div className={`flex flex-col gap-2 bg-white border border-slate-200 p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow ${className}`}>
     
      {icon && ( <div> {icon} </div>)}

      <span className="text-4xl font-bold text-slate-900 tracking-tight mt-1"> {quantity} </span>

      <span className="text-lg font-medium"> {description} </span>
      
    </div>
  )
}