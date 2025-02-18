import * as React from "react"

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
        <Select onValueChange={onChange} defaultValue={selectFilter}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar Agendamentos" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Agendamento</SelectLabel>
                    <SelectItem value="proximo">Próximos</SelectItem>
                    <SelectItem value="passado">Todos</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
