import { EmpresaSection1 } from "./empresaSection1";
import { EmpresaSection2 } from "./empresaSection2";

export const EmpresaMain = () => {
    return (
        <main className="lg:flex py-10">
            <EmpresaSection1 />
            <EmpresaSection2 />
        </main>
    );
}