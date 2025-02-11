import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const Section2 = () => {
    return (
        <section className="flex flex-col gap-5 md:w-[400px]">
            <label htmlFor="nome">
                Nome Completo
                <Input />
            </label>
            <label htmlFor="nome">
                Celular
                <Input />
            </label>
            <Button>Salvar</Button>
        </section>
    );
}