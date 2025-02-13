"use client";

import { createContext, useState, useContext, ReactNode, useEffect } from "react";

export interface User {
    id: string;
    nome: string;
    email: string;
    telefone: string;
}

interface AuthContextType {
    user: User | null;
    token: string | null;
    login: (userData: { usuario: User; token: string }) => void;
    setUser: any;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<string | null>(null);

    // Carregar usuário e token do localStorage ao iniciar
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
            setToken(storedToken);
        }
    }, []);

    const login = (userData: { usuario: User; token: string }) => {
        setUser(userData.usuario);
        setToken(userData.token);

        // Salvar no localStorage
        localStorage.setItem("user", JSON.stringify(userData.usuario));
        localStorage.setItem("token", userData.token);
    };

    const logout = () => {
        setUser(null);
        setToken(null);

        // Remover do localStorage
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    }
    return context;
};
