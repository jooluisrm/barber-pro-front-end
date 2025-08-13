import { usePerfil } from "@/api/usuario/usuarioService";
import { UserCircle2, UserRound } from "lucide-react";
import { useEffect, useState } from "react";



export const Section1 = () => {

    const { perfil, loading, error } = usePerfil();

    return (
        <section className="">
            <div className="border-b pb-5 overflow-hidden">
                <div className="">
                    <UserCircle2 size={100} />
                </div>
                <div>
                    <p className="text-xl truncate text-nowrap">{perfil?.nome}</p>
                    <p className="text-gray-400 text-sm">{perfil?.email}</p>
                </div>
            </div>
            <div>
                <div className="flex gap-2 items-center p-2 text-[#0367A7] font-bold">
                    <UserRound /> Meus Dados
                </div>
            </div>
        </section>
    );
}