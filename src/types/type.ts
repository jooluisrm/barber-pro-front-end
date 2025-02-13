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
