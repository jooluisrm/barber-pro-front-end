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
import { getBarbeariaProdutos, getBarbeariaProfissionais, getBarbeariaServico } from "@/api/barbearia/barbeariaServices";
import { Produto, Profissional, Servico } from "@/types/type";
import { PesquisarItem } from "./inputPesquisarItem";
import { ItemComponeteTab } from "./itemComponenteTab";

export type Types = "services" | "products" | "profissionais" | "avaliacao";


type Props = {
    text: string;
    type: Types;
    id?: string | undefined;
}

export const TabLayout = ({ text, type, id }: Props) => {
    const [loading, setLoading] = useState(false);

    const [getServicos, setServicos] = useState<Servico[] | null>(null);
    const [inputServicos, setInputServicos] = useState("");

    const [getProfissionais, setProfissionais] = useState<Profissional[] | null>(null);
    const [inputProfissionais, setInputProfissionais] = useState("");

    const [getProdutos, setProdutos] = useState<Produto[] | null>(null);
    const [inputProdutos, setInputProdutos] = useState("");

    useEffect(() => {
        const carregarServicos = async () => {
            setLoading(true);
            try {
                if (id && type === "services") {
                    const data = await getBarbeariaServico(id);
                    if (data) setServicos(data);
                    setLoading(false);
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        const carregarBarbeiro = async () => {
            setLoading(true);
            try {
                if (id && type === "profissionais") {
                    const data = await getBarbeariaProfissionais(id);
                    if (data) {
                        setProfissionais(data);
                        console.log(data); // Verifique no console se o array de profissionais está correto
                        setLoading(false);
                    }
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        };

        const carregarProdutos = async () => {
            setLoading(true);
            try {
                if (id && type === "products") {
                    const data = await getBarbeariaProdutos(id);
                    if (data) {
                        setProdutos(data);
                        setLoading(false);
                    }
                }
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }

        carregarProdutos();
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
            {type === "products" && <PesquisarItem getInput={inputProdutos} setInput={setInputProdutos} />}
            <div>

                {type === "services" && (
                    <ItemComponeteTab
                        idBarbearia={`${id}`}
                        type="services" // Ou "professionals"
                        inputTab={inputServicos} // O valor de busca que o usuário digitou
                        getTab={getServicos} // O estado com os dados dos serviços ou profissionais
                        textErroCadastro="Nenhum serviço cadastrado" // Mensagem quando não houver serviços
                        textErroBusca="Nenhum serviço encontrado com esse nome" // Mensagem quando não encontrar serviços com o nome
                        loading={loading}
                    />
                )}

                {type === "profissionais" && (
                    <ItemComponeteTab
                        idBarbearia={`${id}`}
                        type="profissionais"
                        inputTab={inputProfissionais}
                        getTab={getProfissionais}
                        textErroCadastro="Nenhum profissional cadastrado" // Mensagem quando não houver serviços
                        textErroBusca="Nenhum profissional encontrado com esse nome" // Mensagem quando não encontrar serviços com o nome
                        loading={loading}
                    />
                )}

                {
                    type === "products" && (
                        <ItemComponeteTab
                            idBarbearia={`${id}`}
                            type="products"
                            inputTab={inputProdutos}
                            getTab={getProdutos}
                            textErroCadastro="Nenhum produto cadastrado" // Mensagem quando não houver serviços
                            textErroBusca="Nenhum produto encontrado com esse nome" // Mensagem quando não encontrar serviços com o nome
                            loading={loading}
                        />
                    )
                }
                {
                    type === "avaliacao" && <>
                        <ItemAvaliacao />
                        <ItemAvaliacao />
                        <ItemAvaliacao />
                        <ItemAvaliacao />
                    </>
                }
                {loading && <p className="animate-pulse text-center dark:text-gray-400">Carregando...</p>}
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