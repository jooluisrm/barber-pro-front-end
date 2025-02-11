import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const ItemSelecionarProfissional = () => {
    return (
        <div className="flex flex-col items-center gap-1">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <p className="text-sm">João Gabriel</p>
        </div>
    );
}