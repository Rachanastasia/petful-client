import React, { useEffect, Fragment, useState } from 'react';
import PetsService from '../services/pets-service';
import Pet from './Pet';
import LandingPage from './LandingPage';
import ReadyToAdopt from './ReadyToAdopt';
import Adopt from './Adopt';

function Main() {
    const [content, setContent] = useState('main');
    const [cat, setCat] = useState(null);
    const [dog, setDog] = useState(null);
    const [people, setPeople] = useState(["Randy Lahey", "Trevor Cory", "Jim Lahey", "Rachel", "Sam", "test"])
    const [user, setUser] = useState('test')




    useEffect(() => {
        PetsService.getCat().then(cat => setCat(cat));
        PetsService.getDog().then(dog => setDog(dog));
    }, [])



    return (
        <Fragment>
            {people.length && user ? <ReadyToAdopt name={user} people={people} /> : null}
            {
                content === 'dog'
                    ? <Pet {...dog} type='dog' move={(c) => setContent(c)} />
                    : content === 'cat'
                        ? <Pet {...cat} type='cat' move={(c) => setContent(c)} />
                        : content === 'adopt'

                            ? <Adopt
                                move={(c) => setContent(c)}
                                people={(p) => setPeople(p)}
                                user={(u) => setUser(u)} />
                            : <LandingPage cat={cat} dog={dog} move={(c) => setContent(c)} />

            }
        </Fragment>


    )
}

export default Main
