"use Client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { EscolherData } from "./escolherData";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { EscolherProfissional } from "./escolherProfissional";


export const DialogAgendamento = () => {
    const [pageAgendamento, setPageAgendamento] = useState(1);

    const [date, setDate] = useState<Date | undefined>(new Date());

    const nextPage = () => {
        if (pageAgendamento < 2) {
            setPageAgendamento(pageAgendamento + 1);
        } else return 0;
        
    }
    const backPage = () => {
        if (pageAgendamento > 1) {
            setPageAgendamento(pageAgendamento - 1);
        } else return 0;
    }

    return (
        <Dialog >
            <DialogTrigger><div className="text-white bg-[#2F2F31] p-2 rounded-md font-bold dark:bg-white dark:text-black">Agendar</div></DialogTrigger>
            <DialogContent>
                <div>
                    {
                        pageAgendamento === 1 && (
                            <EscolherData date={date} setDate={setDate} />
                        )
                    }
                    {
                        pageAgendamento === 2 && (
                            <EscolherProfissional date={date} setDate={setDate}/>
                        )
                    }

                    <div className="flex justify-between">
                        <Button disabled={pageAgendamento === 1} className="rounded-full px-3 py-0" onClick={backPage}><ArrowLeft /></Button>
                        <Button disabled={pageAgendamento === 2} className="rounded-full px-3 py-0" onClick={nextPage}><ArrowRight /></Button>
                    </div>
                </div>

            </DialogContent>
        </Dialog>

    );
}