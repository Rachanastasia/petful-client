import React from 'react'
import PetDetails from './PetDetails'

function PetPreview(props) {

    return (
        <div
            className='pet-preview'
        >
            <h4 className='meet'>Meet {props.name}</h4>
            <img src={props.imageURL} />
            {
                props.expanded
                    ? <div>
                        <PetDetails {...props} />
                        <button className='adopt_button'>Adopt me!</button>
                    </div>
                    : null}
        </div>
    )
}

export default PetPreview

PetPreview.defaultProps = {
    imageURL: 'https://images.pexels.com/photos/160846/french-bulldog-summer-smile-joy-160846.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    description: 'Black pug.',
    name: 'Bilbo',
    gender: 'Male',
    age: 3,
    breed: 'Pug',
    story: 'Owner Passed away'
}