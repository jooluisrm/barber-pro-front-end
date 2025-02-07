import Image from "next/image";
import localização from "../../app/localização.png";

export const EmpresasProximas = () => {
    return (
        <section className="container mx-auto min-h-72">
            <div>
                <h1 className="text-xl">Empresas Próximas</h1>
            </div>
            <div className="flex justify-center items-center pt-10">
                <div className="flex flex-col items-center">
                    <Image src={localização} alt="localização" width={80}></Image>
                    <h2 className="text-lg">Habilitar localização</h2>
                    <p className="text-gray-500">Habilite o acesso a localização para encontrarmos os estabelecimentos mais próximos à você =)</p>
                </div>

            </div>
        </section>
    );
}