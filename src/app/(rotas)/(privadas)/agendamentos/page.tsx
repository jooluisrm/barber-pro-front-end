"use client"

import { AgendamentosMain } from "@/components/agendamentos/agendamentosMain";
import { LoginBlock } from "@/components/screenLogin/telaLoginBlock";
import { useAuth } from "@/contexts/AuthContext";

const Agendamentos = () => {

    const { token } = useAuth();

    return (
        <section className="container mx-auto min-h-screen">
            {token ? <AgendamentosMain /> : <LoginBlock />}
        </section>
    )
}

export default Agendamentos;