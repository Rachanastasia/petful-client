import React from 'react'
import PetPreview from './PetPreview';

function LandingPage(props) {
    return (
        <section>
            <h3>Current pets</h3>
            <PetPreview {...props.cat} type='cat' move={() => props.move('cat')} />
            <PetPreview {...props.dog} type='dog' move={() => props.move('dog')} />
        </section>
    )
}

export default LandingPage
