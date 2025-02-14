import { Star } from "lucide-react";

type Props = {
    size: number;
    isFilled: boolean ;
    value?: number;
    avaliarEstrela?: (key: number) => void;
    type: "button" | "icon";
};

export const StarIcon = ({ size, isFilled, value, avaliarEstrela, type }: Props) => {

    if (type === "button")
    return (
        <Star
            onClick={(e) => avaliarEstrela && avaliarEstrela(Number(e.currentTarget.getAttribute("data-key")))}
            data-key={value}  // Adicionando o atributo data-key ao ícone
            size={size} 
            color={isFilled ? "yellow" : "gray"} // Cor do ícone (amarelo quando preenchido, cinza quando não)
            style={{
                fill: isFilled ? "yellow" : "transparent", // Preenchendo o interior com amarelo
                stroke: "gray", // Cor do contorno (pode ser qualquer cor)
                strokeWidth: 1, // Tamanho do contorno
            }}
            className="cursor-pointer transition-all duration-500"
        />
    );
    if (type === "icon")
        return (
            <Star
                size={size} 
                color={isFilled ? "yellow" : "gray"} // Cor do ícone (amarelo quando preenchido, cinza quando não)
                style={{
                    fill: isFilled ? "yellow" : "transparent", // Preenchendo o interior com amarelo
                    stroke: "gray", // Cor do contorno (pode ser qualquer cor)
                    strokeWidth: 1, // Tamanho do contorno
                }}
            />
        );
};
