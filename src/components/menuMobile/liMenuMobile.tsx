"use client"

import { Calendar, CircleUserRound, House, Search } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    text: "Início" | "Buscar" | "Agendamentos" | "Perfil";
    rota: string;
};

export const LiMenuMobile = ({rota, text}: Props) => {

    const pathname = usePathname();

    // Corrigindo para verificar a igualdade exata da rota
    const isActive = pathname === (rota.startsWith("/") ? rota : `/${rota}`);

    return (
        <Link href={rota.startsWith("/") ? rota : `/${rota}`}>
            <li className={`${isActive ? "text-[#0072bc]" : "" } hover:text-[#0072bc] transition-all duration-150 cursor-pointer flex flex-col items-center justify-center`}>
                {text === "Início" && <House className="mb-1" />}
                {text === "Buscar" && <Search className="mb-1" />}
                {text === "Agendamentos" && <Calendar className="mb-1" />}
                {text === "Perfil" && <CircleUserRound className="mb-1" />}
                <span>{text}</span>
            </li>
        </Link>
    );
}