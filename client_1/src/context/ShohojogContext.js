import React, {useState, createContext} from "react";

export const ShohojogContext = createContext();

export const ShohojogProvider = (props) => {
    const [user, setUser] = useState([]);

    const addUser = (user) => {
        setUser(user);
    }
    
    return (
        <ShohojogContext.Provider value={{user,setUser, addUser}}>
            {props.children}
        </ShohojogContext.Provider>
    );
}