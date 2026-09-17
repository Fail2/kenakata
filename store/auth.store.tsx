"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";

interface AuthContextType {
    token: string | null;
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const savedToken = localStorage.getItem("kenakata-token");

        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    function login(newToken: string) {
        localStorage.setItem("kenakata-token", newToken);
        setToken(newToken);
    }

    function logout() {
        localStorage.removeItem("kenakata-token");
        setToken(null);
    }

    return (
        <AuthContext.Provider
            value={{
                token,
                isAuthenticated: Boolean(token),
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
}