import { Star } from "lucide-react";

export const StarIcon = ({ size, isFilled }: { size: number, isFilled: boolean }) => {
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
