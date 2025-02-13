import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Profissional } from "@/types/type";

type Props = {
    data: Profissional;
}

export const ItemProfissional = ({ data }: Props) => {
    return (
        <div className="flex items-center gap-5 border-b pb-10 pt-5">
            <Avatar className="size-14">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
                <h3 className="font-bold">{data.nome}</h3>
                <p className="text-sm text-gray-400">{data.telefone}</p>
            </div>
        </div>
    );
}