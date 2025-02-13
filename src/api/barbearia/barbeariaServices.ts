import axiosInstance from "@/utils/axiosInstance";

export const buscarBarbeariasProximas = async (latitude: number, longitude: number) => {
    try {
        const response = await axiosInstance.get(`/barbearia/proxima?latitude=${latitude}&longitude=${longitude}`);
        console.log(latitude, longitude);
        return response.data;
    } catch (error: any) {
        console.log(latitude.toFixed(7), longitude.toFixed(7));
        console.error("Erro ao buscar barbearias próximas:", error);
        throw new Error(error.response?.data?.error || "Erro ao buscar barbearias próximas");
    }
};

export const getBarbeariaNome = async (nome: string) => {
    try {
        const response = await axiosInstance.get(`/barbearia/${nome}`);
        return response.data;
    } catch (error: any) {
        console.error("Erro ao encontrar barbearias:", error);
        throw new Error(error.response?.data?.error || "Erro ao encontrar barbearias");
    }
};

export const getBarbeariaServico = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/barbearia/${id}/servicos`);
        console.log(response.data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Erro ao encontrar serviço");
    }
}

export const getBarbeariaProfissionais = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/barbearia/${id}/profissionais`);
        console.log(response.data);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Erro ao encontrar barbeiro");
    }
}
