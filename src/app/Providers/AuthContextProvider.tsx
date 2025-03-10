import axios, { AxiosError } from "axios";
import { AuthContext, TUser } from "../Context/AuthContext";
import Router from "next/router";
import { useEffect, useState } from "react";

export default function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<TUser | null>(null)
    async function fetchCurrentUser(){
        try{

        }catch(err){
            
        }

    }
    async function signIn(email: string, password: string) {
        try {
            const response = await axios.post('/users/signIn', { user: email, password });
            Router.push('/' as string)

        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                console.error("Axios Error:", error.message);
                console.error("Response:", error.response?.data);
                alert(error.response?.data || error.message);
            } else if (error instanceof Error) {
                console.error("Generic Error:", error.message);
                alert(error.message);
            } else {
                console.error("Unexpected error:", error);
                alert("An unexpected error occurred.");
            }
        }
    }

    async function signOut() {
        try {
            await axios.post('/users/signOut');
        } catch (error: unknown) {
            if (error instanceof AxiosError) {
                console.error("Axios Error:", error.message);
                console.error("Response:", error.response?.data);
                alert(error.response?.data || error.message);
            } else if (error instanceof Error) {
                console.error("Generic Error:", error.message);
                alert(error.message);
            } else {
                console.error("Unexpected error:", error);
                alert("An unexpected error occurred.");
            }
        }
    }

    function refresh(){
        fetchCurrentUser()
    }

    useEffect(() => {
        fetchCurrentUser();
    }, []);

    return <AuthContext.Provider value={{ signIn, signOut, user, refresh }}>{children}</AuthContext.Provider>
}