import { Button } from "../ui/button";
import { DialogDescription, DialogTitle } from "../ui/dialog";
import { Input } from "../ui/input";

type Props = {
    nextPage: VoidFunction;
}

export const Login = ({ nextPage }: Props) => {
    return (
        <div>
            <div className="pb-5">
                <DialogTitle className="text-xl font-semibold text-center pb-3">
                    Acessar Conta
                </DialogTitle>
                <DialogDescription>
                    Preencha os campos abaixo para fazer login.
                </DialogDescription>
            </div>

            <div className="flex flex-col gap-3 pb-5">
                <div>
                    <label htmlFor="email">Email</label>
                    <Input id="email" placeholder="Digite seu e-mail..." autoFocus />
                </div>
                <div>
                    <label htmlFor="senha">Senha</label>
                    <Input id="senha" placeholder="Digite sua senha..." />
                </div>
                <Button className="font-bold">Fazer Login</Button>
            </div>
            <p className="flex justify-center gap-1"><p>Não possui uma conta?</p><button onClick={() => nextPage()} className="text-[#0072bc] font-bold cursor-pointer">Cadastre-se</button></p>
        </div>
    );
}