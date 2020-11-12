import React from 'react'
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md'
import PetDetails from './PetDetails';

function Pet(props) {
    return (
        <section className='pet-wrapper'>
            <div className='pet-header'>
                <Link to='/'>
                    <MdArrowBack className='back' />
                </Link>
                <h3>{props.name}</h3>
            </div>

            <p>{props.description}</p>
            <img src={props.imageURL} alt={`${props.name} the ${props.type} up for adoption`} />
            <PetDetails {...props} />
            <div className='button-wrapper'>
                <Link to='/register'> <button>Get in line</button></Link>
            </div>
        </section>
    )
}

export default Pet


