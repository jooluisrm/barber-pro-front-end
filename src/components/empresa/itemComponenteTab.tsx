import { Profissional, Servico } from "@/types/type";
import { Types } from "./tabLayout"; // Supondo que Types seja um tipo para o `type`
import { ItemServico } from "./itemServico"; // Importando ItemServico, mas pode ser genérico para Profissional também
import { ItemProfissional } from "./itemProfissional";

type Props = {
    type: Types; // Indica se estamos lidando com "services" ou "professionals"
    inputTab: string; // O valor de input para filtrar os dados
    getTab: Servico[] | Profissional[] | null; // Dados de Servicos ou Profissionais
    textErroCadastro: string; // Mensagem de erro quando não encontrar dados cadastrados
    textErroBusca: string; // Mensagem de erro quando não encontrar dados com a busca
};

export const ItemComponeteTab = ({ type, inputTab, getTab, textErroCadastro, textErroBusca }: Props) => {
    const renderItems = (items: Servico[] | Profissional[], type: Types) => {
        if (items) {
            return items.filter((item) => 
                item.nome.toLowerCase().includes(inputTab.toLowerCase().trim()) // Filtrando por nome
            ).length > 0 ? (
                items.filter((item) =>
                    item.nome.toLowerCase().includes(inputTab.toLowerCase().trim()) // Filtrando novamente
                ).map((item: any) => (
                    type === "services" ? (
                        <ItemServico key={item.id} data={item} />
                    ) : (
                        <ItemProfissional key={item.id} data={item}/>
                    )
                ))
            ) : (
                inputTab.length > 0 && (
                    <p className="text-gray-500">{textErroBusca}</p> // Mensagem caso não encontre itens
                )
            );
        } else {
            return <p className="text-gray-500">{textErroCadastro}</p>; // Mensagem caso não tenha itens cadastrados
        }
    };

    return (
        <div>
            {!inputTab ? (
                renderItems(getTab as any, type) // Sem filtro, apenas renderiza todos os itens
            ) : (
                renderItems(getTab as any, type) // Com filtro de busca
            )}
        </div>
    );
};
