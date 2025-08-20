

import { PerfilMain } from "@/components/perfil/perfilMain";
import { LoginBlock } from "@/components/screenLogin/telaLoginBlock";
import { useAuth } from "../../../../contexts/AuthContext";
import { Metadata } from "next";
import { LoginBlockMain } from "@/components/agendamentos/loginBlockMain";


export const metadata: Metadata = {
  title: "Perfil | BarberPro",
  description:
    "Acesse seu perfil no BarberPro e gerencie seus dados, acompanhe seus agendamentos e personalize sua experiência nas barbearias.",
  keywords: [
    "BarberPro",
    "perfil de usuário",
    "meu perfil",
    "agendamentos barbearia",
    "gestão de conta",
  ],
  openGraph: {
    title: "Perfil | BarberPro",
    description:
      "Gerencie suas informações pessoais, confira agendamentos realizados e aproveite a praticidade do BarberPro.",
    url: "",
    siteName: "BarberPro",
    images: [
      {
        url: "", // se no futuro quiser usar uma img padrão ou dinâmica
        width: 1200,
        height: 630,
        alt: "Perfil do usuário no BarberPro",
      },
    ],
    locale: "pt_BR",
    type: "profile", // OG aceita esse tipo
  },
  twitter: {
    card: "summary_large_image",
    title: "Perfil | BarberPro",
    description:
      "Gerencie seus agendamentos e informações pessoais no BarberPro.",
    images: [""],
  },
  robots: {
    index: false, // 🔒 páginas pessoais geralmente não devem ser indexadas
    follow: false,
  },
  alternates: {
    canonical: "",
  },
};

const Perfil = () => {

    return (
        <section className="container mx-auto min-h-screen">
            <LoginBlockMain page="perfil"/>
        </section>
    );
}

export default Perfil;