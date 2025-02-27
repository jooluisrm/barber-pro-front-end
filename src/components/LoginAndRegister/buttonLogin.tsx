"use client"

import { useAuth } from "@/contexts/AuthContext";
import { CircleUserRound } from "lucide-react";
import { useEffect } from "react";

type Props = {
    openModal: VoidFunction;
}

export const ButtonLogin = ({ openModal }: Props) => {
    const { user, token } = useAuth();

    
    if (!token)
        return (
            <button onClick={openModal} className='dark:bg-[#27272a] dark:shadow-none shadow-gray-400 shadow py-3 px-3 rounded-full my-2 cursor-pointer hover:text-[#0072bc] transition-all duration-150'>
                <div className='flex items-center justify-center gap-2'><CircleUserRound /><p className='font-bold'>Entrar</p></div>
            </button>
        );
}