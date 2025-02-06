"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    text: string;
    rota: string;
};

export const LiMenu = ({ text, rota }: Props) => {
    const pathname = usePathname();

    // Corrigindo para verificar a igualdade exata da rota
    const isActive = pathname === (rota.startsWith("/") ? rota : `/${rota}`);

    return (
        <Link href={rota.startsWith("/") ? rota : `/${rota}`}>
            <li
                className={`${isActive ? "text-[#0072bc]" : "" } hover:text-[#0072bc] transition-all duration-150 cursor-pointer`}
            >
                {text}
            </li>
        </Link>
    );
};
