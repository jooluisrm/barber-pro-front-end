"use client"

import { useEffect, useState } from "react";
import { EmpresaSection1 } from "./empresaSection1";
import { EmpresaSection2 } from "./empresaSection2";
import { Barbearia } from "@/types/type";
import { barbearias } from "@/dadosFakes/data";
import { useParams } from "next/navigation";

export const EmpresaMain = () => {

    const { id } = useParams(); // Captura o ID da URL
    const [empresa, setEmpresa] = useState<Barbearia | null>(null);

    useEffect(() => {
        if (id) {
            const idNumero = Number(id); // Converte para número
            const empresaEncontrada: any = barbearias.find((barbearia) => barbearia.id === idNumero);

            if (empresaEncontrada) {
                setEmpresa(empresaEncontrada);
            }
        }
    }, [id]);

    return (
        <main className="lg:flex gap-20 py-10">
            <EmpresaSection1 data={empresa}/>
            <EmpresaSection2 data={empresa}/>
        </main>
    );
}