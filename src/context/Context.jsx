import { createContext, useContext, useState, useEffect, useReducer } from "react";
import reducer from "../reducer/Reducer";

import { 
    LOADING,
    DISPLAY_USERS, 
    DISPLAY_SINGLE_USER,
    CLEAR_USERS,
    SET_ALERT,
    REMOVE_ALERT,
} from "../reducer/actions";

const GITHUB_URL = import.meta.env.VITE_REACT_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;

const AppContext = createContext();

const initialState = {
    users: [],
    user: {},
    isLoading: false,
    alert: null,
};


//Provider
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer,initialState);

    //dispatches
    const clearSearch = () => dispatch({ type: CLEAR_USERS });
    const setAlert = (msg, type) => {
        dispatch({ type: SET_ALERT, payload: { msg, type } })
        //remove alert 
        setTimeout(() => {dispatch({ type: REMOVE_ALERT })}, 3000);
    }

    // fetchUsers - fetch users
    const searchUsers = async (text) => {

        const params = new URLSearchParams({
            q: text,
        })

        dispatch({ type: LOADING })
        try {
            const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                }
            });
            const { items } = await response.json();
            dispatch({ type: DISPLAY_USERS, payload: { items }})
        } catch(error) {
            console.log(error);
        }
    }


    // fetchSingleUser - fetch single user
    const fetchSingleUser = async (login) => {

        dispatch({ type: LOADING })
        try {
            const response = await fetch(`${GITHUB_URL}/users/${login}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`,
                }
            });

            if (response.status === 404) {
                window.location = "/NoPage";
                return
            }

            const data = await response.json();
            // console.log(data)
            dispatch({ type: DISPLAY_SINGLE_USER, payload: { data }})
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <AppContext.Provider value={{
            ...state,
            searchUsers,
            fetchSingleUser,
            clearSearch,
            setAlert,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()  => useContext(AppContext);
