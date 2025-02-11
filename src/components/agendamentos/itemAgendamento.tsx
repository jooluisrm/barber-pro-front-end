import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";


export const ItemAgendamento = () => {
    return (
        <div className="bg-[#F4F4F5] dark:bg-[#18181B] flex justify-between items-center rounded-2xl py-3 px-5 md:px-10">
            <div className="flex  items-center gap-3">
                <Avatar className="w-16 h-16">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                <div>
                    <h3 className="text-lg">Barbearia são caitano</h3>
                    <p className="text-gray-500 dark:text-gray-400 font-bold">Degrader - 17:45</p>
                </div>

            </div>
            <div className="text-center">
                <div className="flex flex-col justify-center mb-5">
                    <p className="text-xl">31</p>
                    <p className="text-sm font-bold">MAR</p>
                </div>
                <Button variant={"destructive"}><Trash2 /></Button>
            </div>
        </div>
    );
}