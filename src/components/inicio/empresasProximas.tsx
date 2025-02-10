"use client"

import { useEffect, useState } from "react";
import { HabilitarLocalizacao } from "./habilitarLocalizacao";
import { ItemEmpresaProxima } from "./itemEmpresaProxima";
import { SkeletonItemEmpresa } from "./SkeletonItemEmpresa";
import { barbearias } from "@/dadosFakes/data";

export const EmpresasProximas = () => {

    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [error, setError] = useState<boolean | null>(null);

    const [empresasProximas, setEmpresasProximas] = useState(barbearias);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    setError(true)
                },
                (err) => {
                    setError(false);
                    console.error(err);
                }
            );
        } else {
            setError(false);
        }
    }, []);

    return (
        <section className="container mx-auto min-h-80">
            <div>
                <h1 className="text-xl">Empresas Próximas</h1>
            </div>
            {
                !error && <HabilitarLocalizacao />
            }
            {
                error && <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 py-5">
                    {empresasProximas.map((Item) => (
                        <ItemEmpresaProxima />
                    ))}
                    <SkeletonItemEmpresa />
                </div>
            }
        </section>
    );
}