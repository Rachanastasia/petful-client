import React, { useEffect, Fragment, useState, useContext } from 'react';
import PetsService from '../services/pets-service';
import Pet from './Pet';
import LandingPage from './LandingPage';
import Adopt from './Adopt';
import About from './About';

function Main() {
    const [content, setContent] = useState('main');
    const [cat, setCat] = useState(null);
    const [dog, setDog] = useState(null);

    const page = {
        content,
        change: (val) => setContent(val)
    }

    const PageContext = React.createContext(page)


    useEffect(() => {
        PetsService.getCat().then(cat => setCat(cat));
        PetsService.getDog().then(dog => setDog(dog));
    }, [])

    return (
        <PageContext.Provider value={page}>
            <Fragment>
                {
                    content === 'main'
                        ? <LandingPage cat={cat} dog={dog} move={(c) => setContent(c)} />
                        : content === 'dog'
                            ? <Pet {...dog} type='dog' move={(c) => setContent(c)} />
                            : content === 'cat'
                                ? <Pet {...cat} type='cat' move={(c) => setContent(c)} />
                                : content === 'about'
                                    ? <About move={(c) => setContent(c)} />
                                    : <Adopt move={(c) => setContent(c)} />

                }
            </Fragment>
        </PageContext.Provider>

    )
}

export default Main
