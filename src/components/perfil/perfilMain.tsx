import { Section1 } from "./section1";
import { Section2 } from "./section2";

export const PerfilMain = () => {
    return (
        <main className="grid grid-cols-1 md:flex justify-center gap-10 py-10">
            <Section1 />
            <Section2 />
        </main>

    );
}