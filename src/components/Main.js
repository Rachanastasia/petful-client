import React, { useEffect, Fragment, useContext } from 'react';
import Pet from './Pet';
import LandingPage from './LandingPage';
import WaitingRoom from './WaitingRoom';
import Adopt from './Adopt';
import { Route, Switch } from 'react-router-dom';
import { PetContext } from '../contexts/PetContext';

function Main() {
    const ctx = useContext(PetContext);


    useEffect(() => {
        if (!ctx.cat) {
            ctx.getCat()
        }
        if (!ctx.dog) {
            ctx.getDog()
        }

        if (ctx.people === []) {
            ctx.getPeople();
        }

    }, [])

    return (
        <Fragment>

            <Switch>

                <Route
                    exact
                    path='/'
                    component={LandingPage}
                />

                <Route
                    path='/cat'
                    render={() => <Pet type='cat' {...ctx.cat} />} />

                <Route
                    path='/dog'
                    render={() => <Pet type='dog' {...ctx.dog} />} />

                <Route
                    path='/register'
                    component={Adopt} />

                <Route
                    path='/adopt'
                    render={() => <WaitingRoom {...ctx} />} />

            </Switch>


        </Fragment>


    )
}

export default Main




// {user && people
    // ? <ReadyToAdopt

    //     updatePeople={() => PeopleService.getAllPeople().then(people => setPeople(people))} />
    // : null}
