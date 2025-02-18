"use client"

import { useEffect, useState } from "react";
import { ItemEmpresaProxima } from "../inicio/itemEmpresaProxima";
import { WelcomeSearch } from "../inicio/welcomeSearch";
import { SelectFilterBarbearia } from "./selectFilterBarbearia";
import { buscarBarbeariasProximas, getAllBarbearias } from "@/api/barbearia/barbeariaServices";
import { Barbearia } from "@/types/type";
import { HabilitarLocalizacao } from "../inicio/habilitarLocalizacao";
import { SkeletonItemEmpresa } from "../inicio/SkeletonItemEmpresa";

export const BuscarMain = () => {

    const [empresasProximas, setEmpresasProximas] = useState<Barbearia[]>([]);
    const [empresasTodas, setEmpresasTodas] = useState<Barbearia[]>([]);

    const [skeleton, setSkeleton] = useState(false);
    const [error, setError] = useState(true);

    const [selectFilter, setSelectFilter] = useState("proximas");
    
    const [inputBuscar, setInputBuscar] = useState("");

    const selecionarFiltro = (value: string) => {
        if (value) {
            setSelectFilter(value);
        }
    }

    useEffect(() => {
        if ("geolocation" in navigator) {
            setSkeleton(true); // Ativa o Skeleton antes de começar

            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    const userLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };

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

    useEffect(() => {
        const carregarTodasBarbearias = async () => {
            setSkeleton(true);
            try {
                const dados = await getAllBarbearias();
                setEmpresasTodas(dados);
            } catch (error) {
                console.log(error);
            }
            setSkeleton(false);
        };
    
        carregarTodasBarbearias();
    }, []);
    

    return (
        <main>
            <WelcomeSearch type="search" setInputBuscar={setInputBuscar} inputBuscar={inputBuscar}/>
            <nav className="flex justify-between item-center mt-5">
                <h1 className="text-2xl font-bold">
                    {selectFilter === "proximas" ? <p>Exibir Próximas:</p> : <p>Exibir todas:</p>}
                </h1>
                <SelectFilterBarbearia onChange={selecionarFiltro} selectFilter={selectFilter}/>
            </nav>
            {
                selectFilter === "proximas" ? (
                    <div>
                        {
                            error && <HabilitarLocalizacao />
                        }
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
                    </div>
                ) :
                (
                    <div>
                        {!error && !skeleton && empresasTodas.length > 0 && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 py-5">
                                {empresasTodas.map((item: Barbearia) => (
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
                    </div>
                )
            }
            {!error && !skeleton && empresasProximas.length === 0 && (
                <p className="dark:text-gray-400 text-gray-500 py-5">
                    Nenhuma barbearia próxima encontrada.
                </p>
            )}
            {!error && !skeleton && empresasTodas.length === 0 && (
                <p className="dark:text-gray-400 text-gray-500 py-5">
                    Nenhuma barbearia encontrada.
                </p>
            )}
        </main>
    );
}