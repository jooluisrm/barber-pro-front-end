import { ItemEmpresaProxima } from "../inicio/itemEmpresaProxima";
import { WelcomeSearch } from "../inicio/welcomeSearch";

export const BuscarMain = () => {
    return (
        <main>
            <WelcomeSearch type="search"/>
            <div className="grid gap-5 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                <ItemEmpresaProxima />
                <ItemEmpresaProxima />
                <ItemEmpresaProxima />
                <ItemEmpresaProxima />
                <ItemEmpresaProxima />
            </div>
        </main>
    );
}