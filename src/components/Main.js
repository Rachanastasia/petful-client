import React, { useEffect, Fragment, useState } from 'react';
import PetsService from '../services/pets-service';
import LandingPage from './LandingPage';
import Adopt from './Adopt';
import { Route, Switch } from 'react-router-dom';
import PeopleService from '../services/person-service';

function Main() {

    //current cat and dog
    const [cat, setCat] = useState({});
    const [dog, setDog] = useState({});
    const [people, setPeople] = useState([])


    useEffect(() => {

        async function getData() {
            try {
                const c = await PetsService.getCat()
                setCat(c)

                const d = await PetsService.getDog()
                setDog(d)

                const p = await PeopleService.getAllPeople()
                setPeople(p)
            }
            catch {
                return err => console.log(err, err.message)
            }
        }
        getData()
    }, [])

    return (
        <Fragment>

            <Switch>

                <Route
                    exact
                    path='/'
                    render={() => <LandingPage
                        cat={cat}
                        dog={dog} />}
                />
                <Route
                    path='/register'
                    render={() => <Adopt
                        setDog={(d) => setDog(d)}
                        setCat={u => setCat(u)}
                        cat={cat}
                        dog={dog}
                        setPeople={(p) => setPeople(p)}
                        people={people} />}
                />

            </Switch>


        </Fragment>


    )
}

export default Main




// {user && people
    // ? <ReadyToAdopt

    //     updatePeople={() => PeopleService.getAllPeople().then(people => setPeople(people))} />
    // : null}
