import { LiMenuMobile } from "./liMenuMobile";

export const MenuMobile = () => {

    return (
        <div className="border-t py-3">
            <ul className="flex justify-around">
                <LiMenuMobile rota="/" text="Início" />
                <LiMenuMobile rota="/buscar" text="Buscar" />
                <LiMenuMobile rota="/agendamentos" text="Agendamentos" />
                <LiMenuMobile rota="/perfil" text="Perfil" />
            </ul>
        </div>
    );
}