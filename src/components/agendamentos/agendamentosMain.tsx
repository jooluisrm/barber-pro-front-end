import { ItemAgendamento } from "./itemAgendamento";

export const AgendamentosMain = () => {
    return (
        <main>
            <h1 className="text-4xl pt-10 border-b-4 pb-5">Meus Agendamentos</h1>
            <div className="py-10 grid gap-5 grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3">
                <ItemAgendamento />
                <ItemAgendamento />
                <ItemAgendamento />
                <ItemAgendamento />
                <ItemAgendamento />
            </div>
        </main>
    );
}