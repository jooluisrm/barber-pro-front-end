"use client"

import { cancelarAgendamento, deletarRegistroAgendamento } from "@/api/usuario/usuarioService"
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { toast } from "sonner"

type Props = {
    idAgendamento: string;
}

export const AlertDialogDeletarAgendamento = ({ idAgendamento }: Props) => {

    const handleDeletarAgendamento = async () => {
        console.log("Deletar registro com ID:", idAgendamento); // Adicione esse log
        try {
            const result = await deletarRegistroAgendamento(idAgendamento);
            toast(result.message, {
                action: {
                    label: "Fechar",
                    onClick: () => console.log("Undo")
                }
            })
        } catch (error: any) {
            console.error("Erro ao deletar registro:", error);
            toast(error, {
                action: {
                    label: "Fechar",
                    onClick: () => console.log("Undo")
                }
            })
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={"destructive"}><Trash2 /></Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Deseja deletar registro?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Essa ação não pode ser desfeita. Seu registro será deletado e não poderar ser visto.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Voltar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleDeletarAgendamento()} className="font-bold text-white bg-red-500 hover:bg-opacity-60">Deletar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}