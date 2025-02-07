import { pegarDataAtual } from "@/utils/pegarDataAtual";

export const WelcomeSearch = () => {
    return (
        <section className="container mx-auto">
            <div>
                <h1 className="text-2xl">Seja bem vindo(a)</h1>
                <p className="text-sm">{pegarDataAtual().week}, {pegarDataAtual().day} {pegarDataAtual().month} {pegarDataAtual().year}</p>
            </div>
        </section>
    );
}