import { EmpresasProximas } from "./empresasProximas";
import { TodasAsEmpresas } from "./todasAsEmpresas";
import { WelcomeSearch } from "./welcomeSearch";

export const InicioMain = () => {
    return (
        <main>
            <WelcomeSearch type="button" />
            <EmpresasProximas />
            <TodasAsEmpresas />
        </main>
    );
}