import { DialogRegister } from "../LoginAndRegister/dialogRegister";
import { Button } from "../ui/button";

export const LoginBlock = () => {
    return (
        <section className="container mx-auto min-h-screen flex flex-col justify-center pb-20">
            <div className="">
                <div className="pb-5">
                    <h1 className="text-4xl font-bold">Faça login para continuar</h1>
                    <p className="text-gray-400">Agende serviços online sem pagar nada!</p>
                </div>
                <DialogRegister />
            </div>
        </section>
    );
}