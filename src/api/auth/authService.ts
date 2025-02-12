import axiosInstance from '../../utils/axiosInstance';
import { AxiosError } from 'axios'; // Importando o tipo AxiosError

interface RegisterData {
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    fotoPerfil?: string;
}

export const registerUser = async (data: RegisterData) => {
    try {
        const response = await axiosInstance.post('/usuario/register', data);
        return response.data; // Retorna a resposta de sucesso
    } catch (error: any) {
            // Verificando se a resposta do erro existe e acessando de forma segura
            const errorMessage = error.response?.data?.error || 'Erro ao registrar usuário';
            throw new Error(errorMessage);
    }
};
