"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ButtonPerfil } from "./buttonPerfil";
import { UserRound } from "lucide-react";
import { AlertExit } from "./alertExit";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

export const SelectPerfil = () => {
    const [open, setOpen] = useState(false);

    const { user, token } = useAuth();

    if(token)
    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger className="outline-none">
                <ButtonPerfil />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>
                    <div className="max-w-[120px] text-md overflow-hidden text-nowrap">
                        {user?.nome}
                    </div>
                    <div className="text-[12px]">{user?.email}</div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="border-b w-full"><UserRound /> Perfil</DropdownMenuItem>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()} className="text-red-600 w-full">
                    <AlertExit onConfirm={() => setOpen(false)} />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
