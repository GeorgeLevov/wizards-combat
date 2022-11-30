import api from "../appwrite";
import { useEffect, useState } from "react";

export const LoginUser = async () => {
    useEffect(() => {
        const tryToLogin = async () => {
            try {
                const user = await api.createAnonymous();
                console.log(user);
                return user;
            } catch (error) {
                console.log(error);
            }
        };
        tryToLogin();
    }, []);

    // const data = await tryToLogin();
    // return data;
};

export const getUser = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const tryToGetUser = async () => {
            try {
                const user = await api.getAccount();
                return user;
            } catch (error) {
                console.log(error);
            }
        };
        setUser(tryToGetUser());
    }, []);

    return user;
};

export const deleteSession = async () => {
    try {
        const user = await api.deleteCurrentSession();
        return user;
    } catch (error) {
        console.log(error);
    }
};
