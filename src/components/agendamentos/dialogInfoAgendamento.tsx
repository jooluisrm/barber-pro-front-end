"use client"

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
import { Eye, MapPin, Scissors, Tag, Beer, DollarSign, Clock, Calendar, ShoppingBasketIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { formatarPreco } from "@/utils/formatarValores";
import { useMemo } from "react";
import { Badge } from "../ui/badge";
import { parse, addMinutes, isPast, isWithinInterval } from "date-fns";

type Props = {
    data: AgendamentoResponse;
};

export function DialogInfoAgendamento({ data }: Props) {

    // Lógica para calcular o valor total, como já fizemos antes
    const valorCalculado = useMemo(() => {
        if (data.status === 'Feito' && data.valorTotal) {
            return Number(data.valorTotal);
        }
        const valorServicos = data.servicosRealizados?.reduce((acc, s) => acc + Number(s.precoNoMomento || 0), 0) || 0;
        const valorProdutos = data.produtosConsumidos?.reduce((acc, p) => acc + (Number(p.precoVendaNoMomento || 0) * p.quantidade), 0) || 0;
        return valorServicos + valorProdutos;
    }, [data]);


    const getSmartStatus = () => {
        // Status finais não mudam
        if (data.status === 'Feito') return { text: 'Finalizado', variant: 'default' as const };
        if (data.status === 'Cancelado') return { text: 'Cancelado', variant: 'destructive' as const };

        // Calcula a duração total dos serviços em minutos
        const duracaoTotal = data.servicosRealizados.reduce((total, item) => total + item.servico.duracao, 0);
        
        // Cria objetos Date para início e fim do agendamento
        const dataInicio = parse(`${data.data} ${data.hora}`, 'yyyy-MM-dd HH:mm', new Date());
        const dataFim = addMinutes(dataInicio, duracaoTotal);
        const agora = new Date();

        // Verifica os diferentes cenários para agendamentos "Confirmados"
        if (isPast(dataFim)) {
            return { text: 'Vencido', variant: 'outline' as const }; // Já acabou
        }
        if (isWithinInterval(agora, { start: dataInicio, end: dataFim })) {
            return { text: 'Agora', variant: 'secondary' as const }; // Está no horário
        }
        
        // Se nenhuma das condições acima for atendida, ele ainda está por vir
        return { text: 'Confirmado', variant: 'secondary' as const };
    };

    const smartStatus = getSmartStatus();

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size={"sm"}  className=""><ShoppingBasketIcon /></Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl">Detalhes do Agendamento</DialogTitle>
                    <DialogDescription>
                        Todas as informações sobre o seu horário.
                    </DialogDescription>
                </DialogHeader>

                <div className="space-y-4">
                    {/* Seção da Barbearia */}
                    <div>
                        <h3 className="font-semibold mb-2">{data.barbearia.nome}</h3>
                        <div className="text-sm text-muted-foreground space-y-1">
                            <p className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                {data.barbearia.endereco}
                            </p>
                            <p className="flex items-center gap-2">
                                <Scissors className="w-4 h-4" />
                                Agendado com: <span className="font-medium text-foreground">{data.barbeiro.nome}</span>
                            </p>
                        </div>
                    </div>

                    <Separator />

                    {/* Seção de Data, Hora e Status */}
                    <div className="grid grid-cols-2 gap-4">
                         <div className="flex items-center gap-2 text-sm">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground">Data</p>
                                <p className="font-semibold">{new Date(data.data.replace(/-/g, '/')).toLocaleDateString('pt-BR')}</p>
                            </div>
                        </div>
                         <div className="flex items-center gap-2 text-sm">
                            <Clock className="w-4 h-4 text-muted-foreground" />
                            <div>
                                <p className="text-muted-foreground">Hora</p>
                                <p className="font-semibold">{data.hora}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Badge variant={smartStatus.variant} className="text-xs">
                            {smartStatus.text}
                        </Badge>
                    </div>

                    <Separator />
                    
                    {/* Seção de Itens da Comanda */}
                    <div>
                        <h3 className="font-semibold mb-2">Sua Comanda</h3>
                        <div className="space-y-2 text-sm">
                            {/* Serviços */}
                            {data.servicosRealizados.map(item => (
                                <div key={item.id} className="flex justify-between">
                                    <span className="flex items-center gap-2"><Tag className="w-4 h-4" />{item.servico.nome}</span>
                                    <span>{formatarPreco(item.precoNoMomento)}</span>
                                </div>
                            ))}
                            {/* Produtos */}
                            {data.produtosConsumidos.map(item => (
                                <div key={item.id} className="flex justify-between">
                                    <span className="flex items-center gap-2"><Beer className="w-4 h-4" />{item.produto.nome} (x{item.quantidade})</span>
                                    <span>{formatarPreco(String(Number(item.precoVendaNoMomento) * item.quantidade))}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <DialogFooter className="border-t pt-4 mt-4 flex justify-between w-full">
                    <h3 className="text-lg font-bold">Total</h3>
                    <p className="text-lg font-bold text-primary text-green-500">{formatarPreco(valorCalculado.toFixed(2))}</p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}