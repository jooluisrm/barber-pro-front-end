import { useState, useEffect } from "react";
import axiosInstance from "@/utils/axiosInstance";

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

export const carregarAgendamentos = async (usuarioId: string) => {
    try {
        const response = await axiosInstance.get(`/agendamentos/${usuarioId}`);
        return response.data;
    } catch (error: any) {
        throw error.response?.data?.error;
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