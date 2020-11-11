import React from 'react'
import { Link } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md'

function Pet(props) {




    return (
        <section className='pet-wrapper'>
            <div className='pet-header'>
                <Link to='/'><MdArrowBack
                    className='back' /></Link>
                <h3>{props.name}</h3>
            </div>

            <p>{props.description}</p>
            <img src={props.imageURL} alt={`${props.name} the ${props.type} up for adoption`} />
            <div className='desc-wrapper'>
                <div className='desc'>
                    <p className='desc-spec'>{props.name}'s Story : </p>
                    <p>{props.story}</p>
                </div>
                <div className='desc'>
                    <p className='desc-spec'>Breed : </p>
                    <p>{props.breed}</p>
                </div>
                <div className='desc'>
                    <p className='desc-spec'>Gender : </p>
                    <p>{props.gender}</p>
                </div>

            </div>
            <div className='button-wrapper'>
                <Link to='/register'> <button>Get in line</button></Link>
            </div>
        </section>
    )
}

export default Pet


