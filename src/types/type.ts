export interface BarbeariaProps {
    id: string;
    nome: string;
    email: string;
    senha: string;
    endereco: string;
    celular: string;
    telefone: string;
    fotoPerfil?: string; // Pode ser opcional, caso não tenha imagem
    descricao?: string;  // Pode ser opcional
    latitude: number;
    longitude: number;
    status: string;
}

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
    preco: number; // Alterado para number, já que preço é numérico
    tipo: string;
    imagemUrl?: string | null; // Pode ser null ou string
    estoque: boolean;
};

export type Avaliacao = {
    id: string; // ID da avaliação
    nota: number;
    nome: string; // Nome do usuário
    data: string; // Data da avaliação no formato ISO
    comentario: string; // Comentário da avaliação
};
