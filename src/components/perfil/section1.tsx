import { UserCircle2, UserRound } from "lucide-react";

export const Section1 = () => {

    return (
        <section className="">
            <div className="border-b pb-5">
                <div className="">
                    <UserCircle2 size={100} />
                </div>
                <div>
                    <p className="text-xl">aaaa</p>
                    <p className="text-gray-400 text-sm">aaaa</p>
                </div>
            </div>
            <div>
                <div className="flex gap-2 items-center p-2 text-[#0367A7] font-bold">
                    <UserRound /> Meus Dados
                </div>
            </div>
        </section>
    );
}