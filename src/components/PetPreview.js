import React, { Fragment, useState } from 'react'
import PetDetails from './PetDetails'

function PetPreview(props) {

    const [expanded, setExpanded] = useState(null)

    return (
        <div
            className={props.selected === true ? 'selected pet-preview' : 'pet-preview'}
        >
            <h4 className='meet'>Meet {props.name}</h4>
            {expanded || props.expanded ? <p>{props.description}</p> : null}
            <img src={props.imageURL} />
            {
                props.expanded && !props.selected
                    ? <div>
                        <PetDetails {...props} />
                        <button className='adopt_button' onClick={() => props.select(!props.selected)}>Adopt me!</button>
                    </div>
                    : props.expanded && props.selected
                        ? <div className='review'> <h4>Congratulations, you adopted {props.name}</h4> <button className='adopt_button unadopt' onClick={() => props.select(!props.selected)}>Unadopt</button></div>
                        : null
            }
            {
                expanded
                    ? <Fragment>
                        <PetDetails{...props} />
                        <button onClick={() => setExpanded(false)}>Less</button>
                    </Fragment>
                    : props.expanded
                        ? null
                        : <button onClick={() => setExpanded(true)}>More</button>

            }

        </div >
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