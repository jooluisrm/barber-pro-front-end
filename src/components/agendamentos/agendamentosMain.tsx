"use client"

import { useEffect, useState } from "react";
import { ItemAgendamento } from "./itemAgendamento";
import { carregarAgendamentos } from "@/api/usuario/usuarioService";
import { useAuth } from "@/contexts/AuthContext";
import { AgendamentoResponse } from "@/types/type";

export const AgendamentosMain = () => {

    const { user } = useAuth();
    const [agendamentos, setAgendamentos] = useState<AgendamentoResponse[] | null>(null);

    //const [agendamentosFiltrado, setAgendamentosFiltrado] = useState();

    useEffect(() => {
        if (user?.id) {
            const carregarMeusAgendamentos = async () => {
                try {
                    const dados:AgendamentoResponse[] = await carregarAgendamentos(user?.id);
                    setAgendamentos(dados);
                    console.log(dados);
                } catch (error) {
                    console.log(error);
                }
            };
            carregarMeusAgendamentos();
        }
    }, [user?.id]);

    return (
        <main>
            <h1 className="text-4xl pt-10 border-b-4 pb-5">Meus Agendamentos</h1>
            <div className="py-10 grid gap-5 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {
                    agendamentos ? agendamentos.map((item: AgendamentoResponse) => (
                        <ItemAgendamento key={item.id} data={item}/>
                    )) :
                    <p className="text-gray-500 dark:text-gray-400">Sem agendamentos!</p>
                }
            </div>
        </main>
    );
}