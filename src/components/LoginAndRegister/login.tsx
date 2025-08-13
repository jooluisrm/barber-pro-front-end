"use client";

import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginUser } from "@/api/auth/authService";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

type Props = {
    nextPage: VoidFunction;
}

const LoginFormSchema = z.object({
    email: z.string().email({ message: "Por favor, insira um e-mail válido" }),
    senha: z.string()
        .min(6, { message: "Senha deve ter no mínimo 6 caracteres" })
});

export const Login = ({ nextPage }: Props) => {
    const { login } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(LoginFormSchema)
    });

    const handleLoginForm = async (data: any) => {
        try {
            const userData = await loginUser(data);
            login(userData); // Armazena os dados no Context API

            toast(userData.message, {
                action: {
                    label: "Fechar",
                    onClick: () => console.log("Undo")
                }
            })

        } catch (error: any) {
            toast(error.message, {
                action: {
                    label: "Fechar",
                    onClick: () => console.log("Undo")
                }
            })
        }
    };

    return (
        <div>
            <div className="pb-5">
                <DialogTitle className="text-xl font-semibold text-center pb-3">
                    Acessar Conta
                </DialogTitle>
                <DialogDescription>
                    Preencha os campos abaixo para fazer login.
                </DialogDescription>
            </div>
            <form onSubmit={handleSubmit(handleLoginForm)} className="flex flex-col gap-3 pb-5">
                <div>
                    <label htmlFor="email">Email</label>
                    <Input {...register('email')} id="email" placeholder="Digite seu e-mail..." autoFocus />
                    {errors.email && <p className="text-sm text-red-600 mt-1">* {errors.email.message as string}</p>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <Input {...register('senha')} id="senha" type="password" placeholder="Digite sua senha..."  />
                    {errors.senha && <p className="text-sm text-red-600 mt-1">* {errors.senha.message as string}</p>}
                </div>
                <Button type="submit" className="font-bold">Fazer Login</Button>
            </form>
            <p className="flex justify-center gap-1">
                <span>Não possui uma conta?</span>
                <button onClick={nextPage} className="text-[#0072bc] font-bold cursor-pointer">Cadastre-se</button>
            </p>
        </div>
    );
};
