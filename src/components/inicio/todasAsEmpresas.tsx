import { Button } from "../ui/button";

export const TodasAsEmpresas = () => {
    return (
        <section className="container mx-auto pb-10">
            <div>
                <h1 className="text-xl">Todas as empresas</h1>
            </div>
            <div className="flex justify-center items-end min-h-40">
                <Button className="rounded-full py-6 px-6">Carregar mais</Button>
            </div>
        </section>
    );
}