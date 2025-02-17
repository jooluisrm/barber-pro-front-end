"use client"

import { HorarioFuncionamento } from "@/types/type";
import { useEffect, useState } from "react";

type Props = {
    data: HorarioFuncionamento;
}

export const ItemDiaAtendimento = ({ data }: Props) => {

    const [diaSemanaHoje, setDiaSemanaHoje] = useState<Date | number>();

    useEffect(() => {
        const pegarDiaSemanaHoje = () => {
            const date = new Date();
            setDiaSemanaHoje(date.getDay());
        }

        pegarDiaSemanaHoje();
    }, []);

    return (
        <div className={`flex justify-between items-center py-2 ${diaSemanaHoje === data.diaSemanaNumero && "font-bold"}`}>
            <div className="flex items-center gap-2">
                <h2>{data.diaSemanaNome}</h2>
                {
                    diaSemanaHoje === data.diaSemanaNumero &&
                    <span className="text-sm text-green-600 border-2 border-green-700 rounded-full py-1 px-2 font-bold">Hoje</span>
                }
            </div>
            <div className="flex flex-col">
                <span>{data.horaInicio} - {data.horaFim}</span>
            </div>
        </div>
    );
}