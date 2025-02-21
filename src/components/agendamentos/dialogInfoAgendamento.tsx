import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { AgendamentoResponse } from "@/types/type";

type Props = {
    data: AgendamentoResponse;
};

export function DialogInfoAgendamento({ data }: Props) {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0); // Zera horas, minutos, segundos e milissegundos

    const [ano, mes, dia] = data.data.split("-").map(Number);

    // Criar a data completa para o agendamento
    const dataAgendamento = new Date(ano, mes - 1, dia);
    dataAgendamento.setHours(0, 0, 0, 0); // Zera horas, minutos, segundos e milissegundos

    // Verificar se a data do agendamento é anterior a hoje
    const isExpirado = hoje > dataAgendamento;
    const isHoje = hoje.getTime() === dataAgendamento.getTime(); // Verifica se é o mesmo dia

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className="hover:underline cursor-pointer w-16">ver mais</div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Informações sobre seu Agendamento</DialogTitle>
                    <DialogDescription>
                        <div>
                            {data.barbearia.nome} - {data.barbearia.endereco}
                        </div>
                        <div>
                            Profissional: {data.barbeiro.nome}
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col justify-center gap-1">
                    <div>
                        <span className="font-bold">{data.servico.nome}</span> - <span className="font-bold">{data.servico.duracao} min</span> - <span className="text-green-600 font-bold">R$ {data.servico.preco ? Number(data.servico.preco).toFixed(2) : "valor não informado!"}</span>
                    </div>
                    <div className={`flex gap-2 ${isExpirado && "dark:text-gray-400 text-gray-500"}`}>
                        <span className={`font-bold text-blue-500 ${isExpirado && "text-gray-400 dark:text-gray-500"}`}>
                            {isHoje ? "Hoje" : `${dia}/${mes}`}
                        </span>
                        às
                        <span className="font-bold">{data.hora}h</span>
                        {isExpirado && <span>- <span className="text-red-500 font-bold">Data expirada</span></span>}
                    </div>
                    <div className="font-bold">
                        Status: {data.status}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
