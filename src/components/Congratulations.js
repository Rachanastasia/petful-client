import React, { Fragment } from 'react'
import PetPreview from './PetPreview'
function Congratulations(props) {
    console.log(props.cat)
    console.log(props.dog)
    return (
        <section>
            <h3>Congratulations!</h3>

                ? <Fragment>
                <h4>Your new cat:</h4>
                <PetPreview {...props.cat} />

                <h4>Your new dog:</h4>
                <PetPreview {...props.dog} />
            </Fragment>


        </section>
    )
}

export default Congratulations
