import React, { useState, Fragment } from 'react'
import PetsService from '../services/pets-service';
import TurnToAdopt from './TurnToAdopt';

function AdoptionLine(props) {

    const [ready, setReady] = useState(false)
    const peopleJsx = [...props.people, props.user].map((p, index) => <p key={index}>{p}</p>)

    return (
        <section>
            {ready === true
                ? <TurnToAdopt setCat={(c) => props.setCat(c)} setDog={(d) => props.setDog(d)} />
                : <Fragment>
                    <h3 className='ready_title'>You're in line adopt!</h3>
                    <p className='banner_p'>There are {props.people.length ? props.people.length : 'no'} people ahead of you.</p>
                    <div>
                        <div>{peopleJsx}</div>

                        <button onClick={async () => {
                            let temp = props.people
                            temp.shift()
                            props.setPeople(temp)


                            await PetsService.adpotDog()
                            let dog = await PetsService.getDog()
                            props.setDog(dog)

                        }}></button>
                    </div>
                </Fragment>}
        </section>
    )
}

export default AdoptionLine
