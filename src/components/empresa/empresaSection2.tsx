import { Phone, Send, Smartphone } from "lucide-react";
import { ItemDiaAtendimento } from "./itemDiaAtendimento";
import { ItemPagamento } from "./itemPagamento";
import { ItemRedesSociais } from "./itemRedesSociais";
import { Barbearia } from "@/types/type";

type Props = {
    data: Barbearia | null;
}

export const EmpresaSection2 = ({ data }: Props) => {
    return (
        <section className="flex-[2_2_0%] dark:bg-[#18181B] dark:shadow-none bg-white shadow-2xl rounded-3xl py-10 px-5 mt-10 lg:mt-0 max-h-[1155px]">

            <div className="border-b">
                <h3 className="font-bold">Localização</h3>
                <div className="flex justify-between py-5">
                    <p className="max-w-72 text-gray-400 text-sm">{data?.endereco}</p>
                    <button className="dark:bg-black border dark:border-white p-3 rounded-full"><Send /></button>
                </div>
            </div>

            <div className="border-b py-5">
                <h3 className="font-bold pb-5">Horário de atendimento</h3>
                <div>
                    <ItemDiaAtendimento />
                    <ItemDiaAtendimento />
                    <ItemDiaAtendimento />
                    <ItemDiaAtendimento />
                    <ItemDiaAtendimento />
                    <ItemDiaAtendimento />
                </div>
            </div>

            <div className="py-5">
                <h3 className="font-bold pb-5">Formas de pagamento</h3>
                <div className="flex flex-wrap gap-5">
                    <ItemPagamento />
                    <ItemPagamento />
                    <ItemPagamento />
                    <ItemPagamento />
                </div>
            </div>

            <div className="py-5">
                <h3 className="font-bold pb-5">Redes Sociais</h3>
                <div className="flex flex-wrap gap-5">
                    <ItemRedesSociais />
                    <ItemRedesSociais />
                </div>
            </div>

            <div className="py-5">
                <h3 className="font-bold pb-5">Contato</h3>
                <div>
                    <div className="flex flex-col gap-5">
                        <div className="bg-[#F4F4F5] dark:bg-[#27272A] p-3 rounded-full flex gap-5 max-w-52"><Smartphone /><span className="text-gray-500 dark:text-white">{data?.telefone}</span></div>
                        <div className="bg-[#F4F4F5] dark:bg-[#27272A] p-3 rounded-full flex gap-5 max-w-52"><Phone /><span className="text-gray-500 dark:text-white">{data?.telefone}</span></div>
                    </div>
                </div>
            </div>
        </section>
    );
}