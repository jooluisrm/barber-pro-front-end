import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import wallpaperLight from "../../../public/assets/appBarberWallpeaperLight.png";
import wallpaperDark from "../../../public/assets/BarberProDarkV2-removebg (1).png";
import { EmpresaTabs } from "./empresaTabs";
import { BarbeariaProps } from "@/types/type";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type Props = {
    data: BarbeariaProps | null;
}

export const EmpresaSection1 = ({ data }: Props) => {
    return (
        <section className="flex-[2_2_50%] lg:flex-[2_2_20%]">
            <div className="flex justify-between items-center pb-5">
                <div className="flex items-center gap-5">
                    <Avatar className="size-24">
                        <AvatarImage
                            className="border-2 rounded-full dark:bg-slate-50 bg-white "
                            src={`../assets/BarberProIcone-removebg-preview.png`}
                        />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="font-bold text-md md:text-2xl">{data?.nome}</h2>
                        <div className="flex items-center gap-1">
                            <Star size={15} />
                            <span className="text-sm">5.0</span>
                        </div>
                    </div>
                </div>
                <div>
                    <Button className="md:text-lg bg-gradient-to-r from-yellow-300 to-yellow-600 font-semibold transition-all animate-pulse duration-2000 hover:from-yellow-400 hover:to-yellow-700">
                        Agendar Agora
                    </Button>
                </div>
            </div>
            <Image alt="" src={wallpaperDark} className="rounded-md dark:bg-neutral-800 bg-[#F4F4F5]" />
            <EmpresaTabs id={data?.id} />
        </section>
    );
}