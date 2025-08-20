import { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";
import { format } from "date-fns";
import { DateRange } from "react-day-picker";
import { AgendamentoResponse } from "@/types/type";

interface Perfil {
    id: string;
    nome: string;
    email: string;
    telefone: string;
    fotoPerfil: string | null;
}

export const usePerfil = () => {
    const [perfil, setPerfil] = useState<Perfil | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPerfil = async () => {
            try {
                const response = await axiosInstance.get("/usuario/perfil"); // Usamos a instância do Axios
                setPerfil(response.data);
            } catch (err: any) {
                setError(err.response?.data?.error || "Erro ao buscar perfil.");
            } finally {
                setLoading(false);
            }
        };

        fetchPerfil();
    }, []);

    return { perfil, loading, error };
};

export interface AtualizarPerfilData {
    nome?: string;
    email?: string;
    telefone?: string;
}

export const atualizarPerfil = async (dados: AtualizarPerfilData) => {
    try {
        const response = await axiosInstance.patch("/usuario/perfil", dados);
        return response.data; // Retorna os dados atualizados
    } catch (error: any) {
        throw error.response?.data?.error;
    }
};

// Interface para os filtros
export interface AgendamentoUsuarioFilters {
    dateRange?: DateRange;
    status?: string;
}

// Função de API refatorada para aceitar filtros avançados
export const carregarAgendamentos = async (filters: AgendamentoUsuarioFilters): Promise<AgendamentoResponse[]> => {
    try {
        const queryParams = new URLSearchParams();

        if (filters.dateRange?.from) {
            queryParams.append('dataInicio', format(filters.dateRange.from, 'yyyy-MM-dd'));
        }
        if (filters.dateRange?.to) {
            queryParams.append('dataFim', format(filters.dateRange.to, 'yyyy-MM-dd'));
        }
        if (filters.status && filters.status !== 'todos') {
            // Garante que o status seja enviado com a primeira letra maiúscula
            const statusCapitalized = filters.status.charAt(0).toUpperCase() + filters.status.slice(1);
            queryParams.append('status', statusCapitalized);
        }

        // Usa a rota segura que já criamos
        const response = await axiosInstance.get(`/agendamentos/meus-agendamentos?${queryParams.toString()}`);
        return response.data;
    } catch (error: any) {
        console.error("Erro ao carregar agendamentos do usuário:", error);
        return []; 
    }
}

export const cancelarAgendamento = async (agendamentoId: string) => {
    try {
        const response = await axiosInstance.put(`/agendamentos/${agendamentoId}/cancelar`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.error;
    }
}

export const deletarRegistroAgendamento = async (agendamentoId: string) => {
    try {
        const response = await axiosInstance.delete(`/agendamentos/${agendamentoId}`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.error;
    }
}