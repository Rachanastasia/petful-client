import React from 'react'

function ReadyToAdopt() {
    const num = 5
    return (
        <div className='ready_wrapper'>
            <h3>You're waiting to adopt!</h3>
            <p className='banner_p'>Place in line : <span className='blue'>{num}</span></p>
        </div>
    )
}

export default ReadyToAdopt
