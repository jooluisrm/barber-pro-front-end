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
import { useAuth } from "@/contexts/AuthContext";
import { LogOut } from "lucide-react";

type Props = {
    onConfirm: () => void;
}

export const AlertExit = ({ onConfirm }: Props) => {

    const { logout } = useAuth();

    return (
        <AlertDialog>
            <AlertDialogTrigger className="w-full">
                <div className="flex gap-2 items-center w-full">
                    <LogOut />
                    Sair
                </div>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Você realmente deseja sair?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Sua sessão será encerrada e você precisará fazer login novamente para acessar sua conta.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction onClick={() => {onConfirm(); logout()}} className="font-bold">Sair</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}