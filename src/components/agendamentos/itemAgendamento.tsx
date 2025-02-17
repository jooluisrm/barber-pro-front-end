import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";
import { AgendamentoResponse } from "@/types/type";
import { converterMes } from "@/utils/conversorMes";
import { DialogInfoAgendamento } from "./dialogInfoAgendamento";

type Props = {
    data: AgendamentoResponse;
}

export const ItemAgendamento = ({data}: Props) => {
    
    const [ano, mes, dia] = data.data.split("-");
    const mesFormatado = converterMes(Number(mes)-1);

    return (
        <div className="bg-[#F4F4F5] dark:bg-[#18181B] flex justify-between items-center rounded-2xl py-3 px-5 md:px-10">
            <div className="flex  items-center gap-3">
                <Avatar className="w-16 h-16">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div>
                    <h3 className="text-lg">{data.barbearia.nome}</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-bold">{data.servico.nome} - {data.hora}h</p>
                    <DialogInfoAgendamento data={data}/>
                </div>

            </div>
            <div className="text-center">
                <div className="flex flex-col justify-center mb-2">
                    <p className="text-xl">{dia}</p>
                    <p className="text-sm font-bold">{mesFormatado.toUpperCase()}</p>
                </div>
                <Button variant={"destructive"}><Trash2 /></Button>
            </div>
        </div>
    );
}