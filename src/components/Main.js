import React, { useEffect, Fragment, useState } from 'react';
import PetsService from '../services/pets-service';
import PeopleService from '../services/person-service'
import Pet from './Pet';
import LandingPage from './LandingPage';
import WaitingRoom from './WaitingRoom';
import Adopt from './Adopt';
import { Route, Switch } from 'react-router-dom';

function Main() {
    //sets page view

    //current cat and dog
    const [cat, setCat] = useState(null);
    const [dog, setDog] = useState(null);

    //current people in line
    const [people, setPeople] = useState([])
    //current user's last entered name
    const [user, setUser] = useState('test')


    useEffect(() => {
        PetsService.getCat().then(cat => setCat(cat));
        PetsService.getDog().then(dog => setDog(dog));
        PeopleService.getAllPeople().then(p => setPeople(p))

    }, [])

    const newCat = () => {
        PetsService.adpotCat()
            .then(() => PetsService.getCat()
                .then(cat => setCat(cat)))
            .catch(err => console.log(err, err.message))
    }

    const newDog = () => {
        PetsService.adpotDog()
            .then(() => PetsService.getDog()
                .then(dog => setDog(dog))
            )
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

    return (
        <Fragment>

            <Switch>

                <Route
                    exact
                    path='/'
                    render={() => <LandingPage cat={cat} dog={dog} />}
                />

                <Route
                    path='/cat'
                    render={() => <Pet {...cat} type='cat' />} />

                <Route
                    path='/dog'
                    render={() => <Pet {...dog} type='dog' />} />

                <Route
                    path='/register'
                    render={() => <Adopt user={(u) => setUser(u)} />} />

                <Route
                    path='/adopt'
                    render={() => <WaitingRoom
                        user={(u) => setUser(u)}
                        name={user}
                        people={people}
                        adoptPet={(p) => adoptPet(p)}
                        getAllPeople={() => PeopleService.getAllPeople().then(p => setPeople(p))} />
                    } />

            </Switch>


        </Fragment>


    )
}

export default Main




// {user && people
    // ? <ReadyToAdopt

    //     updatePeople={() => PeopleService.getAllPeople().then(people => setPeople(people))} />
    // : null}
