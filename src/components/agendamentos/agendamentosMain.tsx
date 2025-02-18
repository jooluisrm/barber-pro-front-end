"use client"

import { useEffect, useState } from "react";
import { ItemAgendamento } from "./itemAgendamento";
import { carregarAgendamentos } from "@/api/usuario/usuarioService";
import { useAuth } from "@/contexts/AuthContext";
import { AgendamentoResponse } from "@/types/type";
import { SelectFilterAgendamento } from "./selectFilterAgendamento";

export const AgendamentosMain = () => {

    const { user } = useAuth();
    const [agendamentos, setAgendamentos] = useState<AgendamentoResponse[] | null>(null);

    const [agendamentosFiltrado, setAgendamentosFiltrado] = useState<AgendamentoResponse[] | null>(null);
    const [selectFilter, setSelectFilter] = useState("proximo");

    const selecionarFiltro = (value: string) => {
        setSelectFilter(value);
    }

    useEffect(() => {
        if (user?.id) {
            const carregarMeusAgendamentos = async () => {
                try {
                    const dados: AgendamentoResponse[] = await carregarAgendamentos(user?.id);
                    setAgendamentos(dados);
                } catch (error) {
                    console.log(error);
                }
            };
            carregarMeusAgendamentos();
        }
    }, [user?.id]);

    useEffect(() => {
        if (agendamentos) {
            const dataHoje = new Date();
            dataHoje.setHours(0, 0, 0, 0); // Zera as horas para comparar apenas a data

            const agendamentosFuturos = agendamentos.filter((item: AgendamentoResponse) => {
                const dataAgendamento = new Date(item.data + "T00:00:00"); // Garante que a string "YYYY-MM-DD" seja interpretada corretamente
                return dataAgendamento >= dataHoje && item.status === "Confirmado";
            });

            setAgendamentosFiltrado(agendamentosFuturos);
        }
        if (agendamentos && selectFilter === "cancelado") {
            const agendamentosCancelados = agendamentos.filter((item) => {
                return item.status === "Cancelado";
            })
            setAgendamentosFiltrado(agendamentosCancelados);
        }
        if(agendamentos && selectFilter === "feito") {
            const agendamentosFeitos = agendamentos.filter((item) => {
                return item.status === "Feito";
            });
            setAgendamentosFiltrado(agendamentosFeitos);
        }
    }, [agendamentos, selectFilter]);

    return (
        <main>
            <h1 className="text-4xl pt-10 border-b-4 pb-5">Meus Agendamentos</h1>
            <nav className="mt-5 flex justify-end">
                <SelectFilterAgendamento selectFilter={selectFilter} onChange={selecionarFiltro} />
            </nav>
            <div className="py-10 grid gap-5 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">

                {selectFilter === "proximo" || selectFilter === "cancelado" || selectFilter === "feito" ? (
                    agendamentosFiltrado && agendamentosFiltrado.length > 0 ? (
                        agendamentosFiltrado.map((item: AgendamentoResponse) => (
                            <ItemAgendamento key={item.id} data={item} />
                        ))
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400">Sem agendamentos!</p>
                    )
                ) : selectFilter === "todos" ? (
                    agendamentos && agendamentos.length > 0 ? (
                        agendamentos.map((item: AgendamentoResponse) => (
                            <ItemAgendamento key={item.id} data={item} />
                        ))
                    ) : (
                        <p className="text-gray-500 dark:text-gray-400">Sem agendamentos!</p>
                    )
                ) : (
                    <p className="text-gray-500 dark:text-gray-400">Selecione um filtro para visualizar os agendamentos.</p>
                )}
            </div>
        </main>
    );
}