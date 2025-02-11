import { ChevronRight, Locate, LocateFixed, MapPin } from "lucide-react";
import Image from "next/image";
import iconBarber from "../../../public/assets/barberProIcon.png";
import { Barbearia } from "@/types/type";
import Link from "next/link";

type Props = {
    data?: Barbearia;
}

export const ItemEmpresaProxima = ({ data }: Props) => {
    // img, Endereço, nome, km
    return (
        <Link href={``}>
            <div className="flex justify-between items-center p-4 rounded-xl overflow-hidden max-w-[450px] border bg-[#f4f4f5] dark:bg-[#18181b] transition-all hover:scale-105 dark:hover:border-white hover:border-black">
                <div className="flex items-center gap-3">
                    <Image alt="" src={iconBarber} width={70} className="rounded-full border-2 border-black dark:border-white"></Image>

                    <div>
                        <h2>Brbeariaaaaa</h2>
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-500 dark:text-gray-400 w-44 lg:w-52  overflow-hidden text-nowrap text-sm">Avenida goias , 940 - Lado do correio - 38660-000 Centro - Buritis/MG</p>
                            <div className="flex gap-1 items-center text-sm">
                                <span><MapPin className="text-red-500" size={20} /></span>
                                12 km
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center rounded-full p-2 bg-gray-200 dark:bg-[#27272A] transition-all hover:scale-110 ">
                    <ChevronRight className="text-green-600" />
                </div>
            </div>
        </Link>
    );
}