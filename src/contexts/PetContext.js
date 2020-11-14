import React, { useState } from 'react'

export const PetContext = React.createContext({
    user: '',
    setUser: () => { },
})

export function PetProvider(props) {

    const [user, setUser] = useState('');


    const value = {
        user,
        setUser,
    }


    return (
        <PetContext.Provider value={value}>
            {props.children}
        </PetContext.Provider>
    )
}

export default PetContext
