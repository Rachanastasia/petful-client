import React, { useState, Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md'
import PeopleService from '../services/person-service'
import AdoptionLine from './AdoptionLine';

function Adopt(props) {
    const [val, setVal] = useState('')
    const [user, setUser] = useState(null)
    const [counter, setCounter] = useState(0)
    const [people, setPeople] = useState([])

    useEffect(() => {
        if (counter === 0) {
            PeopleService.getAllPeople()
                .then(r => {
                    setCounter(r.length)
                    setPeople(r)
                })
        }

    }, [])



    const handlePost = async (e) => {
        e.preventDefault()

        await PeopleService.addPerson(val)

        setPeople([...people, val])
        setUser(val)

    }
    return (
        <section className='adopt_wrapper'>
            {user
                ? <AdoptionLine {...props} people={people} setPeople={(n) => setPeople(n)} user={user} counter={counter} setCounter={(d) => setCounter(d)} />
                : <Fragment>
                    <div className='pet-header'>
                        <Link to='/'>
                            <MdArrowBack className='back' />
                        </Link>

                        <h3>Get in Line to Adopt</h3>
                    </div>

                    <form onSubmit={(e) => handlePost(e)}>
                        <div className='form-row'>
                            <label htmlFor='name'>Your name</label>
                            <input type='text' name='name' className='input-name' value={val} onChange={(e) => setVal(e.target.value)} />
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
                        <button type='submit'>Get in Line</button>

                    </form>

                    <p className='more-info'>For more information about adopting with Petful, please go <Link className='link' to='/'>Here</Link></p>
                </Fragment>
            }
        </section>
    )
}

export default Adopt
