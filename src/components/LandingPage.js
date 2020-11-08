import React, { Fragment } from 'react'
import PetPreview from './PetPreview';


function LandingPage(props) {
    return (
        <div className='landing_wrapper'>
            <section>
                <div className='pet-header'>
                    <h3>Our Current Pets</h3>
                </div>
                <PetPreview {...props.cat} type='cat' move={() => props.move('cat')} />
                <PetPreview {...props.dog} type='dog' move={() => props.move('dog')} />

                {/* <button onClick={() => props.move('about')}>Learn more</button> */}
            </section>
            <section>
                <div className='pet-header'>

                    <h3>About Petful</h3>
                </div>
                <article>
                    <h4>What is Petful</h4>
                    <p>Petful is a shelter that only has room for one dog and one cat at a time. We keep a queue of potential families for our pets. When a family is next in the queue, they can adopt (or pass) either of the pets.</p>

                    <h4>How do I adopt with Petful</h4>
                    <p>To adopt, click the button below and add your name to the queue. When it is your turn to adopt, you can adopt the currently available cat and/or dog.</p>

                    <h4>But what if I want to adopt a specific dog?</h4>
                    <p>Unfortunately, Petful cannot accomidate any special requests in adoption.</p>
                    <button onClick={() => props.move('adopt')}>Register</button>
                </article>
            </section>
        </div>
    )
}

export default LandingPage
