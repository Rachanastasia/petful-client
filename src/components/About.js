import React from 'react'
import { MdArrowBack } from 'react-icons/md'

function About(props) {
    return (
        <section>
            <div className='pet-header'>
                <MdArrowBack
                    className='back'
                    onClick={() => props.move('main')} />

                <h3>About Petful</h3>
            </div>
            <button onClick={() => props.move('adopt')}>Adopt</button>
        </section>
    )
}

export default About
