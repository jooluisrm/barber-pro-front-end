import { Profissional } from "@/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
    data: Profissional;
}

export const ItemSelecionarProfissional = ({ data }: Props) => {
    return (
        <div className="flex flex-col items-center gap-1">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-sm">{data.nome}</p>
        </div>
    );
}