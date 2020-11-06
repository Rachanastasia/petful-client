import React from 'react'
import { MdArrowBack } from 'react-icons/md'

function Pet(props) {

    return (
        <div className='pet-wrapper'>
            <div className='pet-header'>
                <MdArrowBack
                    className='back'
                    onClick={() => props.move('main')} />
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
                <button onClick={() => props.move('about')}>Learn more</button>
                <button onClick={() => props.move('adopt')}>Register</button>
            </div>
        </div>
    )
}

export default Pet
