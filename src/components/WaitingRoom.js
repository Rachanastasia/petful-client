import React, { useState, useEffect, Fragment } from 'react';
import PetsService from '../services/pets-service';
import { MdExpandLess, MdExpandMore } from 'react-icons/md'

function WaitingRoom(props) {


    const [toggleQueue, setToggleQueue] = useState(false)
    const [adopt, setAdopt] = useState(false);
    const [moving, setMoving] = useState(false)

    let index = 0;

    const getPlace = (arr, name) => {
        let i = 0;
        for (i = 0; i < arr.length; i++) {
            if (arr[i] === name) {
                break;
            }

            return i;
        }
    }

    useEffect(() => {
        props.getAllPeople();
        handleAdoptPets();
    }, [])


    function handleAdoptPets() {


        index = getPlace(props.people, props.name);

        for (let i = 0; i < index + 1; i++) {
            let pet = Math.floor(Math.random() * 2) === 0 ? 'cat' : 'dog';
            setInterval(() => props.adoptPet(pet), 10000)
        }

        setMoving(false);
    }

    if (adopt === true) {
        props.setUser(null)
    }



    return (
        <section>
            <h3 className='ready_title'>You're in line adopt!</h3>
            <p className='banner_p'>There are {index} people ahead of you.</p>
            <div>
                <p className='banner_p'>There are {props.people.length} people waiting to adopt with Petful</p>
                {!toggleQueue
                    ? <p className='blue pointer center' onClick={() => setToggleQueue(true)}><MdExpandMore className='arrow' aria-label='show more' /></p>
                    : <Fragment>
                        {props.people.map((p, index) => <p key={index}>{p}</p>)}
                        <p className='blue pointer center' onClick={() => setToggleQueue(false)}><MdExpandLess className='arrow' aria-label='show less' /></p>
                    </Fragment>
                }
            </div>
        </section>
    )

}

export default WaitingRoom
