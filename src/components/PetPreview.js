import React from 'react'

function PetPreview(props) {

    return (
        <div
            className='pet-preview'
            onClick={() => props.move(props.type)}>
            <h4>Meet {props.name}</h4>
            <img src={props.imageURL} />
        </div>
    )
}

export default PetPreview
