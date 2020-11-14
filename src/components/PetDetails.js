import React from 'react'

function PetDetails(props) {
    return (
        <div className='desc_wrapper'>
            <div className='desc'>
                <p className='desc-spec'>{props.name}'s Story : </p>
                <p className='desc-val'>{props.story}</p>
            </div>
            <div className='desc'>
                <p className='desc-spec'>Breed : </p>
                <p className='desc-val'>{props.breed}</p>
            </div>
            <div className='desc'>
                <p className='desc-spec'>Gender : </p>
                <p className='desc-val'>{props.gender}</p>
            </div>
        </div>
    )
}

export default PetDetails
