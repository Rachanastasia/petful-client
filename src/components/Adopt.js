import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import PeopleService from '../services/person-service';
import { MdArrowBack } from 'react-icons/md'


function Adopt(props) {
    const [name, setName] = useState('');

    return (
        <section className='adopt_wrapper'>

            <div className='pet-header'>
                <Link to='/'><MdArrowBack className='back' /></Link>

                <h3>Get in Line to Adopt</h3>
            </div>

            <form>
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
                <Link to='/adopt'>
                    <button type='button' onClick={() => (PeopleService.addPerson(name).then(props.user(name)))}>Get in Line</button>
                </Link>
            </form>

            <p className='more-info'>For more information about adopting with Petful, please go <Link className='link' to='/'>Here</Link></p>
        </section>
    )
}

export default Adopt
