import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { AgendamentoResponse } from "@/types/type";
import { converterMes } from "@/utils/conversorMes";
import { DialogInfoAgendamento } from "./dialogInfoAgendamento";
import { AlertDialogCandelarAgendamento } from "./alertDialogCancelarAgendamento";
import { AlertDialogDeletarAgendamento } from "./alertDialogDeletarAgendamento";

type Props = {
    data: AgendamentoResponse;
}

export const ItemAgendamento = ({ data }: Props) => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Zera horas, minutos, segundos e milissegundos

    const [ano, mes, dia] = data.data.split("-").map(Number);
    const mesFormatado = converterMes(mes - 1);

    // Criar uma data para o agendamento
    const dataAgendamento = new Date(ano, mes - 1, dia);
    dataAgendamento.setHours(0, 0, 0, 0); // Zera horas, minutos, segundos e milissegundos

    // Comparar a data do agendamento com a data de hoje
    const isExpirado = hoje > dataAgendamento;
    const isHoje = hoje.getTime() === dataAgendamento.getTime(); // Verifica se é o mesmo dia

    return (
        <div className={`bg-[#F4F4F5] dark:bg-[#18181B] flex justify-between items-center rounded-2xl py-3 px-5 md:px-10 border 
            ${data.status === "Feito" && "border-green-600"}  
            ${data.status === "Cancelado" && "border-red-500"} 
            ${isExpirado && data.status != "Feito" && "border-red-500"}  
            ${!isExpirado && data.status === "Confirmado" && !isHoje && "border-yellow-500"}  
            ${isHoje ? "border-blue-500 border-2" : "border-gray-700"}`}>
            <div className="flex items-center gap-3">
                <Avatar className="w-16 h-16">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="text-lg">{data.barbearia.nome}</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-bold">{data.servico.nome} - {data.hora}h</p>
                    <DialogInfoAgendamento data={data} />
                </div>
            </div>
            <div className="text-center">
                <div className="flex flex-col justify-center mb-2">
                    <p className={`text-xl font-bold ${isHoje && "text-blue-500"}`}>{dia}</p>
                    <p className={`text-sm font-bold ${isHoje && "text-blue-500"}`}>{mesFormatado.toUpperCase()}</p>
                </div>
                {data.status === "Confirmado" && <AlertDialogCandelarAgendamento idAgendamento={data.id} />}
                {data.status != "Confirmado" && <AlertDialogDeletarAgendamento idAgendamento={data.id} />}
            </div>
        </div>
    );
};

