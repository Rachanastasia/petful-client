import React, { useState, useEffect, Fragment } from 'react'
import useGetPlace from '../hooks/useGetPlace'
import { MdExpandLess, MdExpandMore } from 'react-icons/md'

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
            <h3 className='ready_title'>You're in line adopt!</h3>
            <p className='banner_p'>There are {useGetPlace(queue, props.name)} people ahead of you.</p>
            <div>
                <p className='banner_p'>There are {queue.length} people waiting to adopt with Petful</p>
                {!toggleQueue
                    ? <p className='blue pointer center' onClick={() => setToggleQueue(true)}><MdExpandMore className='arrow' aria-label='show more' /></p>
                    : <Fragment>
                        {queue.map((p, index) => <p key={index}>{p}</p>)}
                        <p className='blue pointer center' onClick={() => setToggleQueue(false)}><MdExpandLess className='arrow' aria-label='show less' /></p>
                    </Fragment>
                }
            </div>
            <div>
                <p className='banner_p'>This is the most recent adoption </p>
                {!toggleAdoptions
                    ? <p className='blue pointer center' onClick={() => setToggleAdoptions(true)}><MdExpandMore className='arrow' aria-label='show more' /></p>
                    : <Fragment>
                        {queue.map((p, index) => <p key={index}>{p}</p>)}
                        <p className='blue pointer center' onClick={() => setToggleAdoptions(false)}><MdExpandLess className='arrow' aria-label='show less' /></p>
                    </Fragment>
                }
            </div>
        </div>
    )
}

export default ReadyToAdopt
