export const formatarPreco = (valor: string | number): string => {
    const valorNumerico = Number(valor);

    // Verifica se o valor é um número válido
    if (isNaN(valorNumerico)) {
        return "R$ 0,00";
    }

    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(valorNumerico);
};