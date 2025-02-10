import { Star } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import iconBarber from "../../app/barberProIcon.png";

export const EmpresaSection1 = () => {
    return (
        <section className="flex-[2_2_50%] lg:flex-[2_2_20%]">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                    <Image src={iconBarber} alt="icone barbearia" width={60} className="rounded-full" />
                    <div>
                        <h2 className="font-bold lg:text-2xl">Israel barber shop</h2>
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
        </section>
    );
}