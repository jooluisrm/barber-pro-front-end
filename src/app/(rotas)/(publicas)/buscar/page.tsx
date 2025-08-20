import { BuscarMain } from "@/components/buscar/buscarMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buscar | BarberPro",
  description:
    "Encontre barbearias próximas e agende seu horário de forma rápida e prática com o BarberPro. Pesquise por serviços, barbeiros e disponibilidade em tempo real.",
  keywords: [
    "BarberPro",
    "buscar barbearia",
    "agendamento online",
    "corte de cabelo",
    "barbearia perto de mim",
    "serviços de barbearia",
    "horários de barbeiros",
  ],
  openGraph: {
    title: "Buscar | BarberPro",
    description:
      "Busque barbearias próximas e agende cortes, barba e outros serviços pelo BarberPro.",
    url: "",
    siteName: "BarberPro",
    images: [
      {
        url: "", // coloque sua OG img em /public
        width: 1200,
        height: 630,
        alt: "Buscar barbearias no BarberPro",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buscar | BarberPro",
    description:
      "Pesquise barbearias, serviços e barbeiros disponíveis no BarberPro.",
    images: [""],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
  alternates: {
    canonical: "",
  },
};

const Buscar = () => {
    return (
        <section className="container mx-auto min-h-screen">
            <BuscarMain />
        </section>
    );
}

export default Buscar