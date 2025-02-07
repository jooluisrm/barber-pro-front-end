export const converterMes = (mesAtual: number) => {
        const meses = [
            "jan", "fev", "mar", "abr", "mai", "jun",
            "jul", "ago", "set", "out", "nov", "dez"
        ];
        const mesConvertido = meses[mesAtual];
        return mesConvertido;
    }