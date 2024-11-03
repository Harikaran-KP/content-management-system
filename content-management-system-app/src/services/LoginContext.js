// LoginContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [adminDetails, setAdminDetails] = useState(null);

    useEffect(() => {
        // Checking localStorage on initialization to restore login state
        const storedAdmin = localStorage.getItem('adminDetails');
        if (storedAdmin) {
            setAdminDetails(JSON.parse(storedAdmin));
            setIsLoggedIn(true);
        }
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', {
                email,
                password
            });

            // Saving login state and admin details to localStorage
            setIsLoggedIn(true);
            setAdminDetails(response.data.admin);
            localStorage.setItem('adminDetails', JSON.stringify(response.data.admin));
            setLoading(false);
        } catch (error) {
            setLoading(false);
            throw new Error(error.response?.data?.error || 'Login failed');
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setAdminDetails(null);
        localStorage.removeItem('adminDetails'); // Clearing login details from localStorage while logging out
    };

    return (
        <LoginContext.Provider value={{ isLoggedIn, adminDetails, login, logout, loading }}>
            {children}
        </LoginContext.Provider>
    );
};
