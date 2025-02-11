import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ButtonPerfil } from "./buttonPerfil";
import { LogOut, UserRound } from "lucide-react";



export const SelectPerfil = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <ButtonPerfil />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <div className="max-w-[120px] text-md overflow-hidden text-nowrap">João Luís Rodrigues de Moura</div>
                    <div className="text-[12px]">joao@gmail.com</div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="border-b"><UserRound /> Perfil</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600"><LogOut /> Sair</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    );
}