export const converterWeek = (weekAtual: number) => {
        const diasSemana = [
            "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira",
            "Quinta-feira", "Sexta-feira", "Sábado"
        ];
        const weekConvertido = diasSemana[weekAtual];
        return weekConvertido;
    }