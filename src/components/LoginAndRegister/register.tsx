import { Button } from "../ui/button";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";

type Props = {
    backPage: VoidFunction;
}

export const Register = ({ backPage }: Props) => {
    return (
        <div>
            <div className="pb-5">
                <DialogTitle className="text-xl font-semibold text-center pb-3">
                    Nova Conta
                </DialogTitle>
                <DialogDescription>
                    Preencha os campos abaixo para criar uma nova conta.
                </DialogDescription>
            </div>

            <div className="flex flex-col gap-3 pb-5">
                <div>
                    <label htmlFor="nome">Nome completo</label>
                    <Input id="nome" placeholder="Informe Seu Nome" autoFocus />
                </div>
                <div>
                    <label htmlFor="tel">Celular</label>
                    <Input type="tel" id="tel" placeholder="Digite Seu Numero" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Input id="email" placeholder="Informe Seu Email" />
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <Input id="senha" placeholder="Informe Sua Senha" />
                </div>
                <Button className="font-bold">Criar Conta</Button>
            </div>
            <p className="flex justify-center gap-1"><p>Já tem uma conta?</p><button onClick={() => backPage()} className="text-[#0072bc] font-bold cursor-pointer">Acesse</button></p>
        </div>
    );
}