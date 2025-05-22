"use client"

import { pegarDataAtual } from "@/utils/pegarDataAtual";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

type SearchProps = {
    type: "search";
    inputBuscar: string;
    setInputBuscar: (e: string) => void;
}

type ButtonProps = {
    type: "button";
}

type Props = SearchProps | ButtonProps;

export const WelcomeSearch = (props: Props) => {
    const { user } = useAuth();
    const dataAtual = pegarDataAtual();

    return (
        <section className={`container mx-auto flex flex-col gap-5 py-10 ${props.type === "search" ? "border-b-4" : ""}`}>
            <div>
                <h1 className="text-2xl">
                    {user != null ? "Olá, " : "Seja bem vindo(a) "}
                    <span className="text-[#0072bc]">{user != null && `${user.nome.split(" ")[0]}`}</span>
                </h1>
                <p className="text-sm text-gray-400">
                    {dataAtual.week}, {dataAtual.day} {dataAtual.month} {dataAtual.year}
                </p>
            </div>

            {props.type === "search" ? (
                <div className="flex items-center">
                    <Search className="absolute ml-3" size={20} />
                    <Input
                        className="pl-10 h-14"
                        placeholder="Pesquisar pelo nome"
                        autoFocus
                        value={props.inputBuscar}
                        onChange={(e) => {
                            console.log(e.target.value);
                            props.setInputBuscar(e.target.value);
                        }}
                    />
                </div>
            ) : (
                <Link href="/buscar">
                    <div className="flex items-center">
                        <Search className="absolute ml-3" size={20} />
                        <Input
                            className="pl-10 h-14"
                            placeholder="Encontre um estabelecimento"
                            readOnly
                        />
                    </div>
                </Link>
            )}
        </section>
    );
}