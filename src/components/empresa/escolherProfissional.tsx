"use client"

import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { ItemSelecionarProfissional } from "./itemSelecionarProfissional";
import { AlertEscolhaProfissional } from "./alertEscolhaProfissional";
import { ItemHorario } from "./itemHorario";
import { useEffect } from "react";
import { Horario, Profissional } from "@/types/type";
import { Button } from "../ui/button";

type Props = {
    date: Date | undefined;
    getProfissionais: Profissional[] | null,
    functionSelecionarProfissional: (idProfissional: string) => void;
    selectProfissional: string;
    getHorarios: Horario[] | null;
    selecionarHorario: (hora: string) => void;
    fazerAgendamento: any;
    selectHorario: any;

}

export const EscolherProfissional = ({ date, getProfissionais, functionSelecionarProfissional, selectProfissional, getHorarios, selecionarHorario, fazerAgendamento, selectHorario }: Props) => {
    return (
        <>
            <DialogHeader>
                <div className="flex justify-between">
                    <DialogTitle>Selecione um profissional</DialogTitle>
                    <p className="font-bold pr-3">{date?.toLocaleDateString()}</p>
                    <p></p>
                </div>
                <DialogDescription>Selecione um profissional para continuar!</DialogDescription>
            </DialogHeader>
            <div className="flex gap-5 py-5 mb-5 flex-wrap border-b-4">
                {getProfissionais && getProfissionais.map((item: Profissional) => (
                    <ItemSelecionarProfissional key={item.id} data={item} functionSelecionarProfissional={functionSelecionarProfissional} selectProfissional={selectProfissional} />
                ))}
            </div>
            <div className="pb-5">
                {selectProfissional != "" ? (
                    <div className="py-5">
                        <div>
                            <DialogTitle>Horários disponíveis</DialogTitle>
                            <div className="grid grid-cols-4 gap-3 py-5">
                                {getHorarios && getHorarios.length > 0 ? (
                                    getHorarios.map((item: Horario) => (
                                        <ItemHorario
                                            key={item.id}
                                            data={item}
                                            selecionarHorario={selecionarHorario}
                                            selectHorario={selectHorario}
                                        />
                                    ))
                                ) : (
                                    <div className="col-span-4 text-center">
                                        <p className="text-gray-500 font-semibold mt-4">
                                            Nenhum horário disponível para esta data.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        {
                            getHorarios && getHorarios?.length > 0 ? <Button onClick={() => fazerAgendamento()} className="w-full">Agendar</Button> : <div></div>
                        }
                        
                    </div>
                ) : <AlertEscolhaProfissional />}
            </div >
        </>
    );
}