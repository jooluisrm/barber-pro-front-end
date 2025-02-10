export type Barbearia = {
    id: number;
    nome: string;
    email: string;
    senha: string;
    endereco: string;
    telefone: string;
    foto_perfil: string;
    descricao: string;
    latitude: number;
    longitude: number;
    status: "ativa" | "inativa";
    distancia?: number; // Adicionando distância como opcional
};

export type Usuario = {
    id: number;
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    foto_perfil: string;
};

export type Barbeiro = {
    id: number;
    barbearia_id: number;
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    foto_perfil: string;
    especialidades: string[]; // Array de especialidades (ex: ["Corte", "Barba"])
};

export type Servico = {
    id: number;
    barbearia_id: number;
    nome: string;
    descricao: string;
    duracao: number; // Duração em minutos
    preco: number;
};

export type Agendamento = {
    id: number;
    usuario_id: number;
    barbearia_id: number;
    barbeiro_id: number;
    servico_id: number;
    data_hora: string; // ISO 8601 (ex: "2025-02-10T14:00:00Z")
    status: "pendente" | "confirmado" | "cancelado";
};

export type Avaliacao = {
    id: number;
    usuario_id: number;
    barbearia_id: number;
    nota: number; // 1 a 5 estrelas
    comentario: string;
    data_hora: string; // ISO 8601
};

export type HorarioDisponivel = {
    id: number;
    barbeiro_id: number;
    dia_semana: string; // Ex: "segunda-feira"
    hora_inicio: string; // Ex: "09:00"
    hora_fim: string; // Ex: "18:00"
    status: "ativo" | "inativo";
};

export type Produto = {
    id: number;
    barbearia_id: number;
    nome: string;
    descricao: string;
    preco: number;
    estoque: boolean; // true = disponível, false = indisponível
};
