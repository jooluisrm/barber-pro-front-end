import { InicioMain } from "@/components/inicio/inicioMain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Início | BarberPro",
};

const Home = () => {
    return (
        <div className="min-h-screen">
            <InicioMain />
        </div>
    );
}

export default Home;