import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const login = async (email, password) => {
        try {
            const res = await axios.post('http://localhost:3002/login', { email, password });
            console.log('Login response:', res.data);
            setUser(res.data.user);
            setToken(res.data.token);
            return true;
        } catch (error) {
            console.error('Login error:', error);
            return false;
        }
    };

    const logout = () => {
        setUser(null);
        setToken(null);
    };

    const updateScore = async (score) => {
        if (!token) {
            console.error('No token found');
            return false;
        }
        try {
            await axios.post('http://localhost:3002/updateScore', { token, score });
            setUser((prevUser) => ({ ...prevUser, score }));
            return true;
        } catch (error) {
            console.error('Update score error:', error);
            return false;
        }
    };

    const fetchScore = async () => {
        if (!token) {
            console.error('No token found');
            return null;
        }
        try {
            const res = await axios.get('http://localhost:3002/getScore', {
                headers: { 'x-auth-token': token }
            });
            return res.data.score;
        } catch (error) {
            console.error('Fetch score error:', error);
            return null;
        }
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout, fetchScore, updateScore }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
