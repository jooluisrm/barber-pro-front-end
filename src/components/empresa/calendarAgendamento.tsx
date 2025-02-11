"use client"

import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

type Props = {
    date: Date | undefined;
    setDate: any;
}

export function CalendarAgendamento({ date, setDate}: Props) {


    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
            disabled={(date) => {
                const hoje = new Date();
                hoje.setHours(0, 0, 0, 0);
                return date < hoje;
            }}
            footer={
                date ? `Data selecionada: ${date.toLocaleDateString()}` : "Pick a day."
              }
        />
    )
}
