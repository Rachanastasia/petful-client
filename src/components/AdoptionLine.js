import React, { useState, Fragment, useEffect } from 'react'
import PetsService from '../services/pets-service';
import TurnToAdopt from './TurnToAdopt';

function AdoptionLine(props) {
    const [ready, setReady] = useState(false)
    const [recent, setRecent] = useState([])

    const recentJsx = recent.map((p, index) => <p key={index}>{p.pet} was adopted by {p.person}</p>)
    const peopleJsx = [...props.people, props.user].map((p, index) => <p key={index}>{p}</p>)

    if (!props.people.length && !ready) {
        setReady(true)
    }

    const handleAdoption = async () => {
        let lastAdoption = {}
        let temp = props.people
        let shifted = temp.shift()
        props.setPeople(temp)

        let coinFlip = Math.floor(Math.random * 1) === 1 ? 'cat' : 'dog'

        console.log('coinflip', coinFlip)

        if (coinFlip === 'dog') {
            await PetsService.adpotDog()
            let dog = await PetsService.getDog()
            props.setDog(dog)

            lastAdoption = {
                person: shifted,
                pet: props.dog.name
            }
        }

        else if (coinFlip === 'cat') {
            await PetsService.adpotCat()
            let cat = await PetsService.getCat()
            props.setCat(cat)

            lastAdoption = {
                person: shifted,
                pet: props.cat.name
            }
        }

        setRecent([...recent, lastAdoption])
    }

    return (
        <Fragment>
            {ready === true
                ? <TurnToAdopt cat={props.cat} dog={props.dog} setCat={(c) => props.setCat(c)} setDog={(d) => props.setDog(d)} />
                : <Fragment>
                    <h3 className='ready_title'>You're in line adopt!</h3>

                    <div>
                        <div>
                            <h4 className='banner_p'>{props.people.length} people are ahead of you in line</h4>
                            {peopleJsx}</div>
                        <div>
                            <h4>Recent adoptions</h4>
                            {recentJsx}</div>
                        <button onClick={() => handleAdoption()}></button>
                    </div>
                </Fragment>}
        </Fragment>
    )
}

export default AdoptionLine
