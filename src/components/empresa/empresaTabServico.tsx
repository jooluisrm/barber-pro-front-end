import { Search } from "lucide-react";
import { Input } from "../ui/input";
import { ItemServico } from "./itemServico";

export const EmpresaTabServico = () => {
    return (
        <section>
            <div>
                <h3 className="text-2xl">Serviços</h3>
            </div>
            <div className="flex items-center ">
                <Search className="absolute ml-3" size={20}/>
                <Input className="pl-10 h-14" placeholder="Pesquisar"/>
            </div>
            <div>
                <ItemServico />
            </div>
        </section>
    );
}