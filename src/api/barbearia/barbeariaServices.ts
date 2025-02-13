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
        console.error("Erro ao achar barbearias:", error);
        throw new Error(error.response?.data?.error || "Erro ao achar barbearias");
    }
};

