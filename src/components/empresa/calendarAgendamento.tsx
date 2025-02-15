"use client"

import { Calendar } from "@/components/ui/calendar"

type Props = {
    date: Date | undefined;
    setDate: any;
}

export function CalendarAgendamento({ date, setDate }: Props) {
    const blockedDates = [
        new Date(2025, 1, 20), // 20 de Fevereiro de 2025
        new Date(2025, 1, 25), // 25 de Fevereiro de 2025
    ];

    return (
        <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border shadow"
            disabled={(date) => {
                const hoje = new Date();
                hoje.setHours(0, 0, 0, 0);

                const isBeforeToday = date < hoje;
                const isSunday = date.getDay() === 0; // 0 representa domingo

                return isBeforeToday || isSunday;
            }}
            footer={date ? (
                <p className="font-bold pt-1">
                  Data selecionada: <span className="text-blue-500">{date.toLocaleDateString()}</span>
                </p>
              ) : (
                <p className="font-bold text-red-500">⚠ Selecione uma data!</p>
              )}
              
        />
    )
}
