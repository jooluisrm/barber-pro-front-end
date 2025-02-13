import { Search } from "lucide-react";
import { Input } from "../ui/input";

type Props = {
    getInput: string;
    setInput: (e: string) => void;
}

export const PesquisarItem = ({getInput, setInput}: Props) => {
    return (
        <div className="flex items-center ">
            <Search className="absolute ml-3" size={20} />
            <Input
                className="pl-10 h-14"
                placeholder="Pesquisar"
                value={getInput}
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
}