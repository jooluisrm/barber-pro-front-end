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
import { getBarbeariaAvaliacoes, getBarbeariaProdutos, getBarbeariaProfissionais, getBarbeariaServico, postBarbeariaAvaliacao } from "@/api/barbearia/barbeariaServices";
import { Avaliacao, Produto, Profissional, Servico } from "@/types/type";
import { PesquisarItem } from "./inputPesquisarItem";
import { ItemComponeteTab } from "./itemComponenteTab";
import { useAuth } from "@/contexts/AuthContext";
import { StarIcon } from "./starIcon";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export type Types = "services" | "products" | "profissionais" | "avaliacao";


type Props = {
    text: string;
    type: Types;
    id?: string | undefined;
}

const RegisterFormSchema = z.object({
    comentario: z.string().max(160, { message: "Maximo de caracteres atingido (160)" }).optional()
});

export const TabLayout = ({ text, type, id }: Props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(RegisterFormSchema)
    });

    const { user } = useAuth();

    const [loading, setLoading] = useState(false);

    const [getServicos, setServicos] = useState<Servico[] | null>(null);
    const [inputServicos, setInputServicos] = useState("");

    const [getProfissionais, setProfissionais] = useState<Profissional[] | null>(null);
    const [inputProfissionais, setInputProfissionais] = useState("");

    const [getProdutos, setProdutos] = useState<Produto[] | null>(null);
    const [inputProdutos, setInputProdutos] = useState("");

    const [getAvaliacoes, setAvaliacoes] = useState<Avaliacao[] | null>(null);
    const [inputAvaliacoes, setInputAvaliacoes] = useState("");

    const carregarAvaliacoes = async () => {
        setLoading(true);
        try {
            if (id && type === "avaliacao") {
                const data = await getBarbeariaAvaliacoes(id);
                if (data) {
                    setAvaliacoes(data);
                    setLoading(false);
                }
            }
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

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

        carregarAvaliacoes();
        carregarProdutos();
        carregarBarbeiro();
        carregarServicos();
    }, [id]);

    const [notaAvaliacao, setNotaAvaliacao] = useState<number>(0);
    const [textarea, setTextArea] = useState("");

    const avaliarEstrela = (key: number) => {
        if (key)
            setNotaAvaliacao(key);
        console.log(key)
    }

    const handleAvaliarForm = async (data: any) => {
        if (notaAvaliacao !== 0 && id && user) {
            try {
                const { comentario } = data;
                await postBarbeariaAvaliacao(id, user.id, notaAvaliacao, comentario);
    
                toast.success("Avaliação enviada com sucesso!", {
                    action: {
                        label: "Fechar",
                        onClick: () => console.log("Toast fechado"),
                    },
                });
                setNotaAvaliacao(0);
                setTextArea("");
                carregarAvaliacoes()
    
            } catch (error: any) {
                toast.error(error.message || "Erro ao enviar avaliação.", {
                    action: {
                        label: "Fechar",
                        onClick: () => console.log("Toast fechado"),
                    },
                });
            }
        } else {
            toast.warning("Selecione uma nota antes de enviar!", {
                action: {
                    label: "Fechar",
                    onClick: () => console.log("Toast fechado"),
                },
            });
        }
    };


    return (
        <section className="flex flex-col gap-5">
            <div>
                <h3 className="text-2xl">{text}</h3>
            </div>
            {type === "services" && <PesquisarItem getInput={inputServicos} setInput={setInputServicos} />}
            {type === "profissionais" && <PesquisarItem getInput={inputProfissionais} setInput={setInputProfissionais} />}
            {type === "products" && <PesquisarItem getInput={inputProdutos} setInput={setInputProdutos} />}
            <div className="">

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
                    type === "avaliacao" && (
                        <ItemComponeteTab
                            idBarbearia={`${id}`}
                            type="avaliacao"
                            inputTab={inputAvaliacoes}
                            getTab={getAvaliacoes}
                            textErroCadastro="Nenhuma avaliação encontrada" // Mensagem quando não houver serviços
                            textErroBusca="Nenhuma avaliação encontrada" // Mensagem quando não encontrar serviços com o nome
                            loading={loading}
                        />
                    )
                }
                {loading && <p className="animate-pulse text-center dark:text-gray-400">Carregando...</p>}
            </div>
            {
                type === "avaliacao" && user && <>
                    <form onSubmit={handleSubmit(handleAvaliarForm)} className="flex flex-col gap-3">
                        <h2 className="font-bold">Avaliar estabelecimento</h2>
                        <div className="flex">
                            {
                                new Array(5).fill(null).map((_, index) => (
                                    <StarIcon
                                        type="button"
                                        key={index}
                                        size={25}
                                        isFilled={index < notaAvaliacao} // Verifica se a estrela deve ser preenchida
                                        value={index + 1} // Passa o valor da estrela
                                        avaliarEstrela={avaliarEstrela} // Passa a função de avaliação
                                    />
                                ))
                            }
                        </div>
                        <div className="flex flex-col items-end gap-5">
                            <Textarea maxLength={160} placeholder="Comentário" {...register('comentario')} value={textarea} onChange={(e) => setTextArea(e.target.value)}/>
                            {errors.comentario && <p className="text-sm text-red-600 mt-1">* {errors.comentario.message as string}</p>}
                            <Button type="submit" className="font-bold">Enviar Avaliação</Button>
                        </div>
                    </form>
                </>
            }
        </section>
    );
}