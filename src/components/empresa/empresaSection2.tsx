import { Phone, Send, Smartphone } from "lucide-react";
import { ItemDiaAtendimento } from "./itemDiaAtendimento";
import { ItemPagamento } from "./itemPagamento";
import { ItemRedesSociais } from "./itemRedesSociais";
import { BarbeariaProps, FormaPagamento, HorarioFuncionamento, RedeSocial } from "@/types/type";
import Link from "next/link";
import { ItemContato } from "./itemContato";

type Props = {
    data: BarbeariaProps | null;
    horariosBarbearia: HorarioFuncionamento[] | null;
    formasPagamento: FormaPagamento[] | null;
    redesSociais: RedeSocial[] | null;
}

export const EmpresaSection2 = ({ data, horariosBarbearia, formasPagamento, redesSociais }: Props) => {
    return (
        <section className="flex-[2_2_0%] dark:bg-[#18181B] dark:shadow-none bg-white shadow-2xl rounded-3xl py-10 px-5 mt-10 lg:mt-0 max-h-[1155px]">

            <div className="border-b">
                <h3 className="font-bold">Localização</h3>
                <div className="flex justify-between py-5">
                    <p className="max-w-72 text-gray-400 text-sm">{data?.endereco}</p>
                    <Link
                        href={`https://www.google.com/maps/place/${data?.latitude},${data?.longitude}`}
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="dark:bg-black border dark:border-white p-3 rounded-full"><Send /></button>
                    </Link>
                </div>
            </div>

            <div className="border-b py-5">
                <h3 className="font-bold pb-5">Horário de atendimento</h3>
                <div>
                    {
                        horariosBarbearia ? horariosBarbearia.map((item: HorarioFuncionamento) => (
                            <ItemDiaAtendimento key={item.id} data={item} />
                        )) :
                            <p className="text-gray-500 dark:text-gray-400">Sem Informação!</p>
                    }
                </div>
            </div>

            <div className="py-5">
                <h3 className="font-bold pb-5">Formas de pagamento</h3>
                <div className="flex flex-wrap gap-5">
                    {
                        formasPagamento ? formasPagamento.map((item: FormaPagamento) => (
                            <ItemPagamento key={item.id} data={item} />
                        )) :
                            <p className="text-gray-500 dark:text-gray-400">Sem Informação!</p>
                    }
                </div>
            </div>

            <div className="py-5">
                <h3 className="font-bold pb-5">Redes Sociais</h3>
                <div className="flex flex-wrap gap-5">
                    {
                        redesSociais ? redesSociais.map((item: RedeSocial) => (
                            <ItemRedesSociais key={item.id} data={item} />
                        )) :
                            <p className="text-gray-500 dark:text-gray-400">Sem Informação!</p>
                    }
                </div>
            </div>

            <div className="py-5">
                <h3 className="font-bold pb-5">Contato</h3>
                <div>
                    <div className="flex flex-col gap-5">
                        {
                            !data?.celular && !data?.telefone && <p className="text-gray-500 dark:text-gray-400">Sem Informação!</p>
                        }
                        {
                            data?.celular && <ItemContato type="cel" celular={data?.celular} />
                        }
                        {
                            data?.telefone && <ItemContato type="tel" telefone={data?.telefone} />
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}