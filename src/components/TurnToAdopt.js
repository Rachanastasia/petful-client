import React, { useState, Fragment } from 'react'
import { Link } from 'react-router-dom';
import PetPreview from './PetPreview';
import PetsService from '../services/pets-service'

function TurnToAdopt(props) {

    const [cat, setCat] = useState(false)
    const [dog, setDog] = useState(false)

    const handleAdoption = async () => {
        if (cat) {
            await PetsService.adpotCat()

            const newCat = await PetsService.getCat()
            props.setCat(newCat)
        }

        if (dog) {
            await PetsService.adpotDog()

            const newDog = await PetsService.getDog()
            props.setDog(newDog)
        }



    }

    return (
        <Fragment>
            <h3>It's your turn!</h3>
            <PetPreview selected={cat} select={(m) => setCat(m)} {...props.cat} type='cat' expanded={true} />
            <PetPreview selected={dog} select={(m) => setDog(m)} {...props.dog} type='dog' expanded={true} />
            <Link to='/' onClick={() => handleAdoption()}>
                <button>Done</button>
            </Link>
        </Fragment>
    )
}

export default TurnToAdopt
