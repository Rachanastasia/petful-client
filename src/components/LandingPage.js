import React from 'react'
import PetPreview from './PetPreview';
import { Link } from 'react-router-dom'

function LandingPage(props) {
    return (
        <section className='landing_wrapper'>
            <div>
                <div className='pet-header'>
                    <h3>Our Current Pets</h3>
                </div>

                <PetPreview {...props.cat} type='cat' />
                <PetPreview {...props.dog} type='dog' />
            </div>
            <div>
                <div className='pet-header'>

                    <h3>About Petful</h3>
                </div>
                <article>
                    <h4>What is Petful</h4>
                    <p>Petful is a shelter that only has room for one dog and one cat at a time. We keep a queue of potential families for our pets. When a family is next in the queue, they may adopt either of the pets.</p>

                    <h4>How do I adopt with Petful</h4>
                    <p>To adopt, click the button below and add your name to the queue. When it is your turn to adopt, you will be shown the pets available for adoption.</p>

                    <h4>But what if I want to adopt a specific dog?</h4>
                    <p>Unfortunately, Petful cannot accomidate any special requests in adoption.</p>
                    <Link to='/register'><button>Get in line</button></Link>
                </article>
            </div>
        </section>
    )
}

export default LandingPage

