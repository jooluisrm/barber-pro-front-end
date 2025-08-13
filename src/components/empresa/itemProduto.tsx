import { Produto } from "@/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
    data: Produto;
}

export const ItemProduto = ({ data }: Props) => {
    return (
        <div className="flex items-center justify-between border-b pb-10 pt-5">
            <div className="flex items-center gap-5">
                <Avatar className="size-14">
                    <AvatarImage src={`${data?.imagemUrl || "/favicon.png"} `} />
                    <AvatarFallback>{data.nome.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-bold">{data.nome}</h3>
                    <p className="text-sm text-green-700 font-bold">R$ {Number(data.preco).toFixed(2)}</p>
                </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{data.descricao ? data.descricao : "Sem descrição"}</p>
        </div>
    );
}