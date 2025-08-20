"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

type Props = {
    selectFilter: string;
    onChange: (value: string) => void;
}

export function SelectFilterAgendamento({ selectFilter, onChange }: Props) {
    return (
        <Select onValueChange={onChange} value={selectFilter}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar por Status" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value="Confirmado">Confirmados</SelectItem>
                    <SelectItem value="Feito">Finalizados</SelectItem>
                    <SelectItem value="Cancelado">Cancelados</SelectItem>
                    <SelectItem value="todos">Todos</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}