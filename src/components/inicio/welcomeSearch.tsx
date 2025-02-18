"use client"

import { pegarDataAtual } from "@/utils/pegarDataAtual";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

type Props = {
    type: "search" | "button";
    inputBuscar: string;
    setInputBuscar: (e: string) => void;
}

export const WelcomeSearch = ({ type, inputBuscar, setInputBuscar }: Props) => {



    if (type != "button") {
        const { user } = useAuth();

        return (
            <section className="container mx-auto flex flex-col gap-5 py-10 border-b-4">
                <div>
                    <h1 className="text-2xl">
                        {user != null ? "Olá, " : "Seja bem vindo(a)"}
                        <span className="text-[#0072bc]">{user != null && `${user.nome.split(" ")[0]}`}</span>
                    </h1>
                    <p className="text-sm text-gray-400">{pegarDataAtual().week}, {pegarDataAtual().day} {pegarDataAtual().month} {pegarDataAtual().year}</p>
                </div>
                <div className="flex items-center ">
                    <Search className="absolute ml-3" size={20} />
                    <Input className="pl-10 h-14" placeholder="Pesquisar pelo nome" autoFocus />
                </div>
            </section>
        );
    } else {

        const { user } = useAuth();

        return (
            <section className="container mx-auto flex flex-col gap-5 py-10">
                <div>
                    <h1 className="text-2xl">
                        {user != null ? "Olá, " : "Seja bem vindo(a)"}
                        <span className="text-[#0072bc]">{user != null && `${user.nome.split(" ")[0]}`}</span>
                    </h1>
                    <p className="text-sm text-gray-400">{pegarDataAtual().week}, {pegarDataAtual().day} {pegarDataAtual().month} {pegarDataAtual().year}</p>
                </div>
                <Link href={"/buscar"}>
                    <div className="flex items-center ">
                        <Search className="absolute ml-3" size={20} />
                        <Input className="pl-10 h-14" placeholder="Encontre um estabelecimento" value={inputBuscar} onChange={(e) => setInputBuscar(e.target.value)}/>
                    </div>
                </Link>

            </section>
        );
    }


}