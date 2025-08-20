import { EmpresaMain } from "@/components/empresa/empresaMain";
import { Metadata } from "next";

type Props = {
    params: { nome: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    // 1. Decodifica o nome da URL para lidar com "%20" e outros caracteres especiais
    const nomeDecodificado = decodeURIComponent(params.nome);

    // 2. Aplica a formatação original (agora no nome já decodificado)
    const formatNome = nomeDecodificado
        .replace(/-/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());

    return {
        title: `${formatNome} | BarberPro`,
        description: `Descubra a barbearia ${formatNome} no BarberPro. Veja serviços, horários disponíveis e agende seu atendimento online de forma prática.`,
        openGraph: {
            title: `${formatNome} | BarberPro`,
            description: `Perfil da barbearia ${formatNome} no BarberPro. Confira serviços oferecidos, barbeiros disponíveis e reserve seu horário agora mesmo.`,
            url: "", // se tiver URL dinâmica, pode adicionar
            siteName: "BarberPro",
            images: [
                {
                    url: "", // pode ser dinâmica no futuro (foto da barbearia) ou padrão do sistema
                    width: 1200,
                    height: 630,
                    alt: `Barbearia ${formatNome} no BarberPro`,
                },
            ],
            locale: "pt_BR",
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title: `${formatNome} | BarberPro`,
            description: `Conheça os serviços e barbeiros da barbearia ${formatNome} e agende seu horário online pelo BarberPro.`,
            images: [""], // mesmo esquema do OG
        },
        robots: {
            index: true,
            follow: true,
        },
        alternates: {
            canonical: "", // pode montar a URL da barbearia ex: https://barberpro.com/empresa/${params.nome}
        },
    };

}

const Empresa = () => {
    return (
        <div className="container mx-auto min-h-screen">
            <EmpresaMain />
        </div>
    );
}

export default Empresa;