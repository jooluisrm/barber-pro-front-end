import { useState } from "react";
import { Horario } from "@/types/type";

type Props = {
    data: Horario;
    selecionarHorario: (hora: string) => void;
    selectHorario: any;
};

export const ItemHorario = ({ data, selecionarHorario, selectHorario }: Props) => {
    const isSelected = data.hora === selectHorario; // Verifica se o horário está selecionado

    return (
        <div
            onClick={() => selecionarHorario(data.hora)}
            className={`border py-2 px-5 font-bold text-center rounded-lg transition-all cursor-pointer 
                ${isSelected ? "border-gray-400 bg-[#2f2f31] text-white dark:bg-white dark:text-black dark:border-blue-500" : "border-gray-500 hover:border-blue-500"}`}
        >
            {data.hora}
        </div>
    );
};
