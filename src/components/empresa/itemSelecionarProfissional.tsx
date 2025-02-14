import { Profissional } from "@/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
    data: Profissional;
    functionSelecionarProfissional: (idProfissional: string) => void;
    selectProfissional: string | null;
};

export const ItemSelecionarProfissional = ({ data, functionSelecionarProfissional, selectProfissional }: Props) => {
    const isSelected = data.id === selectProfissional; // Verifica se está selecionado

    return (
        <div 
            onClick={() => functionSelecionarProfissional(data.id)} 
            className={`flex flex-col items-center gap-1 cursor-pointer p-2 rounded-lg transition-all 
                ${isSelected ? "border-gray-400 bg-[#2f2f31] text-white dark:bg-white dark:text-black dark:border-blue-500" : "border-gray-500 hover:border-blue-500"}`}
        >
            <Avatar className={isSelected ? "border-2 border-black" : ""}>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>{data.nome.charAt(0)}</AvatarFallback>
            </Avatar>
            <p className="text-sm">{data.nome}</p>
        </div>
    );
};
