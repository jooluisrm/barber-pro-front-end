"use client"

import { atualizarPerfil, usePerfil } from "@/api/usuario/usuarioService";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

const EditProfileFormSchema = z.object({
    nome: z
        .string()
        .min(4, { message: "Nome completo deve ter pelo menos 4 caracteres" }),

    email: z
        .string()
        .email({ message: "Por favor, insira um e-mail válido" }),

    telefone: z
        .string()
        .min(11, { message: "Número de celular inválido" })
        .regex(/^\(\d{2}\) \d{5}-\d{4}$/, { message: "Formato de celular inválido, use (XX) XXXXX-XXXX" }) // Máscara para celular
});

export const Section2 = () => {

    const { user, logout } = useAuth();

    const [getNome, setNome] = useState(user?.nome);
    const [getEmail, setEmail] = useState(user?.email);
    const [getTelefone, setTelefone] = useState(user?.telefone);

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(EditProfileFormSchema)
    });

    const handleUpdateProfile = async () => {
        if (user?.nome != getNome || user?.telefone != getTelefone || user?.email != getEmail) {
            try {
                const updatedUser = await atualizarPerfil({
                    nome: getNome,
                    email: getEmail,
                    telefone: getTelefone
                });
                toast(updatedUser.message, {
                    description: "Faça login novamente para continuar!",
                    action: {
                        label: "Fechar",
                        onClick: () => console.log("Undo")
                    }
                })
                logout();
                console.log("Perfil atualizado:", updatedUser);
            } catch (error: any) {
                toast(error, {
                    action: {
                        label: "Fechar",
                        onClick: () => console.log("Undo")
                    }
                })
                console.error("Erro ao atualizar perfil:", error);
            }
        } else {
            toast("Faça alguma alteração para continuar", {
                action: {
                    label: "Fechar",
                    onClick: () => console.log("Undo")
                }
            })
        }

    };

    return (
        <section>
            <form onSubmit={handleSubmit(handleUpdateProfile)} className="flex flex-col gap-5 md:w-[400px]">
                <label htmlFor="nome">
                    Nome Completo
                    <Input id="nome" {...register('nome')} value={getNome} onChange={(e) => setNome(e.target.value)} />
                    {errors.nome && <p className="text-sm text-red-600 mt-1">* {errors.nome.message as string}</p>}
                </label>
                <label htmlFor="email">
                    Email
                    <Input id="email" {...register('email')} value={getEmail} onChange={(e) => setEmail(e.target.value)} />
                    {errors.email && <p className="text-sm text-red-600 mt-1">* {errors.email.message as string}</p>}
                </label>
                <label htmlFor="telefone">
                    Celular
                    <Input id="telefone" {...register('telefone')} value={getTelefone} onChange={(e) => setTelefone(e.target.value)} />
                    {errors.telefone && <p className="text-sm text-red-600 mt-1">* {errors.telefone.message as string}</p>}
                </label>
                <Button type="submit">Salvar</Button>
            </form>

        </section>
    );
}