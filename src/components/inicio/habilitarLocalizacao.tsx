import Image from "next/image";
import localização from "../../../public/assets/localização.png";

export const HabilitarLocalizacao = () => {
    return (
        <div className="h-72 flex flex-col items-center justify-end pb-10">

            <Image src={localização} alt="localização" width={70} className="animate-bounce duration-1000"></Image>
            <h2 className="text-lg">Habilitar localização</h2>
            <p className="text-gray-500 text-center">Habilite o acesso a localização para encontrarmos os estabelecimentos mais próximos à você =)</p>

        </div>
    );
}