import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock } from "lucide-react";

export const AlertEscolhaProfissional = () => {
    return (
        <Alert>
            <Clock className="h-4 w-4" />
            <AlertDescription>
                Escolha um profissional para buscar os horários disponíveis para agendamento
            </AlertDescription>
        </Alert>
    );
}