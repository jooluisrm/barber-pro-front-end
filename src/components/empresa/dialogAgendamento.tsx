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
import { Horario, Profissional } from "@/types/type";
import { format } from "date-fns";
import { criarAgendamento, getHorariosValidosProfissional } from "@/api/barbeiro/barbeiroServices";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

type Props = {
    idBarbearia: string;
    idServico: string;
}

export const DialogAgendamento = ({ idBarbearia, idServico }: Props) => {

    const { user } = useAuth();

    const [pageAgendamento, setPageAgendamento] = useState(1);

    const [date, setDate] = useState<Date | undefined>(new Date());
    const [selectProfissional, setSelectProfissional] = useState("");
    const [selectHorario, setSelectHorario] = useState("");

    const [getProfissionais, setProfissionais] = useState<Profissional[] | null>(null);
    const [getHorarios, setHorarios] = useState<Horario[] | null>(null);

    const [getProgressBarra, setProgressBarra] = useState(0);

    const nextPage = () => {
        if (pageAgendamento < 2) {
            setPageAgendamento(pageAgendamento + 1);
        } else return 0;

    }

    const formatDate = (date: Date | undefined): string => {
        if (!date) return "";
        return format(date, "yyyy-MM-dd"); // Formato correto para a API
    };

    const backPage = () => {
        if (pageAgendamento > 1) {
            setSelectProfissional("");
            setSelectHorario("");
            setPageAgendamento(pageAgendamento - 1);
        } else return 0;
    }

    const barraProgressoDate = () => {
        if (date) {
            return 25; // Se a data estiver selecionada, aumenta 25%
        } else {
            return 0; // Caso contrário, retorna 0%
        }
    }
    
    const calcularProgresso = () => {
        let progresso = 0;
    
        // Data selecionada
        progresso += barraProgressoDate();
    
        // Profissional selecionado
        if (selectProfissional) {
            progresso += 25;
        }

        if (pageAgendamento === 2) {
            progresso += 25;
        }
    
        // Horário selecionado
        if (selectHorario) {
            progresso += 25; // Aqui, a seleção do horário adiciona 50%, pois é o último item
        }
    
        return progresso;
    }
    
    const selecionarProfissional = (idProfissional: string) => {
        if (idProfissional === selectProfissional) {
            setSelectProfissional(""); // Desmarcar o profissional
            setSelectHorario("");
        } else {
            setSelectProfissional(idProfissional); // Selecionar o profissional
        }
    };
    
    const selecionarHorario = (hora: string) => {
        if (hora === selectHorario) {
            setSelectHorario(""); // Desmarcar o horário
        } else {
            setSelectHorario(hora); // Selecionar o horário
        }
    };

    const fazerAgendamento = async () => {
        if (selectHorario && selectProfissional && date) {
            try {
                if (user?.id) {
                    const agendamentoData = {
                        usuarioId: user.id, // Pegue do contexto ou estado
                        barbeariaId: idBarbearia, // Pegue da barbearia selecionada
                        barbeiroId: selectProfissional, // Profissional selecionado
                        servicoId: idServico, // Serviço selecionado
                        data: formatDate(date), // Data selecionada (YYYY-MM-DD)
                        hora: selectHorario, // Horário selecionado (HH:mm)
                    };
                    const response = await criarAgendamento(agendamentoData);
                    console.log('Agendamento realizado com sucesso:', response);
                    toast("Agendamento realizado com sucesso", {
                        action: {
                            label: "Fechar",
                            onClick: () => console.log("Undo")
                        }
                    })
                    carregarHorariosProfissional();
                    setSelectHorario("");
                    setSelectProfissional("");
                }
            } catch (error: any) {
                toast(error.message, {
                    action: {
                        label: "Fechar",
                        onClick: () => console.log("Undo")
                    }
                });
            }
        } else {
            toast("Selecione uma data, profissional e um horário", {
                action: {
                    label: "Fechar",
                    onClick: () => console.log("Undo")
                }
            });
        }
    };

    const carregarHorariosProfissional = async () => {
        if (selectProfissional !== "") {
            try {
                const dataFormatada = formatDate(date); // Formata a data corretamente
                const horaAtual = new Date().toTimeString().slice(0, 5); // Pega o horário atual no formato HH:MM
    
                const data = await getHorariosValidosProfissional(selectProfissional, dataFormatada, horaAtual);
    
                if (data) {
                    setHorarios(data);
                    console.log(data);
                }
            } catch (error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        const progresso = calcularProgresso();
        setProgressBarra(progresso);
    }, [date, selectHorario, selecionarProfissional, pageAgendamento]);

    useEffect(() => {
        const carregarBarbeiro = async () => {
            try {
                if (idBarbearia) {
                    const data = await getBarbeariaProfissionais(idBarbearia);
                    if (data) {
                        setProfissionais(data);
                        console.log(formatDate(date))
                    }
                }
            } catch (error: any) {
                toast(error.message, {
                    action: {
                        label: "Fechar",
                        onClick: () => console.log("Undo")
                    }
                });
            }
        };

        setHorarios(null);
        carregarHorariosProfissional();
        carregarBarbeiro();
    }, [idBarbearia, date, selectProfissional]);

    return (
        <Dialog >
            <DialogTrigger><div className="text-white bg-[#2F2F31] p-2 rounded-md font-bold dark:bg-white dark:text-black">Agendar</div></DialogTrigger>
            <DialogContent>
                <div className="transition-all">
                    {
                        pageAgendamento === 1 && (
                            <EscolherData date={date} setDate={setDate} />
                        )
                    }
                    {
                        pageAgendamento === 2 && (
                            <EscolherProfissional
                                date={date}
                                getProfissionais={getProfissionais}
                                functionSelecionarProfissional={selecionarProfissional}
                                selectProfissional={selectProfissional}
                                getHorarios={getHorarios}
                                selecionarHorario={selecionarHorario}
                                selectHorario={selectHorario}
                                fazerAgendamento={fazerAgendamento}
                            />
                        )
                    }

                    <div className="flex gap-10 justify-between items-center">
                        <div className={`${pageAgendamento != 1 && 'hidden'}`}></div>
                        <Button disabled={pageAgendamento === 1} className={`rounded-full px-3 py-0 ${pageAgendamento === 1 && "hidden"}`} onClick={backPage}><ArrowLeft /></Button>
                        <div className="flex items-center flex-col mb-5">
                            <p className="font-bold text-blue-500">
                                {getProgressBarra}%
                            </p>
                            <Progress
                                value={getProgressBarra}
                                className="w-[200px] md:w-[300px]"
                            />
                        </div>
                        <div className={`${pageAgendamento != 2 && 'hidden'}`}></div>
                        <Button disabled={pageAgendamento === 2 || !date} className={`rounded-full px-3 py-0 ${pageAgendamento === 2 && "hidden"}`} onClick={nextPage}><ArrowRight /></Button>
                    </div>
                </div>

            </DialogContent>
        </Dialog>

    );
}