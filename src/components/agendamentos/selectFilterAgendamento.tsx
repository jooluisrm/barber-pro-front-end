"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type Props = {
    selectFilter: string;
    onChange: (value: string) => void;
}

export function SelectFilterAgendamento({ selectFilter, onChange }: Props) {
    return (
        // ATUALIZADO: Usando 'value' em vez de 'defaultValue'
        <Select onValueChange={onChange} value={selectFilter}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar Agendamentos" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Filtros</SelectLabel>
                    {/* ATUALIZADO: Usando os valores da nova API */}
                    <SelectItem value="futuros">Próximos</SelectItem>
                    <SelectItem value="passados">Histórico</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}