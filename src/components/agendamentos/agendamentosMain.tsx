"use client"

import { useEffect, useState } from "react";
import { ItemAgendamento } from "./itemAgendamento";
import { carregarAgendamentos } from "@/api/usuario/usuarioService";
import { useAuth } from "@/contexts/AuthContext";
import { SelectFilterAgendamento } from "./selectFilterAgendamento";
import { AgendamentoResponse } from "@/types/type"; // Verifique se este é o tipo Agendamentos correto

export const AgendamentosMain = () => {
    const { user } = useAuth();
    const [agendamentos, setAgendamentos] = useState<AgendamentoResponse[] | null>(null);
    const [loading, setLoading] = useState(true);
    
    // ATUALIZADO: O estado agora usa os mesmos valores da API ('futuros' | 'passados')
    const [selectFilter, setSelectFilter] = useState<'futuros' | 'passados'>("futuros");

    useEffect(() => {
        if (user?.id) {
            const carregarMeusAgendamentos = async () => {
                setLoading(true);
                try {
                    // LÓGICA SIMPLIFICADA: Passa o filtro diretamente para a API
                    const dados = await carregarAgendamentos(selectFilter);
                    setAgendamentos(dados);
                } catch (error) {
                    console.log(error);
                    setAgendamentos([]);
                } finally {
                    setLoading(false);
                }
            };
            carregarMeusAgendamentos();
        }
    }, [user?.id, selectFilter]); // Re-executa quando o usuário ou o filtro mudam

    return (
        <main className="container py-10">
            <h1 className="text-3xl font-bold border-b pb-4">Meus Agendamentos</h1>
            <nav className="mt-6 flex justify-end">
                <SelectFilterAgendamento selectFilter={selectFilter} onChange={(value) => setSelectFilter(value as 'futuros' | 'passados')} />
            </nav>
            <div className="py-8 grid gap-6 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {loading ? (
                    <p className="col-span-full text-center text-muted-foreground">Carregando...</p>
                ) : agendamentos && agendamentos.length > 0 ? (
                    agendamentos.map((item) => (
                        <ItemAgendamento key={item.id} data={item} />
                    ))
                ) : (
                    <p className="col-span-full text-center text-muted-foreground">
                        Nenhum agendamento encontrado para este filtro.
                    </p>
                )}
            </div>
        </main>
    );
}