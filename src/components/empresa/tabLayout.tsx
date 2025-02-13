"use client"

import { Search, Star } from "lucide-react";
import { Input } from "../ui/input";
import { ItemServico } from "./itemServico";
import { ItemProfissional } from "./itemProfissional";
import { ItemProduto } from "./itemProduto";
import { ItemAvaliacao } from "./itemAvaliacao";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { getBarbeariaProfissionais, getBarbeariaServico } from "@/api/barbearia/barbeariaServices";
import { Profissional, Servico } from "@/types/type";
import { PesquisarItem } from "./inputPesquisarItem";

type Props = {
    text: string;
    type: "services" | "products" | "profissionais" | "avaliacao";
    id?: string | undefined;
}

export const TabLayout = ({ text, type, id }: Props) => {

    const [getServicos, setServicos] = useState<Servico[] | null>(null);
    const [inputServicos, setInputServicos] = useState("");

    const [getProfissionais, setProfissionais] = useState<Profissional[] | null>(null);
    const [inputProfissionais, setInputProfissionais] = useState("");

    useEffect(() => {
        const carregarServicos = async () => {
            try {
                if (id && type === "services") {
                    const data = await getBarbeariaServico(id);
                    if (data) setServicos(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        const carregarBarbeiro = async () => {
            try {
                if (id && type === "profissionais") {
                    const data = await getBarbeariaProfissionais(id);
                    if (data) {
                        setProfissionais(data);
                        console.log(data);  // Verifique no console se o array de profissionais está correto
                    }
                }
            } catch (error) {
                console.log(error);
            }
        };

        carregarBarbeiro();
        carregarServicos();
    }, [id]);



    return (
        <section className="flex flex-col gap-5">
            <div>
                <h3 className="text-2xl">{text}</h3>
            </div>
            {type === "services" && <PesquisarItem getInput={inputServicos} setInput={setInputServicos} />}
            {type === "profissionais" && <PesquisarItem getInput={inputProfissionais} setInput={setInputProfissionais} />}
            <div>
                {
                    type === "services" && !inputServicos ? (
                        <div>
                            {getServicos ? getServicos.map((item: Servico) => (
                                <ItemServico key={item.id} data={item} />
                            )) : <p className="text-gray-500">Servição não cadastrado</p>}
                        </div>
                    )
                        :
                        <div>
                            {
                                getServicos && getServicos.filter((item: Servico) =>
                                    item.nome.toLowerCase().includes(inputServicos.toLowerCase().trim())
                                ).length > 0 ? (
                                    getServicos.filter((item: Servico) =>
                                        item.nome.toLowerCase().includes(inputServicos.toLowerCase().trim())
                                    ).map((item: Servico) => (
                                        <ItemServico key={item.id} data={item} />
                                    ))
                                ) : (
                                    inputServicos.length > 0 && (
                                        <p className="text-gray-500">Serviço não encontrado</p>
                                    )
                                )
                            }
                        </div>
                }
                {
                    type === "profissionais" && !inputProfissionais ? (
                        <div>
                            {getProfissionais && getProfissionais.length > 0 ? (
                                getProfissionais.map((item: Profissional) => (
                                    <ItemProfissional key={item.id} data={item} />
                                ))
                            ) : (
                                <p className="text-gray-500">Profissionais não cadastrados</p>
                            )}
                        </div>
                    ) :
                        <div>
                            {
                                getProfissionais && getProfissionais.filter((item: Profissional) =>
                                    item.nome.toLowerCase().includes(inputProfissionais.toLowerCase().trim())
                                ).length > 0 ? (
                                    getProfissionais.filter((item: Profissional) =>
                                        item.nome.toLowerCase().includes(inputProfissionais.toLowerCase().trim())
                                    ).map((item: Profissional) => (
                                        <ItemProfissional key={item.id} data={item} />
                                    ))
                                ) : (
                                    inputServicos.length > 0 && (
                                        <p className="text-gray-500">Profissional não encontrado</p>
                                    )
                                )
                            }
                        </div>
                }

                {
                    type === "products" && <>
                        <ItemProduto />
                        <ItemProduto />
                        <ItemProduto />
                        <ItemProduto />
                    </>
                }
                {
                    type === "avaliacao" && <>
                        <ItemAvaliacao />
                        <ItemAvaliacao />
                        <ItemAvaliacao />
                        <ItemAvaliacao />
                    </>
                }
            </div>
            {
                type === "avaliacao" && <>
                    <div className="flex flex-col gap-3">
                        <h2 className="font-bold">Avaliar estabelecimento</h2>
                        <div className="flex">
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                            <Star />
                        </div>
                        <div className="flex flex-col items-end gap-5">
                            <Textarea placeholder="Comentário" />
                            <Button className="font-bold">Enviar Avaliação</Button>
                        </div>

                    </div>
                </>
            }
        </section>
    );
}