import axiosInstance from "@/utils/axiosInstance"

export const getHorariosValidosProfissional = async (barbeiroId: any, data: any) => {
    const response = await axiosInstance.get(`/barbeiro/${barbeiroId}/horarios/${data}`);
    console.log(response.data);
    return response.data;
}

export const criarAgendamento = async (agendamentoData: {
    usuarioId: string;
    barbeariaId: string;
    barbeiroId: string;
    servicoId: string;
    data: string;
    hora: string;
}) => {
    try {
        const response = await axiosInstance.post('/agendamentos', agendamentoData);
        console.log('Agendamento realizado com sucesso:', response.data);
        return response.data;
    } catch (error: any) {
        if (error.response) {
            // Captura a mensagem de erro enviada pelo back-end
            const mensagemErro = error.response.data.error || 'Erro desconhecido.';
            console.error('Erro ao criar agendamento:', mensagemErro);
            throw new Error(mensagemErro);
        } else if (error.request) {
            console.error('Erro de conexão. Não foi possível conectar ao servidor.');
            throw new Error('Erro de conexão. Verifique sua internet.');
        } else {
            console.error('Erro inesperado:', error.message);
            throw new Error('Ocorreu um erro inesperado. Tente novamente.');
        }
    }
};

