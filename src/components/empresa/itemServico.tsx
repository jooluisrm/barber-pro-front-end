import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock } from "lucide-react";
import { Button } from "../ui/button";


export const ItemServico = () => {
    return (
        <div className="flex items-center justify-between border-b pb-10 pt-5">
            <div className="flex items-center gap-5">
                <Avatar className="size-14">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-bold">Corte</h3>
                    <p className="text-sm text-green-700 font-bold">R$ Consultar</p>
                </div>
            </div>

            <div className="flex items-center gap-1 mt-5">
                <Clock size={15}/>
                <span className="text-sm font-bold">15 min</span>
            </div>
            <div>
                <Button className="font-bold">Agendar</Button>
            </div>
        </div>
    );
}