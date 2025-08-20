"use client"

import { useEffect, useState, useCallback } from "react";
import { ItemAgendamento } from "./itemAgendamento";
import { carregarAgendamentos } from "@/api/usuario/usuarioService";
import { useAuth } from "@/contexts/AuthContext";
import { SelectFilterAgendamento } from "./selectFilterAgendamento";
import { AgendamentoResponse } from "@/types/type";
import { DateRange } from "react-day-picker";
import { DateRangePicker } from "../ui/date-range-picker";

export const AgendamentosMain = () => {
    const { user } = useAuth();
    const [agendamentos, setAgendamentos] = useState<AgendamentoResponse[] | null>(null);
    const [loading, setLoading] = useState(true);

    const [dateRange, setDateRange] = useState<DateRange | undefined>({ from: new Date(), to: new Date() });
    const [statusFilter, setStatusFilter] = useState("Confirmado");

    // 1. A lógica de busca agora está em uma função reutilizável
    // Usamos useCallback para otimizar e evitar recriações desnecessárias da função
    const fetchAgendamentos = useCallback(async () => {
        if (!user?.id) return;

        setLoading(true);
        try {
            const dados = await carregarAgendamentos({
                dateRange: dateRange,
                status: statusFilter
            });
            setAgendamentos(dados);
        } catch (error) {
            console.log(error);
            setAgendamentos([]);
        } finally {
            setLoading(false);
        }
    }, [user?.id, statusFilter, dateRange]); // A função será recriada se algum filtro mudar

    // 2. O useEffect agora apenas chama a função de busca
    useEffect(() => {
        fetchAgendamentos();
    }, [fetchAgendamentos]); // Reage à recriação da função (quando os filtros mudam)

    return (
        <main className="container py-10">
            <h1 className="text-3xl font-bold border-b pb-4">Meus Agendamentos</h1>
            <nav className="mt-6 flex flex-col sm:flex-row gap-4 justify-end">
                <SelectFilterAgendamento selectFilter={statusFilter} onChange={setStatusFilter} />
                <DateRangePicker date={dateRange} onDateChange={setDateRange} />
            </nav>
            <div className="py-8 grid gap-6 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                {loading ? (
                    <p className="col-span-full text-center text-muted-foreground">Carregando...</p>
                ) : agendamentos && agendamentos.length > 0 ? (
                    agendamentos.map((item) => (
                        // 3. Passamos a função de recarregar como callback para cada item
                        <ItemAgendamento
                            key={item.id}
                            data={item}
                            onActionSuccess={fetchAgendamentos}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center text-muted-foreground">
                        Nenhum agendamento encontrado para os filtros selecionados.
                    </p>
                )}
            </div>
        </main>
    );
}