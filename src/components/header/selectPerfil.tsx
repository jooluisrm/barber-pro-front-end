"use client"

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
import { AlertExit } from "./alertExit";
import { useState } from "react";



export const SelectPerfil = () => {

    const [open, setOpen] = useState(false);


    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="outline-none">
                <ButtonPerfil />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <div className="max-w-[120px] text-md overflow-hidden text-nowrap">João Luís Rodrigues de Moura</div>
                    <div className="text-[12px]">joao@gmail.com</div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="border-b w-full"><UserRound /> Perfil</DropdownMenuItem>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-red-600 w-full">
                    <AlertExit onConfirm={() => setOpen(false)} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    );
}