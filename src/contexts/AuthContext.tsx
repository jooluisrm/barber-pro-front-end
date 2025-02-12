"use client";

import { createContext, useState, useContext, ReactNode } from "react";

export interface User {
    id: string;
    nome: string;
    email: string;
    token: string;
}

export interface Token {
    token: string;
}

interface AuthContextType {
    user: User | null;
    token: Token | null;
    login: (userData: User) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {

    const [user, setUser] = useState<User | null>(null);
    const [token, setToken] = useState<Token | null>(null);

    const login = (userData: any) => {
        setUser(userData.usuario);
        setToken(userData.token);
    };

    const logout = () => {
        setUser(null);
        setToken(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
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
