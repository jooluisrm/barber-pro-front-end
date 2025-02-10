import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const ItemAvaliacao = () => {
    return (
        <div className="flex items-center justify-between gap-5 border-b pb-10 pt-5">
            <div className="flex items-center gap-5">
                <Avatar className="size-14">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div>
                    <h3 className="font-bold">Alessandro</h3>
                    <p className="text-sm text-gray-400">MSG digitada... </p>
                </div>
            </div>
            <div className="flex flex-col items-center dark:bg-[#18181B] p-2 rounded-xl">
                <h4 className="text-sm">Avaliação</h4>
                <div className="flex">
                    <Star size={15}/>
                    <Star size={15}/>
                    <Star size={15}/>
                    <Star size={15}/>
                    <Star size={15}/>
                </div>
            </div>
        </div>
    );
}