import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ButtonLogin } from "./buttonLogin";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const DialogRegister = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <ButtonLogin />
            </DialogTrigger>
            <DialogContent>
                <DialogTitle className="text-xl font-semibold text-center">Acessar Conta</DialogTitle>
                <DialogDescription>
                    Preencha os campos abaixo para fazer login.
                </DialogDescription>
                <div className="flex flex-col gap-3">
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input id="email" placeholder="Digite seu e-mail..." autoFocus/>
                    </div>
                    <div>
                        <label htmlFor="senha">Senha</label>
                        <Input id="senha" placeholder="Digite sua senha..."/>
                    </div>
                    <Button>Fazer Login</Button>
                </div>
                <p className="flex justify-center gap-1"><p>Não possui uma conta?</p><span className="text-[#0072bc] font-bold cursor-pointer">Cadastre-se</span></p>
            </DialogContent>
        </Dialog>
    );
}
