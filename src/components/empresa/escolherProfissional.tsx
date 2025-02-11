import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { ItemSelecionarProfissional } from "./itemSelecionarProfissional";
import { AlertEscolhaProfissional } from "./alertEscolhaProfissional";

type Props = {
    date: Date | undefined;
    setDate: any;
}

export const EscolherProfissional = ({ date, setDate }: Props) => {
    return (
        <>
            <DialogHeader>
                <div className="flex justify-between">
                    <DialogTitle>Selecione um profissional</DialogTitle>
                    <p className="font-bold pr-3">{date?.toLocaleDateString()}</p>
                </div>
                <DialogDescription>Selecione um profissional para continuar!</DialogDescription>
            </DialogHeader>
            <div className="flex gap-5 py-5 flex-wrap">
                <ItemSelecionarProfissional />
            </div>
            <div className="pb-5">
                <AlertEscolhaProfissional />
            </div>
        </>
    );
}