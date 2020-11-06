import React from 'react'
import PetPreview from './PetPreview';

function LandingPage() {
    return (
        <section>
            <h3>Landing Page</h3>
            <PetPreview animal='cat' />
            <PetPreview animal='dog' />
        </section>
    )
}

export default LandingPage
