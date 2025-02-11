"use client";

import { useEffect, useState } from "react";
import { HabilitarLocalizacao } from "./habilitarLocalizacao";
import { ItemEmpresaProxima } from "./itemEmpresaProxima";
import { SkeletonItemEmpresa } from "./SkeletonItemEmpresa";
import { barbearias } from "@/dadosFakes/data";
import { Barbearia } from "@/types/type";

export const EmpresasProximas = () => {
    const calcularDistancia = (latUsuario: number, lonUsuario: number, latDestino: number, lonDestino: number) => {
        const raioTerraKm = 6371; // Raio da Terra em km
        const diferencaLat = (latDestino - latUsuario) * (Math.PI / 180);
        const diferencaLon = (lonDestino - lonUsuario) * (Math.PI / 180);

        const a =
            Math.sin(diferencaLat / 2) * Math.sin(diferencaLat / 2) +
            Math.cos(latUsuario * (Math.PI / 180)) *
            Math.cos(latDestino * (Math.PI / 180)) *
            Math.sin(diferencaLon / 2) *
            Math.sin(diferencaLon / 2);

        const circulo = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        return raioTerraKm * circulo; // Retorna a distância em km
    };

    const [location, setLocation] = useState<{ latitude: number; longitude: number } | null>(null);
    const [error, setError] = useState<boolean | null>(null);
    const [empresasProximas, setEmpresasProximas] = useState<Barbearia[]>([]);
    const [skeleton, setSkeleton] = useState(false);

    useEffect(() => {
        if ("geolocation" in navigator) {
            setSkeleton(true); // Ativa o Skeleton antes de começar
    
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
    
                    setLocation(userLocation);
                    setError(true);
    
                    // Calcula a distância e filtra barbearias a até 50km de distância
                    const empresasFiltradas: any = barbearias
                        .map((barbearia) => ({
                            ...barbearia,
                            distancia: calcularDistancia(
                                userLocation.latitude,
                                userLocation.longitude,
                                barbearia.latitude,
                                barbearia.longitude
                            ),
                        }))
                        .filter((barbearia) => barbearia.distancia <= 50) // Apenas barbearias a ≤ 50km
                        .sort((a, b) => a.distancia - b.distancia); // Ordena por proximidade
    
                    setEmpresasProximas(empresasFiltradas);
    
                    // Adiciona um pequeno delay antes de esconder o skeleton
                    setTimeout(() => setSkeleton(false), 1000); 
                },
                (err) => {
                    setError(false);
                    setSkeleton(false); // Remove o Skeleton mesmo em caso de erro
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
            {!error && <HabilitarLocalizacao />}
            {error && !skeleton && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
                    {empresasProximas.map((item: Barbearia) => (
                        <ItemEmpresaProxima key={item.id} data={item} />
                    ))}
                    {empresasProximas.length === 0 && <p className="dark:text-gray-400 text-gray-500">Nenhuma barbearia próxima encontrada.</p>}
                    
                </div>
            )}
            {error && skeleton && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 py-5">
                    <SkeletonItemEmpresa />
                    <SkeletonItemEmpresa />
                    <SkeletonItemEmpresa />
                    <SkeletonItemEmpresa />
                    <SkeletonItemEmpresa />
                    <SkeletonItemEmpresa />
                </div>
            )}
        </section>
    );
};
