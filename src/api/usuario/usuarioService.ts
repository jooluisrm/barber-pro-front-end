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
