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

export const getBarbeariaProdutos = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/barbearia/${id}/produtos`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Erro ao encontrar produtos");
    }
}

export const getBarbeariaAvaliacoes = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/barbearia/${id}/avaliacoes`);
        return response.data
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Erro ao encontrar avaliações");
    }
}


export const postBarbeariaAvaliacao = async (barbeariaId: string, usuarioId: string, nota: number, comentario?: string) => {
    try {
        const response = await axiosInstance.post(`/barbearia/${barbeariaId}/avaliacoes`, {
            usuarioId,
            nota,
            comentario,
        });

        return response.data; // Retorna a resposta da API
    } catch (error: any) {
        console.error("Erro ao postar avaliação:", error.response?.data || error.message);
        throw new Error(error.response?.data?.error || "Erro ao postar avaliação.");
    }
};

export const getBarbeariaHorarios = async (barbeariaId: string) => {
    try {
        const response = await axiosInstance.get(`/barbearia/${barbeariaId}/horarios`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Erro ao carregar horarios.");
    }
}

export const getBarbeariaPagamentos = async (barbeariaId: string) => {
    try {
        const response = await axiosInstance.get(`/barbearia/${barbeariaId}/formas-pagamento`);
        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.error || "Erro ao carregar formas de pagamentos.");
    }
}
