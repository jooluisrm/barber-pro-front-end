"use client"

import { useState } from "react";
import { Button } from "../ui/button";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";

type Props = {
    backPage: VoidFunction;
}

const RegisterFormSchema = z.object({
    nomeCompleto: z
        .string()
        .min(4, { message: "Nome completo deve ter pelo menos 4 caracteres" }),
    
    email: z
        .string()
        .email({ message: "Por favor, insira um e-mail válido" }),
    
    senha: z
        .string()
        .min(6, { message: "Senha deve ter no mínimo 6 caracteres" })
        .regex(/[a-z]/, { message: "Senha deve conter pelo menos uma letra minúscula" })
        .regex(/[A-Z]/, { message: "Senha deve conter pelo menos uma letra maiúscula" })
        .regex(/[0-9]/, { message: "Senha deve conter pelo menos um número" }),
        
    
    celular: z
        .string()
        .min(11, { message: "Número de celular inválido" })
        .regex(/^\(\d{2}\) \d{5}-\d{4}$/, { message: "Formato de celular inválido, use (XX) XXXXX-XXXX" }) // Máscara para celular
});



export const Register = ({ backPage }: Props) => {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(RegisterFormSchema)
    });

    const [nomeCompleto, setNomeCompleto] = useState("");
    const [celular, setCelular] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    const handleRegisterForm = () => {
        alert('Enviado')
    }

    return (
        <>
            <div className="pb-5">
                <DialogTitle className="text-xl font-semibold text-center pb-3">
                    Nova Conta
                </DialogTitle>
                <DialogDescription>
                    Preencha os campos abaixo para criar uma nova conta.
                </DialogDescription>
            </div>


            <form onSubmit={handleSubmit(handleRegisterForm)} className="flex flex-col gap-3 pb-5">
                <div>
                    <label htmlFor="nome">Nome completo</label>
                    <Input
                        {...register('nomeCompleto')}
                        type="text"
                        id="nome"
                        placeholder="Informe Seu Nome"
                        autoFocus

                    />
                    {errors.nomeCompleto && <p className="text-sm text-red-600 mt-1">* {errors.nomeCompleto.message as string}</p>}
                </div>
                <div>
                    <label htmlFor="tel">Celular</label>
                    <Input
                        {...register('celular')}
                        id="tel"
                        placeholder="Digite Seu Numero"
                    />
                    {errors.celular && <p className="text-sm text-red-600 mt-1">* {errors.celular.message as string}</p>}
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input
                        {...register('email')}
                        id="email"
                        placeholder="Informe Seu Email"
                    />
                    {errors.email && <p className="text-sm text-red-600 mt-1">* {errors.email.message as string}</p>}
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <Input
                        {...register('senha')}
                        id="senha"
                        type="password"
                        placeholder="Informe Sua Senha"
                    />
                    {errors.senha && <p className="text-sm text-red-600 mt-1">* {errors.senha.message as string}</p>}
                </div>
                <Button type="submit" className="font-bold">Criar Conta</Button>
            </form>

            <p className="flex justify-center gap-1"><p>Já tem uma conta?</p><button onClick={() => backPage()} className="text-[#0072bc] font-bold cursor-pointer">Acesse</button></p>
        </ >
    );
}