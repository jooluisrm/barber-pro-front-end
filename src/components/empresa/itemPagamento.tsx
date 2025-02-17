import { FormaPagamento } from "@/types/type";

type Props = {
    data: FormaPagamento;
}

export const ItemPagamento = ({data}: Props) => {
    return (
        <div className="dark:bg-[#27272A] bg-[#F4F4F5] p-2 rounded-full text-gray-400">
            <p className="font-bold">{data.tipo}</p>
        </div>
    );
}