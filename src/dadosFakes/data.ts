export const barbearias = [
    {
        id: 1,
        nome: "Barbearia Elite",
        email: "elite@barbearia.com",
        senha: "123456",
        endereco: "Rua das Palmeiras, 123",
        telefone: "(11) 98765-4321",
        foto_perfil: "/imagens/barbearia-elite.jpg",
        descricao: "Cortes modernos e atendimento de primeira!",
        latitude: -23.5505,
        longitude: -46.6333,
        status: "ativa",
    },
    {
        id: 2,
        nome: "BarberKing",
        email: "contato@barberking.com",
        senha: "654321",
        endereco: "Avenida Central, 456",
        telefone: "(21) 99876-5432",
        foto_perfil: "/imagens/barberking.jpg",
        descricao: "Especialistas em barba e cabelo.",
        latitude: -22.9068,
        longitude: -43.1729,
        status: "ativa",
    },
];

export const usuarios = [
    {
        id: 1,
        nome: "João Silva",
        email: "joao@email.com",
        senha: "senha123",
        telefone: "(11) 91234-5678",
        foto_perfil: "/imagens/joao.jpg",
    },
    {
        id: 2,
        nome: "Maria Santos",
        email: "maria@email.com",
        senha: "maria123",
        telefone: "(21) 92345-6789",
        foto_perfil: "/imagens/maria.jpg",
    },
];

export const barbeiros = [
    {
        id: 1,
        barbearia_id: 1,
        nome: "Carlos Mendes",
        email: "carlos@elite.com",
        senha: "carlos123",
        telefone: "(11) 99999-9999",
        foto_perfil: "/imagens/carlos.jpg",
        especialidades: ["Corte masculino", "Barba", "Sobrancelha"],
    },
    {
        id: 2,
        barbearia_id: 1,
        nome: "Roberto Lima",
        email: "roberto@elite.com",
        senha: "roberto123",
        telefone: "(11) 98888-8888",
        foto_perfil: "/imagens/roberto.jpg",
        especialidades: ["Corte moderno", "Desenho na barba"],
    },
    {
        id: 3,
        barbearia_id: 2,
        nome: "Fernando Souza",
        email: "fernando@barberking.com",
        senha: "fernando123",
        telefone: "(21) 97777-7777",
        foto_perfil: "/imagens/fernando.jpg",
        especialidades: ["Barba", "Alisamento capilar"],
    },
];


export const servicos = [
    { id: 1, barbearia_id: 1, nome: "Corte Masculino", descricao: "Corte clássico e moderno", duracao: 30, preco: 40.0 },
    { id: 2, barbearia_id: 1, nome: "Barba", descricao: "Aparação e modelagem da barba", duracao: 20, preco: 25.0 },
    { id: 3, barbearia_id: 2, nome: "Corte + Barba", descricao: "Pacote completo", duracao: 50, preco: 60.0 },
    { id: 4, barbearia_id: 2, nome: "Sobrancelha", descricao: "Design e limpeza", duracao: 15, preco: 15.0 },
];


export const agendamentos = [
    {
        id: 1,
        usuario_id: 1,
        barbearia_id: 1,
        barbeiro_id: 1,
        servico_id: 1,
        data_hora: "2025-02-10T14:00:00Z",
        status: "confirmado",
    },
    {
        id: 2,
        usuario_id: 2,
        barbearia_id: 2,
        barbeiro_id: 3,
        servico_id: 3,
        data_hora: "2025-02-11T16:00:00Z",
        status: "pendente",
    },
];

export const horariosDisponiveis = [
    { id: 1, barbeiro_id: 1, dia_semana: "segunda-feira", hora_inicio: "09:00", hora_fim: "18:00", status: "ativo" },
    { id: 2, barbeiro_id: 2, dia_semana: "terça-feira", hora_inicio: "10:00", hora_fim: "17:00", status: "ativo" },
    { id: 3, barbeiro_id: 3, dia_semana: "quarta-feira", hora_inicio: "08:00", hora_fim: "16:00", status: "ativo" },
];

export const produtos = [
    { id: 1, barbearia_id: 1, nome: "Pomada Modeladora", descricao: "Fixa e dá brilho ao cabelo", preco: 30.0, estoque: true },
    { id: 2, barbearia_id: 1, nome: "Shampoo para Barba", descricao: "Hidrata e fortalece os fios", preco: 25.0, estoque: false },
    { id: 3, barbearia_id: 2, nome: "Cerveja Artesanal", descricao: "Bebida especial para clientes", preco: 10.0, estoque: true },
    { id: 4, barbearia_id: 2, nome: "Balm para Barba", descricao: "Suaviza e hidrata", preco: 35.0, estoque: true },
];


export const avaliacoes = [
    { id: 1, usuario_id: 1, barbearia_id: 1, nota: 5, comentario: "Ótimo atendimento!", data_hora: "2025-02-05T10:00:00Z" },
    { id: 2, usuario_id: 2, barbearia_id: 2, nota: 4, comentario: "Gostei muito, mas poderia melhorar a pontualidade.", data_hora: "2025-02-04T15:30:00Z" },
];
