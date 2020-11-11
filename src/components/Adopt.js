import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md'
import { PetContext } from '../contexts/PetContext'
import PeopleService from '../services/person-service'

function Adopt() {
    const ctx = useContext(PetContext)
    const [name, setName] = useState('');

    useEffect(() => {
        if (!ctx.people) {
            ctx.getPeople()
        }

    }, [])

    const handlePost = () => {
        ctx.setUser(name)
        return PeopleService.addPerson(name).catch(err => console.log(err.message, err))
    }

    return (
        <section className='adopt_wrapper'>

            <div className='pet-header'>
                <Link to='/'>
                    <MdArrowBack className='back' />
                </Link>

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
                    <button type='button' onClick={handlePost}>Get in Line</button>
                </Link>
            </form>

            <p className='more-info'>For more information about adopting with Petful, please go <Link className='link' to='/'>Here</Link></p>
        </section>
    )
}

export default Adopt
