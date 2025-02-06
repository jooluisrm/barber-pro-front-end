import { Calendar, CircleUserRound, House, Search } from "lucide-react"
import { usePathname } from "next/navigation";
import { LiMenuMobile } from "./liMenuMobile";

export const MenuMobile = () => {

    return (
        <div className="">
            <ul className="flex justify-around">
                <LiMenuMobile rota="/" text="Início" />
                <LiMenuMobile rota="/buscar" text="Buscar" />
                <LiMenuMobile rota="/agendamentos" text="Agendamentos" />
                <LiMenuMobile rota="/perfil" text="Perfil" />
            </ul>
        </div>
    );
}