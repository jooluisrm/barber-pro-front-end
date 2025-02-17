"use client"

import { useEffect, useState } from "react";
import { EmpresaSection1 } from "./empresaSection1";
import { EmpresaSection2 } from "./empresaSection2";
import { useParams } from "next/navigation";
import { getBarbeariaHorarios, getBarbeariaNome, getBarbeariaPagamentos } from "@/api/barbearia/barbeariaServices";
import { BarbeariaProps, FormaPagamento, HorarioFuncionamento } from "@/types/type";

export const EmpresaMain = () => {

    const { nome } = useParams(); // Captura o ID da URL
    const [empresa, setEmpresa] = useState<BarbeariaProps | null>(null);
    const [horarios, setHorarios] = useState<HorarioFuncionamento[] | null>(null);
    const [pagamentos, setPagamentos] = useState<FormaPagamento[] | null>(null);

    useEffect(() => {
        if (nome) {
            const carregarEmpresa = async () => {
                try {
                    const dados: BarbeariaProps = await getBarbeariaNome(nome.toString());
                    setEmpresa(dados);
                } catch (error) {
                    console.log(error);
                }
            };

            carregarEmpresa();
        }
    }, [nome]); // Executa apenas quando "nome" muda

    useEffect(() => {
        if (empresa) { // Só executa quando empresa não for null
            const carregarHorariosBarbearia = async () => {
                try {
                    const dados: HorarioFuncionamento[] = await getBarbeariaHorarios(empresa.id);
                    console.log(dados);
                    setHorarios(dados);
                } catch (error) {
                    console.log(error);
                }
            };
            const carregarFormasPagamento = async () => {
                try {
                    const dados: FormaPagamento[] = await getBarbeariaPagamentos(empresa.id);
                    setPagamentos(dados);
                } catch (error) {
                    console.log(error);
                }
            }

            carregarFormasPagamento();
            carregarHorariosBarbearia();
        }
    }, [empresa]); // Executa quando "empresa" for atualizado


    return (
        <main className="lg:flex gap-20 py-10">
            <EmpresaSection1 data={empresa} />
            <EmpresaSection2 data={empresa} horariosBarbearia={horarios} formasPagamento={pagamentos}/>
        </main>
    );
}