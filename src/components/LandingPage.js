import React from 'react'
import PetPreview from './PetPreview';

function LandingPage(props) {
    return (
        <section>
            <div className='pet-header'>
                <h3>Our Current Pets</h3>
            </div>
            <PetPreview {...props.cat} type='cat' move={() => props.move('cat')} />
            <PetPreview {...props.dog} type='dog' move={() => props.move('dog')} />

            <button onClick={() => props.move('about')}>Learn more</button>
        </section>
    )
}

export default LandingPage
