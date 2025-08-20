"use client"

import { useAuth } from "@/contexts/AuthContext"
import { LoginBlock } from "../screenLogin/telaLoginBlock"
import { AgendamentosMain } from "./agendamentosMain"
import { PerfilMain } from "../perfil/perfilMain"

type Props = {
    page: "agendamentos" | "perfil"
}

export const LoginBlockMain = ({page}: Props) => {

    const {token} = useAuth();

    return (
        <div>
            {page === "agendamentos" && (token ? <AgendamentosMain /> : <LoginBlock />)}
            {page === "perfil" && (token ? <PerfilMain /> : <LoginBlock />)}
        </div>
    )
}