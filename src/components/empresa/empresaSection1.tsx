import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import iconBarber from "../../../public/assets/barberProIcon.png";
import wallpaperLight from "../../../public/assets/appBarberWallpeaperLight.png";
import wallpaperDark from "../../../public/assets/appBarberWallpeaper.png";
import { EmpresaTabs } from "./empresaTabs";
import { BarbeariaProps } from "@/types/type";

type Props = {
    data: BarbeariaProps | null;
}

export const EmpresaSection1 = ({ data }: Props) => {
    return (
        <section className="flex-[2_2_50%] lg:flex-[2_2_20%]">
            <div className="flex justify-between items-center pb-5">
                <div className="flex items-center gap-5">
                    <Image src={iconBarber} alt="icone barbearia" width={60} className="rounded-full" />
                    <div>
                        <h2 className="font-bold lg:text-2xl">{data?.nome}</h2>
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
            <Image alt="" src={wallpaperLight} className="dark:hidden rounded-md" />
            <Image alt="" src={wallpaperDark} className="hidden dark:flex rounded-md" />
            <EmpresaTabs id={data?.id}/>
        </section>
    );
}