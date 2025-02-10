import { HabilitarLocalizacao } from "./habilitarLocalizacao";
import { ItemEmpresaProxima } from "./itemEmpresaProxima";
import { SkeletonItemEmpresa } from "./SkeletonItemEmpresa";

export const EmpresasProximas = () => {
    return (
        <section className="container mx-auto min-h-80">
            <div>
                <h1 className="text-xl">Empresas Próximas</h1>
            </div>
            <HabilitarLocalizacao /> 
            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 py-5">
                <ItemEmpresaProxima />
                <ItemEmpresaProxima />
                <ItemEmpresaProxima />
                <SkeletonItemEmpresa />
            </div>
        </section>
    );
}