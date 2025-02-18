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
    onChange: (value: string) => void;
    selectFilter: string;
}

export function SelectFilterBarbearia({ onChange, selectFilter }: Props) {
    return (
        <Select onValueChange={onChange} defaultValue={selectFilter}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrar busca" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Barbearias</SelectLabel>
                    <SelectItem value="proximas">Próximas</SelectItem>
                    <SelectItem value="todas">Todas</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
