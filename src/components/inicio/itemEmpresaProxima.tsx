import { ChevronRight, Locate, LocateFixed, MapPin } from "lucide-react";
import Link from "next/link";
import { Barbearia } from "@/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import imgIcon from "../../../public/assets/BarberProIcone-removebg-preview.png";

type Props = {
    data: Barbearia;
}

export const ItemEmpresaProxima = ({ data }: Props) => {
    
    return (
        <Link href={`empresa/${data?.nome}`}>
            <div className="flex justify-between items-center p-4 rounded-xl overflow-hidden max-w-[450px] border bg-[#f4f4f5] dark:bg-[#18181b] transition-all hover:scale-105 dark:hover:border-white hover:border-black">
                <div className="flex items-center gap-3">
                    <Avatar className="size-20">
                        <AvatarImage
                            className="border-2 rounded-full dark:bg-slate-50 bg-white"
                            src={`${data.fotoPerfil || "favicon.png"}`}
                        />
                        <AvatarFallback>{data.nome.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>

                    <div>
                        <h2>{data?.nome}</h2>
                        <div className="flex flex-col gap-1">
                            <p className="text-gray-500 dark:text-gray-400 w-44 lg:w-52  overflow-hidden text-nowrap text-sm truncate">{data?.endereco}</p>
                            <div className="flex gap-1 items-center text-sm">

                                {data?.distancia && (<>
                                    <span><MapPin className="text-red-500" size={20} /></span>
                                    <span>
                                        {data.distancia < 1
                                            ? `${(data.distancia * 1000).toFixed(0)} m`
                                            : `${data.distancia.toFixed(2)} km`}
                                    </span>
                                </>)}
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