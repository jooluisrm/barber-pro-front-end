import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Avaliacao } from "@/types/type";
import { StarIcon } from "./starIcon";


type Props = {
    data: Avaliacao;
}

export const ItemAvaliacao = ({ data }: Props) => {

    const formattedDate = new Date(data.data).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });

    return (
        <div className="flex items-center justify-between gap-5 border-b pb-10 pt-5">
            <div className="flex items-center gap-5">
                <Avatar className="size-14">
                    <AvatarImage src={`${data?.fotoPerfil || "/favicon.png"} `} />
                    <AvatarFallback>{data.nome.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-bold">{data.nome}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[180px] max-h-[50px] md:max-w-[550px] h-full overflow-hidden">
                        {data.comentario ? data.comentario : <p className="dark:text-gray-700 text-gray-300">Sem comentário...</p>}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-1">
                <div className="flex flex-col items-center w-[100px] dark:bg-[#18181B] p-2 rounded-xl">
                    <h4 className="text-sm">Avaliação</h4>
                    <div className="flex">
                        {
                            new Array(data.nota).fill(null).map((_, index) => (
                                <StarIcon type="icon" size={15} isFilled={true} key={index} />
                            ))
                        }
                    </div>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    {formattedDate}
                </div>
            </div>

        </div>
    );
}