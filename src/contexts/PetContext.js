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
                .then(setInterval(cat => setCat(cat)), 5000))
            .catch(err => console.log(err, err.message))
    }

    const newDog = () => {
        PetsService.adpotDog()
            .then(() => PetsService.getDog()
                .then(setInterval(dog => setDog(dog)), 5000))
            .catch(err => console.log(err, err.message))
    }

    const adoptPet = (animal) => {
        const type = animal == 'cat' ? cat : dog;

        let temp = people
        temp.shift()

        setPeople(temp)

        if (type === cat) {

            newCat()

        } else {

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
