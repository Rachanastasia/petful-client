import React, { Fragment, useEffect } from 'react'
import PetPreview from './PetPreview'
import { Link } from 'react-router-dom'


function Congratulations(props) {



    return (
        <section>
            <h3>Congratulations!</h3>

                ? <Fragment>
                <h4>Your new cat:</h4>
                <PetPreview {...props.cat} />

                <h4>Your new dog:</h4>
                <PetPreview {...props.dog} />

                <Link to='/'><button>Done</button></Link>
            </Fragment>


        </section>
    )
}

export default Congratulations
