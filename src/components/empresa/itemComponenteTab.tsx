import { Avaliacao, Produto, Profissional, Servico } from "@/types/type";
import { Types } from "./tabLayout";
import { ItemServico } from "./itemServico";
import { ItemProfissional } from "./itemProfissional";
import { ItemProduto } from "./itemProduto";
import { ItemAvaliacao } from "./itemAvaliacao"; // Importe o componente para avaliações

type Props = {
    idBarbearia: string;
    type: Types;
    inputTab: string;
    getTab: Servico[] | Profissional[] | Produto[] | Avaliacao[] | null;
    textErroCadastro: string;
    textErroBusca: string;
    loading: boolean;
};

export const ItemComponeteTab = ({ type, inputTab, getTab, textErroCadastro, textErroBusca, idBarbearia, loading }: Props) => {
    const renderItems = (items: Servico[] | Profissional[] | Produto[] | Avaliacao[], type: Types) => {
        if (items) {
            return items.filter((item) =>
                item.nome.toLowerCase().includes(inputTab.toLowerCase().trim()) // Filtrando por nome
            ).length > 0 ? (
                items.filter((item) =>
                    item.nome.toLowerCase().includes(inputTab.toLowerCase().trim()) // Filtrando novamente
                ).map((item: any) => (
                    type === "services" ? (
                        <ItemServico key={item.id} data={item} idBarbearia={idBarbearia} />
                    ) : type === "profissionais" ? (
                        <ItemProfissional key={item.id} data={item} />
                    ) : type === "products" ? (
                        <ItemProduto key={item.id} data={item} />
                    ) : type === "avaliacao" ? (
                        <ItemAvaliacao key={item.id} data={item} /> // Renderiza o ItemAvaliacao para avaliações
                    ) : null
                ))
            ) : (
                inputTab.length > 0 && <p className="text-gray-500">{textErroBusca}</p> // Mensagem caso não encontre itens
            );
        } else {
            return <p className={`text-gray-500 ${loading ? "hidden" : "flex"}`}>{textErroCadastro}</p>; // Mensagem caso não tenha itens cadastrados
        }
    };

    return (
        <div>
            {!inputTab ? renderItems(getTab as any, type) : renderItems(getTab as any, type)}
        </div>
    );
};
