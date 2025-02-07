import { EmpresasProximas } from "./empresasProximas";
import { WelcomeSearch } from "./welcomeSearch";

export const InicioMain = () => {
    return (
        <main>
            <WelcomeSearch />
            <EmpresasProximas />
        </main>
    );
}