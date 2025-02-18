"use client"

import { cancelarAgendamento } from "@/api/usuario/usuarioService"
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

export const AlertDialogCandelarAgendamento = ({ idAgendamento }: Props) => {

    const handleCancelarAgendamento = async () => {
        console.log("Cancelando agendamento com ID:", idAgendamento); // Adicione esse log
        try {
            const result = await cancelarAgendamento(idAgendamento);
            toast(result.message, {
                action: {
                    label: "Fechar",
                    onClick: () => console.log("Undo")
                }
            })
        } catch (error: any) {
            console.error("Erro ao cancelar agendamento:", error);
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
                    <AlertDialogTitle>Tem certeza que deseja cancelar?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Essa ação não pode ser desfeita. Seu agendamento será cancelado e o horário ficará disponível para outros clientes.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Voltar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => handleCancelarAgendamento()} className="font-bold text-white bg-red-500 hover:bg-opacity-60">Confirmar</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>

    )
}