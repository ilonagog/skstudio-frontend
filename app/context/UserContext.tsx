"use client";

import {createContext, useState, useEffect, type ReactNode} from "react";

export type User = {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    admin: boolean;
};

type UserContextType = {
    user: User | null;
    loggedIn: boolean;
    loading: boolean;
    login: (user: User) => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

const UserProvider = ({children}: { children: ReactNode}) => {
    const [user, setUser]= useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const loggedIn =user !== null;

    useEffect(()=>{
        let cancelled = false;
        fetch("/api/me")
        .then((response) => (response.ok ? response.json() : null))
        .then((data: User |null) => {
            if(!cancelled) setUser(data)
        })
        .catch(()=> {
            if(!cancelled) setUser(null);
        })
        .finally(()=>{
            if(!cancelled) setLoading(false)
        })
    return ()=> {
        cancelled = true;
    }
    },[])


    const login = (user: User) =>{
        setUser(user);
    }
    const logout=()=>{
        setUser(null)
    }
    return (
        <UserContext.Provider value={{user, loggedIn, loading, login, logout}}>
            {children}
        </UserContext.Provider>
    );
};
export {UserProvider, UserContext};
 