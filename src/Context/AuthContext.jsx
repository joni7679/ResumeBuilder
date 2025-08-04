import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/Firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const AuthContext = createContext();

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
                console.log("User found:", currentUser); 
            } else {
                setUser(null);
                console.log("No user found.");
            }
            setLoading(false);
        }, (err) => {
            console.error("Auth error:", err);
            setError(err);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);





    return (
        <AuthContext.Provider value={{ user, loading, setLoading, error, setError }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
