import { Search, Star } from "lucide-react";
import { Input } from "../ui/input";
import { ItemServico } from "./itemServico";
import { ItemProfissional } from "./itemProfissional";
import { ItemProduto } from "./itemProduto";
import { ItemAvaliacao } from "./itemAvaliacao";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

type Props = {
    text: string;
    type: "services" | "products" | "profissionais"| "avaliacao";
}

export const TabLayout = ({ text, type }: Props) => {
    return (
        <section className="flex flex-col gap-5">
            <div>
                <h3 className="text-2xl">{text}</h3>
            </div>
            <div className="flex items-center ">
                <Search className="absolute ml-3" size={20} />
                <Input className="pl-10 h-14" placeholder="Pesquisar" />
            </div>
            <div>
                {
                    type === "services" && <>
                        <ItemServico />
                        <ItemServico />
                        <ItemServico />
                        <ItemServico />
                    </>
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
                        <Textarea placeholder="Comentário"/>
                        <Button className="font-bold">Enviar Avaliação</Button>
                        </div>
                        
                    </div>
                </>
            }
        </section>
    );
}