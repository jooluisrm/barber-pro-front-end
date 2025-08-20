"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"; // Use o seu tipo correto
import { converterMes } from "@/utils/conversorMes";
import { formatarPreco } from "@/utils/formatarValores";
import { AlertDialogCandelarAgendamento } from "./alertDialogCancelarAgendamento";
import { useMemo } from "react";
import { Badge } from "@/components/ui/badge"; // 1. Importe o Badge
import { Clock } from "lucide-react"; // Opcional: ícone para o horário
import { AgendamentoResponse } from "@/types/type";
import { DialogInfoAgendamento } from "./dialogInfoAgendamento";
import { parse, addMinutes, isPast, isWithinInterval } from "date-fns";

type Props = {
    data: AgendamentoResponse;
    onActionSuccess: () => void; // A função que vai recarregar a lista
}

export const ItemAgendamento = ({ data, onActionSuccess }: Props) => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const dataAgendamento = new Date(data.data.replace(/-/g, '/'));
    const isExpirado = hoje > dataAgendamento;
    const isHoje = hoje.getTime() === dataAgendamento.getTime();
    const [ano, mes, dia] = data.data.split("-").map(Number);
    const mesFormatado = converterMes(mes - 1);
    const valorCalculado = useMemo(() => { /* ... sua lógica de cálculo ... */ }, [data]);
    const imagemPrincipal = data.servicosRealizados?.[0]?.servico?.imagemUrl;

    // 2. Lógica para definir a cor e o estilo do Badge
    const getStatusVariant = (): "default" | "destructive" | "secondary" | "outline" => {
        if (data.status === 'Feito') return 'default'; // Verde (padrão do tema)
        if (data.status === 'Cancelado') return 'destructive'; // Vermelho
        if (data.status === 'Confirmado' && isExpirado) return 'outline'; // Laranja/Amarelo
        return 'secondary'; // Cinza para Confirmado
    };

    const getSmartStatus = () => {
        if (data.status === 'Feito') return { text: 'Finalizado', variant: 'default' as const, isExpirado: true };
        if (data.status === 'Cancelado') return { text: 'Cancelado', variant: 'destructive' as const, isExpirado: true };

        const duracaoTotal = data.servicosRealizados.reduce((total, item) => total + item.servico.duracao, 0);
        const dataInicio = parse(`${data.data} ${data.hora}`, 'yyyy-MM-dd HH:mm', new Date());
        const dataFim = addMinutes(dataInicio, duracaoTotal);
        const agora = new Date();

        if (isPast(dataFim)) {
            return { text: 'Vencido', variant: 'outline' as const, isExpirado: true };
        }
        if (isWithinInterval(agora, { start: dataInicio, end: dataFim })) {
            return { text: 'Acontecendo Agora', variant: 'secondary' as const, isExpirado: false };
        }

        return { text: 'Confirmado', variant: 'secondary' as const, isExpirado: false };
    };

    const smartStatus = getSmartStatus();

    return (
        <div className={`
            bg-card border rounded-lg p-4 flex justify-between items-center transition-all
            ${data.status === 'Feito' && 'border-green-500/50'}
            ${data.status === 'Cancelado' && 'opacity-60 border-red-500/50'}
            ${data.status === 'Confirmado' && isExpirado && 'border-orange-500/50'}
            ${isHoje && data.status === "Confirmado" ? "border-primary border-2" : ""}
        `}>
            <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16 hidden sm:flex">
                    <AvatarImage src={imagemPrincipal || "/favicon.png"} />
                    <AvatarFallback>{data.barbearia.nome.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="space-y-1.5">
                    <h3 className="font-bold text-lg">{data.barbearia.nome}</h3>
                    <Badge variant={smartStatus.variant} className="my-2">{smartStatus.text}</Badge>
                    <p className="text-sm text-muted-foreground font-semibold max-w-[200px] truncate">
                        {data.servicosRealizados?.map(s => s.servico.nome).join(', ') || 'Serviço não informado'}
                    </p>
                    <p className="text-sm text-muted-foreground">com <span className="font-bold text-blue-500">{data.barbeiro.nome}</span></p>

                    {/* 3. ADICIONADO: Campo de Horário */}
                    <div className="flex items-center gap-1.5 text-sm text-muted-foreground font-bold pt-1">
                        <Clock className="w-4 h-4" />
                        <span className="text-blue-500 font-bold">{data.hora}</span>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <div className="flex flex-col">
                    <p className={`text-xl font-bold ${isHoje && "text-primary"}`}>{dia}</p>
                    <p className={`text-sm font-bold ${isHoje && "text-primary"}`}>{mesFormatado.toUpperCase()}</p>
                </div>


                <div className="flex items-center gap-2 pt-2">
                    {data.status === "Confirmado" && !isExpirado && (
                        <div className="">
                            <AlertDialogCandelarAgendamento idAgendamento={data.id} onCancelSuccess={onActionSuccess} />
                        </div>
                    )}
                    <DialogInfoAgendamento data={data} />
                </div>
            </div>
        </div>
    );
};