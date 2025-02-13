"use Client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { EscolherData } from "./escolherData";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { EscolherProfissional } from "./escolherProfissional";
import { Progress } from "../ui/progress";
import { getBarbeariaProfissionais } from "@/api/barbearia/barbeariaServices";
import { Profissional } from "@/types/type";

type Props = {
    idBarbearia: string;
}

export const DialogAgendamento = ({ idBarbearia }: Props) => {
    const [pageAgendamento, setPageAgendamento] = useState(1);

    const [date, setDate] = useState<Date | undefined>(new Date());

    const [getProfissionais, setProfissionais] = useState<Profissional[] | null>(null);

    const nextPage = () => {
        if (pageAgendamento < 2) {
            setPageAgendamento(pageAgendamento + 1);
        } else return 0;

    }
    const backPage = () => {
        if (pageAgendamento > 1) {
            setPageAgendamento(pageAgendamento - 1);
        } else return 0;
    }

    useEffect(() => {
        const carregarBarbeiro = async () => {
            try {
                if (idBarbearia) {
                    const data = await getBarbeariaProfissionais(idBarbearia);
                    if (data) {
                        setProfissionais(data);
                        console.log(data);  // Verifique no console se o array de profissionais está correto
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };

        carregarBarbeiro();
    }, [idBarbearia])

    return (
        <Dialog >
            <DialogTrigger><div className="text-white bg-[#2F2F31] p-2 rounded-md font-bold dark:bg-white dark:text-black">Agendar</div></DialogTrigger>
            <DialogContent>
                <div>
                    {
                        pageAgendamento === 1 && (
                            <EscolherData date={date} setDate={setDate} />
                        )
                    }
                    {
                        pageAgendamento === 2 && (
                            <EscolherProfissional date={date} setDate={setDate} getProfissionais={getProfissionais} />
                        )
                    }

                    <div className="flex gap-10 justify-between items-center">
                        <Button disabled={pageAgendamento === 1} className="rounded-full px-3 py-0" onClick={backPage}><ArrowLeft /></Button>
                        <div className="flex items-center flex-col mb-5">
                            <p className="font-bold">{pageAgendamento === 1 ? "50%" : "100%"}</p>
                            <Progress value={pageAgendamento === 1 ? 50 : 100} className="w-[300px]" />
                        </div>
                        <Button disabled={pageAgendamento === 2} className="rounded-full px-3 py-0" onClick={nextPage}><ArrowRight /></Button>
                    </div>
                </div>

            </DialogContent>
        </Dialog>

    );
}