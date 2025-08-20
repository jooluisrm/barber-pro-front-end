"use client"

import { cancelarAgendamento } from "@/api/usuario/usuarioService"
import {
    AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
    AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Ban, LoaderCircle } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

// 1. ATUALIZADO: Adicionamos a prop de callback
type Props = {
    idAgendamento: string;
    onCancelSuccess: () => void; // Função a ser chamada em caso de sucesso
}

export const AlertDialogCandelarAgendamento = ({ idAgendamento, onCancelSuccess }: Props) => {
    const [loading, setLoading] = useState(false);

    const handleCancelarAgendamento = async () => {
        setLoading(true);
        try {
            const result = await cancelarAgendamento(idAgendamento);
            toast.success(result.message || "Agendamento cancelado com sucesso!");

            // 2. ATUALIZADO: Chama a função de callback para avisar o pai
            onCancelSuccess();

        } catch (error: any) {
            console.error("Erro ao cancelar agendamento:", error);
            toast.error(error.message || "Não foi possível cancelar o agendamento.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <Button variant={"destructive"} size="sm" disabled={loading}>
                    <Ban className="h-4 w-4" />
                </Button>
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
                    <AlertDialogAction asChild>
                        <Button variant={'destructive'} onClick={handleCancelarAgendamento} disabled={loading}>
                            {loading ? <LoaderCircle className="animate-spin" /> : "Confirmar Cancelamento"}
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}