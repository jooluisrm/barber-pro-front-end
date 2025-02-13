"use client"

import { useEffect, useState } from "react";
import { EmpresaSection1 } from "./empresaSection1";
import { EmpresaSection2 } from "./empresaSection2";
import { barbearias } from "@/dadosFakes/data";
import { useParams } from "next/navigation";
import { getBarbeariaNome } from "@/api/barbearia/barbeariaServices";
import { BarbeariaProps } from "@/types/type";

export const EmpresaMain = () => {

    const { nome } = useParams(); // Captura o ID da URL
    const [empresa, setEmpresa] = useState<BarbeariaProps | null>(null);

    useEffect(() => {
        if (nome) {
            const carregarEmpresa = async () => {
                try {
                    const dados = await getBarbeariaNome(`${nome}`);
                    setEmpresa(dados);
                    console.log(dados);
                } catch (error) {
                    console.log(error);
                }
            }
            carregarEmpresa();
        }
        
    }, [nome]);

    return (
        <main className="lg:flex gap-20 py-10">
            <EmpresaSection1 data={empresa}/>
            <EmpresaSection2 data={empresa}/>
        </main>
    );
}