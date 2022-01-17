import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    setData: (value) => { }
});

export const AuthContextProvider = (props) => {
    const [data, setData] = useState({
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null
    })

    const setDataHandler = (data) => {
        setData((prevState) => {
            return {
                ...prevState,
                ...data
            }
        })
    }

    return (
        <AuthContext.Provider
            value={{
                token: data.token,
                isAuthenticated: data.isAuthenticated,
                loading: data.loading,
                user: data.user,
                setData: setDataHandler
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContext;