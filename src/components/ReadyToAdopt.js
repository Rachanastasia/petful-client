import React, { useState, useEffect, Fragment } from 'react'
import useGetPlace from '../hooks/useGetPlace'

function ReadyToAdopt(props) {
    const [queue, setQueue] = useState([])
    const [toggleQueue, setToggleQueue] = useState(false)
    const [toggleAdoptions, setToggleAdoptions] = useState(false)
    const [recentAdoptions, setRecentAdoptions] = useState([])

    useEffect(() => {
        if (props.people !== queue) {
            setQueue(props.people)
        }

    }, [])




    return (
        <div className='ready_wrapper'>
            <h3>You're waiting to adopt!</h3>
            <p className='banner_p'>Place in line : <span className='blue'>{useGetPlace(queue, props.name)}</span></p>
            <div>
                <p className='banner_p'>There are currently {queue.length} people in line</p>
                {!toggleQueue
                    ? <span className='blue pointer' onClick={() => setToggleQueue(true)}>See all</span>
                    : <Fragment>
                        {queue.map((p, index) => <p key={index}>{p}</p>)}
                        <span className='blue pointer' onClick={() => setToggleQueue(false)}>Hide all</span>
                    </Fragment>
                }
            </div>
            <div>
                <p className='banner_p'>This is the most recent adoption </p>
                {!toggleAdoptions
                    ? <span className='blue pointer' onClick={() => setToggleAdoptions(true)}>View all</span>
                    : <Fragment>
                        {queue.map((p, index) => <p key={index}>{p}</p>)}
                        <span className='blue pointer' onClick={() => setToggleAdoptions(false)}>Hide all</span>
                    </Fragment>
                }
            </div>
        </div>
    )
}

export default ReadyToAdopt
