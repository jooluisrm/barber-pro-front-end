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
import { getBarbeariaServico } from "@/api/barbearia/barbeariaServices";
import { Servico } from "@/types/type";

type Props = {
    text: string;
    type: "services" | "products" | "profissionais" | "avaliacao";
    id?: string | undefined;
}

export const TabLayout = ({ text, type, id }: Props) => {

    const [getServicos, setServicos] = useState<Servico[] | null>(null);
    const [inputServicos, setInputServicos] = useState("");

    useEffect(() => {
        const carregarServicos = async () => {
            try {
                if (id) {
                    const data = await getBarbeariaServico(id);
                    if (data)
                        setServicos(data);
                    console.log(data)

                }
            } catch (error) {
                console.log(error);
            }

        }
        carregarServicos();
    }, [id])


    return (
        <section className="flex flex-col gap-5">
            <div>
                <h3 className="text-2xl">{text}</h3>
            </div>
            {
                type === "services" && (
                    <div className="flex items-center ">
                        <Search className="absolute ml-3" size={20} />
                        <Input
                            className="pl-10 h-14"
                            placeholder="Pesquisar"
                            value={inputServicos}
                            onChange={(e) => setInputServicos(e.target.value)}
                        />
                    </div>
                )
            }
            <div>
                {
                    type === "services" && !inputServicos ? <div>
                        {getServicos ? getServicos.map((item: Servico) => (
                            <ItemServico key={item.id} data={item} />
                        )) : <p className="text-gray-500">Servição não cadastrado</p>}
                    </div>
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
                    type === "profissionais" && <>
                        <ItemProfissional />
                        <ItemProfissional />
                        <ItemProfissional />
                        <ItemProfissional />
                    </>
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