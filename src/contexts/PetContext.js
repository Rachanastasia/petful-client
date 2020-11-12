import React, { useState, useEffect } from 'react'
import PetsService from '../services/pets-service';
import PeopleService from '../services/person-service'


export const PetContext = React.createContext({
    user: '',
    cat: {},
    dog: {},
    people: [],
    setUser: () => { },
    adoptPet: () => { },
    getCat: () => { },
    getDog: () => { },
    getPeople: () => { }

})

export function PetProvider(props) {

    const [user, setUser] = useState('');
    //current cat and dog
    const [cat, setCat] = useState(null);
    const [dog, setDog] = useState(null);

    //current people in line
    const [people, setPeople] = useState([])

    const getCat = () => PetsService.getCat().then(cat => setCat(cat));
    const getDog = () => PetsService.getDog().then(dog => setDog(dog));
    const getPeople = () => PeopleService.getAllPeople()

    useEffect(() => {
        if (cat === {}) {
            console.log('useEffect ran')
            getCat()
        }
        if (dog === {}) {
            console.log('useEffect ran')
            getDog()
        }
        if (!people.length) {
            getPeople().then(p => setPeople(p))
        }
    }, [])



    const newCat = () => {
        PetsService.adpotCat()
            .then(() => PetsService.getCat()
                .then(cat => setCat(cat))
                .catch(err => console.log(err, err.message)))
    }

    const newDog = () => {
        PetsService.adpotDog()
            .then(() => PetsService.getDog()
                .then(dog => setDog(dog)))
            .catch(err => console.log(err, err.message))
    }

    const adoptPet = () => {
        const rand = !cat && !dog ? Math.floor(Math.random * 1) === 1 ? cat = true : dog = true : cat;

        let temp = people
        temp.shift()
        setPeople(temp)

        if (rand === 1) {
            newCat()
        }
        if (rand === 0) {
            newDog()
        }
    }

    const value = {
        user,
        cat,
        dog,
        people,
        setUser,
        adoptPet,
        getCat,
        getDog,
        getPeople
    }
    return (
        <PetContext.Provider value={value}>
            {props.children}
        </PetContext.Provider>
    )
}

export default PetContext
