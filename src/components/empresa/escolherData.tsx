import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { CalendarAgendamento } from "./calendarAgendamento";

type Props = {
    date: Date | undefined;
    setDate: any;
    
}

export const EscolherData = ({ date, setDate }: Props) => {
    return (
        <>
            <DialogHeader>
                <DialogTitle>Faça Seu Agendamento Agora!</DialogTitle>
                <DialogDescription>Selecione uma data para continuar!</DialogDescription>
            </DialogHeader>
            <div className="flex justify-center py-5">
                <CalendarAgendamento date={date} setDate={setDate} />
            </div>
        </>
    );
}