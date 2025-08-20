import { AgendamentosMain } from "@/components/agendamentos/agendamentosMain";
import { LoginBlockMain } from "@/components/agendamentos/loginBlockMain";
import { LoginBlock } from "@/components/screenLogin/telaLoginBlock";
import { useAuth } from "@/contexts/AuthContext";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Agendamentos | BarberPro",
    description:
        "Gerencie seus agendamentos no BarberPro. Visualize horários marcados, serviços contratados e acompanhe seu histórico de atendimentos.",
    keywords: [
        "BarberPro",
        "agendamentos",
        "marcar horário",
        "barbearia",
        "corte de cabelo",
        "gestão de agendamentos",
    ],
    openGraph: {
        title: "Agendamentos | BarberPro",
        description:
            "Organize seus horários, visualize serviços e acompanhe seus agendamentos de forma prática com o BarberPro.",
        siteName: "BarberPro",
        images: [
            {
                url: "", // preparado para futura imagem de compartilhamento
                width: 1200,
                height: 630,
                alt: "Agendamentos no BarberPro",
            },
        ],
        locale: "pt_BR",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Agendamentos | BarberPro",
        description:
            "Veja e gerencie seus agendamentos de barbearia no BarberPro.",
        images: [""],
    },
    robots: {
        index: false, // normalmente páginas de agendamento são privadas, não públicas
        follow: false,
    },
};

const Agendamentos = () => {

    return (
        <section className="container mx-auto min-h-screen">
            <LoginBlockMain page="agendamentos" />
        </section>
    )
}

export default Agendamentos;