import { Phone, Smartphone } from "lucide-react";

type Props = {
    telefone?: string;
    celular?: string;
    type: "tel" | "cel";
}

export const ItemContato = ({ telefone, celular, type }: Props) => {
    if (type != "cel") {
        return (
            <>
                <div className="bg-[#F4F4F5] dark:bg-[#27272A] p-3 rounded-full flex gap-5 max-w-52">
                    <Phone />
                    <span className="text-gray-500 dark:text-white">{telefone}</span>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="bg-[#F4F4F5] dark:bg-[#27272A] p-3 rounded-full flex gap-5 max-w-52">
                    <Smartphone />
                    <span className="text-gray-500 dark:text-white">{celular}</span>
                </div>
            </>
        )
    }
}