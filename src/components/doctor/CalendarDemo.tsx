"use client"

import * as React from "react"
import { Calendar } from "@/components/ui/calendar"

export default function CalendarDemo() {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-[300px] w-full border rounded-lg" />
  }

  return (
    <Calendar
      mode="single"
      selected={new Date()}
      className="rounded-lg border pointer-events-none select-none w-[400px]"
    />
  )
}