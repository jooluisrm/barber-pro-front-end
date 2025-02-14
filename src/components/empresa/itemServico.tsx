import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock } from "lucide-react";
import { Button } from "../ui/button";
import { DialogAgendamento } from "./dialogAgendamento";
import { Servico } from "@/types/type";

type Props = {
    data: Servico;
    idBarbearia: string;
}

export const ItemServico = ({ data, idBarbearia }: Props) => {
    return (
        <div className="flex items-center justify-between border-b pb-10 pt-5">
            <div className="flex items-center gap-5">
                <Avatar className="size-14">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-bold sm:min-w-60">{data.nome}</h3>
                    <p className="text-sm text-green-700 font-bold">{data.preco != null ? `R$ ${data.preco}` : "R$ Consultar"}</p>
                </div>
            </div>

            <div className="flex items-center gap-1 mt-5">
                <Clock size={15} />
                <span className="text-sm font-bold">{data.duracao} min</span>
            </div>
            <div>
                <DialogAgendamento idServico={data.id} idBarbearia={`${idBarbearia}`}/>
            </div>
        </div>
    );
}