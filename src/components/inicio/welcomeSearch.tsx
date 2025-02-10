import { pegarDataAtual } from "@/utils/pegarDataAtual";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

type Props = {
    type: "search" | "button";
}

export const WelcomeSearch = ({ type }: Props) => {

    if (type != "button") {
        return (
            <section className="container mx-auto flex flex-col gap-5 py-10">
                <div>
                    <h1 className="text-2xl">Seja bem vindo(a)</h1>
                    <p className="text-sm text-gray-400">{pegarDataAtual().week}, {pegarDataAtual().day} {pegarDataAtual().month} {pegarDataAtual().year}</p>
                </div>
                <div className="flex items-center ">
                    <Search className="absolute ml-3" size={20} />
                    <Input className="pl-10 h-14" placeholder="Encontre um estabelecimento" autoFocus/>
                </div>
            </section>
        );
    } else {
        return (
            <section className="container mx-auto flex flex-col gap-5 py-10">
                <div>
                    <h1 className="text-2xl">Seja bem vindo(a)</h1>
                    <p className="text-sm text-gray-400">{pegarDataAtual().week}, {pegarDataAtual().day} {pegarDataAtual().month} {pegarDataAtual().year}</p>
                </div>
                <Link href={"/buscar"}>
                    <div className="flex items-center ">
                        <Search className="absolute ml-3" size={20} />
                        <Input className="pl-10 h-14" placeholder="Encontre um estabelecimento" />
                    </div>
                </Link>

            </section>
        );
    }


}