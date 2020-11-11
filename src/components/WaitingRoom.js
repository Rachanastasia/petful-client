import React, { useState, useEffect, Fragment, useContext } from 'react';
import PetsService from '../services/pets-service';
import { MdExpandLess, MdExpandMore } from 'react-icons/md'
import { PetContext } from '../contexts/PetContext';




function WaitingRoom(props) {
    const ctx = useContext(PetContext)

    const [toggleQueue, setToggleQueue] = useState(false)
    const [place, setPlace] = useState(7)

    useEffect(() => {

        ctx.getPeople()

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




    return (
        <section>
            <h3 className='ready_title'>You're in line adopt!</h3>
            <p className='banner_p'>There are {ctx.people.length} people ahead of you.</p>
            <div>
                <p className='banner_p'>There are {ctx.people.length + 1} people waiting to adopt with Petful</p>
                {!toggleQueue
                    ? <p className='blue pointer center' onClick={() => setToggleQueue(true)}><MdExpandMore className='arrow' aria-label='show more' /></p>
                    : <Fragment>
                        {[...ctx.people, ctx.user].map((p, index) => <p key={index}>{p}</p>)}
                        <p className='blue pointer center' onClick={() => setToggleQueue(false)}><MdExpandLess className='arrow' aria-label='show less' /></p>
                    </Fragment>
                }
            </div>
        </section>
    )

}

export default WaitingRoom
