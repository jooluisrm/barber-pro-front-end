"use client"

import { PerfilMain } from "@/components/perfil/perfilMain";
import { LoginBlock } from "@/components/screenLogin/telaLoginBlock";
import { useAuth } from "../../../../contexts/AuthContext";

const Perfil = () => {

    const { token } = useAuth();

    return (
        <section className="container mx-auto min-h-screen">
            {token ? <PerfilMain /> : <LoginBlock />}
        </section>
    );
}

export default Perfil;