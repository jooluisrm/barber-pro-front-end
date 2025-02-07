import { converterMes } from "./conversorMes";
import { converterWeek } from "./conversorSemana";

export const pegarDataAtual = () => {
    const dataAtual = new Date();
    const day = dataAtual.getDate();
    const year = dataAtual.getFullYear();
    const month = converterMes(dataAtual.getMonth());
    const week = converterWeek(dataAtual.getDay()); 
    const retornarData = { day, year, month, week }
    return retornarData;
}