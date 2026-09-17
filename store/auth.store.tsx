"use client";

import { createContext, useContext, useEffect, useState, } from "react";

interface AuthContextType {
    accessToken: string | null;
    refreshToken: string | null;
    isAuthenticated: boolean;
    login: (accessToken: string, refreshToken: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [refreshToken, setRefreshToken] = useState<string | null>(null);

    useEffect(() => {
        const savedAccessToken = localStorage.getItem(
            "kenakata-access-token"
        );

        const savedRefreshToken = localStorage.getItem(
            "kenakata-refresh-token"
        );

        if (savedAccessToken) {
            setAccessToken(savedAccessToken);
        }

        if (savedRefreshToken) {
            setRefreshToken(savedRefreshToken);
        }
    }, []);

    function login(
        newAccessToken: string,
        newRefreshToken: string
    ) {
        localStorage.setItem(
            "kenakata-access-token",
            newAccessToken
        );

        localStorage.setItem(
            "kenakata-refresh-token",
            newRefreshToken
        );

        setAccessToken(newAccessToken);
        setRefreshToken(newRefreshToken);
    }

    function logout() {
        localStorage.removeItem("kenakata-access-token");
        localStorage.removeItem("kenakata-refresh-token");

        setAccessToken(null);
        setRefreshToken(null);
    }

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                refreshToken,
                isAuthenticated: Boolean(accessToken),
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
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
}