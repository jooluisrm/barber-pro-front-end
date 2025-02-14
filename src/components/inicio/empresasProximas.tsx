"use client";

import { useEffect, useState } from "react";
import { HabilitarLocalizacao } from "./habilitarLocalizacao";
import { ItemEmpresaProxima } from "./itemEmpresaProxima";
import { SkeletonItemEmpresa } from "./SkeletonItemEmpresa";
import { buscarBarbeariasProximas } from "@/api/barbearia/barbeariaServices";
import { Barbearia } from "@/types/type";

export const EmpresasProximas = () => {
    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [error, setError] = useState<boolean | null>(null);
    const [empresasProximas, setEmpresasProximas] = useState<Barbearia[]>([]);
    const [skeleton, setSkeleton] = useState(false);

    useEffect(() => {
        if ("geolocation" in navigator) {
            setSkeleton(true); // Ativa o Skeleton antes de começar

            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const userLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };

                    setLocation(userLocation);
                    setError(false); // Indica que a geolocalização foi obtida com sucesso

                    try {
                        // Faz a requisição para buscar barbearias próximas
                        const dados = await buscarBarbeariasProximas(userLocation.latitude, userLocation.longitude);
                        setEmpresasProximas(dados);
                    } catch (erro) {
                        console.error("Erro ao buscar barbearias:", erro);
                    } finally {
                        setSkeleton(false); // Sempre desativa o skeleton
                    }
                },
                (err) => {
                    setError(true); // Indica que a localização está desativada
                    setSkeleton(false); // Remove o Skeleton mesmo em caso de erro
                    console.error(err);
                }
            );
        } else {
            setError(true); // Se geolocalização não for suportada
        }
    }, []);

    return (
        <section className="container mx-auto min-h-80">
            <div>
                <h1 className="text-xl">Empresas Próximas</h1>
            </div>

            {error && <HabilitarLocalizacao />}

            {!error && !skeleton && empresasProximas.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
                    {empresasProximas.map((item: Barbearia) => (
                        <ItemEmpresaProxima key={item.id} data={item} />
                    ))}
                </div>
            )}

            {!error && skeleton && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <SkeletonItemEmpresa key={index} />
                    ))}
                </div>
            )}

            {!error && !skeleton && empresasProximas.length === 0 && (
                <p className="dark:text-gray-400 text-gray-500 py-5">
                    Nenhuma barbearia próxima encontrada.
                </p>
            )}
        </section>
    );
};
