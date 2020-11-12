import React, { useState, useEffect, Fragment, useContext } from 'react';
import PetsService from '../services/pets-service';
import { MdExpandLess, MdExpandMore } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { PetContext } from '../contexts/PetContext';
import PetPreview from './PetPreview';



function WaitingRoom(props) {
    const ctx = useContext(PetContext)

    const [toggleQueue, setToggleQueue] = useState(false)
    const [ready, setReady] = useState(false)
    const [cat, setCat] = useState(false)
    const [dog, setDog] = useState(false)

    useEffect(() => {

        ctx.getPeople().then(() => setReady(false))

        if (!ctx.cat) {
            ctx.getCat()
        }
        if (!ctx.dog) {
            ctx.getDog()
        }

    }, [])


    // function handleAdoptPets() {



    // for (let i = 0; i < ctx.people.length + 1; i++) {
    //     let pet = Math.floor(Math.random() * 2) === 0 ? 'cat' : 'dog';

    //     ctx.adoptPet(pet)
    // }


    if (ctx.people.length === 0) {
        if (ready === false) {
            setReady(true)

        }
    }

    const user = ctx.user ? ctx.user : 'You';
    return (
        <Fragment>
            {ready === true
                ? <section>
                    <h3>It's your turn!</h3>
                    <PetPreview selected={cat} select={(m) => setCat(m)}{...ctx.cat} type='cat' expanded={true} />
                    <PetPreview selected={dog} select={(m) => setDog(m)}{...ctx.dog} type='dog' expanded={true} />
                    <button onClick={() => setReady('review')}>Adopt</button>
                </section>
                : ready === 'review'
                    ? <section>
                        <h3>Congratulations!</h3>
                        {cat === true
                            ? <Fragment>
                                <h4>Your new cat:</h4>
                                <PetPreview {...ctx.cat} />
                            </Fragment>
                            : <Fragment>
                                <h4>Your new dog:</h4>
                                <PetPreview {...ctx.dog} />
                            </Fragment>
                        }
                        <Link to='/'><button>Done</button></Link>
                    </section>
                    : <section>
                        <h3 className='ready_title'>You're in line adopt!</h3>
                        <p className='banner_p'>There are {ctx.people.length ? [...ctx.people, user].length - 1 : 'no'} people ahead of you.</p>
                        <div>
                            <p className='banner_p'>There are {[...ctx.people, user].length} people waiting to adopt with Petful</p>
                            {!toggleQueue
                                ? <p className='blue pointer center' onClick={() => setToggleQueue(true)}>
                                    <MdExpandMore className='arrow' aria-label='show more' />
                                </p>
                                : <Fragment>
                                    {[...ctx.people, user].map((p, index) => <p key={index}>{p}</p>)}
                                    <p className='blue pointer center' onClick={() => setToggleQueue(false)}>
                                        <MdExpandLess className='arrow' aria-label='show less' />
                                    </p>
                                </Fragment>
                            }
                            <button onClick={() => ctx.adoptPet([...ctx.people, user])}>ADOPT</button>
                        </div>
                    </section>

            }
        </Fragment>
    )

}

export default WaitingRoom
