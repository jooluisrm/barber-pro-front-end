import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const ItemProduto = () => {
    return (
        <div className="flex items-center justify-between border-b pb-10 pt-5">
            <div className="flex items-center gap-5">
                <Avatar className="size-14">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-bold">Bebida</h3>
                    <p className="text-sm text-green-700 font-bold">R$ 3,00</p>
                </div>
            </div>
            <p className="text-sm text-gray-400">Bebida especial para clientes</p>
        </div>
    );
}