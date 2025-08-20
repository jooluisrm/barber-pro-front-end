export interface BarbeariaProps {
    id: string;
    nome: string;
    endereco: string;
    celular: string;
    telefone?: string;
    fotoPerfil?: string; // Pode ser opcional, caso não tenha imagem
    descricao?: string;  // Pode ser opcional
    latitude: number;
    longitude: number;
    status: string;
}
export type Barbearia = {
    id: string;
    nome: string;
    endereco: string;
    celular: string;
    telefone?: string;
    fotoPerfil: string | null;
    descricao: string | null;
    latitude: number;
    longitude: number;
    status: string;
    distancia: number;
};

export type AgendamentoResponse = {
    // Campos principais do agendamento
    id: string;
    data: string; // Formato "YYYY-MM-DD"
    hora: string; // Formato "HH:mm"
    status: string;
    valorTotal: string | null;

    // Campos do cliente (agora opcionais)
    usuarioId: string | null;
    nomeVisitante: string | null;
    telefoneVisitante: string | null;
    
    // Relações aninhadas
    barbearia: {
        id: string;
        nome: string;
        endereco: string;
    };
    barbeiro: {
        id: string;
        nome: string;
    };

    // MUDANÇA PRINCIPAL: Agora é uma lista de serviços
    servicosRealizados: {
        id: string;
        precoNoMomento: string;
        servico: {
            id: string;
            nome: string;
            duracao: number;
            preco: string;
            imagemUrl: string | null;
        };
    }[];

    // Incluindo a lista de produtos, mesmo que venha vazia
    produtosConsumidos: {
        id: string;
        quantidade: number;
        precoVendaNoMomento: string;
        produto: {
            nome: string;
            precoVenda: string | null;
        };
    }[];
};

export type HorarioFuncionamento = {
    id: string;
    diaSemanaNumero: number;
    diaSemanaNome: string;   // Ex: "Segunda", "Terça"
    horaInicio: string;  // Ex: "09:00"
    horaFim: string;     // Ex: "19:00"
};

export type FormaPagamento = {
    id: string; // ID único da forma de pagamento
    tipo: string; // Tipo de pagamento (ex: "Dinheiro", "Cartão", "PIX", etc.)
};

export type RedeSocial = {
    id: string;         // ID único da rede social
    link: string;       // Link para o perfil ou página da rede social
    rede: string;       // Nome da rede social (ex: "Instagram", "Facebook", etc.)
};

export interface BarbeariaResponse {
    data?: BarbeariaProps;
    error?: string;
}

export type Servico = {
    id: string;
    barbeariaId: string;
    nome: string;
    duracao: number;
    preco?: string; // Pode ser ajustado para `Decimal` ou `number` dependendo do seu uso no banco de dados
    imagemUrl?: string;
};

export type Profissional = {
    id: string;
    barbeariaId: string;
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    fotoPerfil?: string;
};

export type Horario = {
    hora: string;
    id: string // Formato "HH:mm"
};

export type Produto = {
    id: string;
    barbeariaId: string;
    nome: string;
    descricao?: string; // Opcional
    precoVenda: string; // Alterado para number, já que preço é numérico
    tipo: string;
    imagemUrl?: string | null; // Pode ser null ou string
};

export type Avaliacao = {
    id: string; // ID da avaliação
    nota: number;
    nome: string; // Nome do usuário
    data: string; // Data da avaliação no formato ISO
    comentario: string; // Comentário da avaliação
    fotoPerfil: string | null;
};
