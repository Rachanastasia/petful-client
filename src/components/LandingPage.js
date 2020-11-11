import React, { useContext, useEffect } from 'react'
import PetPreview from './PetPreview';
import { Link } from 'react-router-dom'

import { PetContext } from '../contexts/PetContext'

function LandingPage(props) {
    const ctx = useContext(PetContext)

    useEffect(() => {
        if (!ctx.cat) {
            ctx.getCat()
        }
        if (!ctx.dog) {
            ctx.getDog()
        }
        if (!ctx.people) {
            ctx.getPeople()
        }

    }, [])

    return (
        <div className='landing_wrapper'>
            <section>
                <div className='pet-header'>
                    <h3>Our Current Pets</h3>
                </div>
                <Link to='/cat'><PetPreview {...ctx.cat} type='cat' /></Link>
                <Link to='/dog'><PetPreview {...ctx.dog} type='dog' /></Link>
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
                    <Link to='/register'><button>Get in line</button></Link>
                </article>
            </section>
        </div>
    )
}

export default LandingPage

