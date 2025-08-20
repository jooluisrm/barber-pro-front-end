import { Produto } from "@/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { formatarPreco } from "@/utils/formatarValores";

type Props = {
    data: Produto;
}

export const ItemProduto = ({ data }: Props) => {
    return (
        // 1. MUDANÇA: Removi 'justify-between' para eliminar o vão grande no desktop
        <div className="flex items-center border-b pb-5 pt-5 gap-4">
            
            {/* 2. MUDANÇA: Esta div agora ocupa o espaço disponível */}
            <div className="flex items-center gap-5 flex-1 min-w-0">
                <Avatar className="size-14 flex-shrink-0">
                    <AvatarImage src={`${data?.imagemUrl || "/favicon.png"} `} />
                    <AvatarFallback>{data.nome.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="min-w-0">
                    {/* 3. MUDANÇA: Adicionado 'truncate' aqui também para nomes muito longos */}
                    <h3 className="font-bold truncate">{data.nome}</h3>
                    <p className="text-sm text-green-700 font-bold">{formatarPreco(String(data.precoVenda))}</p>
                </div>
            </div>
            
            <div className="max-w-[100px] sm:max-w-xs flex-shrink-0">
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate sm:text-wrap">
                    {data.descricao || "Sem descrição"}
                </p>
            </div>
        </div>
    );
}