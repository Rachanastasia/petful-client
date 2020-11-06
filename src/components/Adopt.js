import React, { useState } from 'react'

import PeopleService from '../services/person-service';
import { MdArrowBack } from 'react-icons/md'


function Adopt(props) {
    const [name, setName] = useState('')

    const handleForm = (e) => {
        e.preventDefault();
        if (!name.trim()) {
            return null;
        }

        PeopleService.addPerson(name)
            .then(() => props.move('main'))
            .catch(err => console.log(err))
    }


    return (
        <section>

            <div className='pet-header'>
                <MdArrowBack
                    className='back'
                    onClick={() => props.move('main')} />

                <h3>Adopt</h3>
            </div>

            <form onSubmit={(e) => handleForm(e)}>
                <div className='form-row'>
                    <label htmlFor='name'>Your name</label>
                    <input type='text' name='name' className='input-name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <label>I'm interested in adopting a :</label>
                <div className='form-row'>
                    <label htmlFor='dog'>Dog</label>
                    <input type='radio' name='dog' />
                </div>
                <div className='form-row'>
                    <label htmlFor='cat'>Cat</label>
                    <input type='radio' name='cat' />
                </div>
                <button type='submit'>Adopt</button>
            </form>

            <p className='more-info'>For more information about adopting with Petful, please go <span className='link' onClick={() => props.move('about')}>Here</span></p>
        </section>
    )
}

export default Adopt
