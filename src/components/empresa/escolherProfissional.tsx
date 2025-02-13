import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { ItemSelecionarProfissional } from "./itemSelecionarProfissional";
import { AlertEscolhaProfissional } from "./alertEscolhaProfissional";
import { ItemHorario } from "./itemHorario";
import { useEffect } from "react";
import { Profissional } from "@/types/type";

type Props = {
    date: Date | undefined;
    setDate: any;
    getProfissionais: Profissional[] | null,
}

export const EscolherProfissional = ({ date, setDate, getProfissionais }: Props) => {
    return (
        <>
            <DialogHeader>
                <div className="flex justify-between">
                    <DialogTitle>Selecione um profissional</DialogTitle>
                    <p className="font-bold pr-3">{date?.toLocaleDateString()}</p>
                </div>
                <DialogDescription>Selecione um profissional para continuar!</DialogDescription>
            </DialogHeader>
            <div className="flex gap-5 py-5 mb-5 flex-wrap border-b-4">
                {getProfissionais && getProfissionais.map((item: Profissional) => (
                    <ItemSelecionarProfissional key={item.id} data={item}/>
                ))}
            </div>
            <div className="pb-5">
                <AlertEscolhaProfissional />
                <div className="py-5">
                    <DialogTitle>Horários disponíveis</DialogTitle>
                    <div className="grid grid-cols-4 gap-3 py-5">
                        <ItemHorario />
                        <ItemHorario />
                        <ItemHorario />
                        <ItemHorario />
                        <ItemHorario />
                    </div>
                </div>
            </div>
        </>
    );
}