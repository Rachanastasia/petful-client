import React, { useState, Fragment, useEffect } from 'react'
import PetsService from '../services/pets-service';
import { Link } from 'react-router-dom';
import PetPreview from './PetPreview';
import PeopleService from '../services/person-service';

function AdoptionLine(props) {

    const [recent, setRecent] = useState([])
    const [catStatus, setCatStatus] = useState({ ready: false, adopted: false })
    const [dogStatus, setDogStatus] = useState({ ready: false, adopted: false })


    const recentJsx = recent.map((p, index) => <p key={index}>{p.pet} was adopted by {p.person}</p>)
    const peopleJsx = props.people.map((p, index) => <p key={index}>{p}</p>)



    useEffect(() => {

        let timer = setTimeout(() => {
            handleAdoption()
        }, 5000)

        return () => clearTimeout(timer)
    }, [recent])


    if (dogStatus.adopted && catStatus.adopted) {

        if (dogStatus.ready) {
            setDogStatus({
                adopted: true,
                ready: false
            })

        }

        if (catStatus.ready) {
            setCatStatus({
                adopted: true,
                ready: false
            })

        }

    }


    const handleAdoption = async () => {
        let lastAdoption = {}

        if (dogStatus.ready || catStatus.ready) {
            let temp = props.people
            let hold = temp.shift()

            props.setPeople([...props.people, hold])

            return null;

        }

        if (props.counter == 0 && !dogStatus.ready && !catStatus.ready) {

            setDogStatus({
                ready: true,
                adopted: false
            })

            setCatStatus({
                ready: true,
                adopted: false
            })

            let temp = props.people
            let hold = temp.shift()
            props.setPeople([...temp, hold])

            return null;
        }

        props.setCounter(props.counter - 1)

        let temp = props.people
        let shifted = temp.shift()

        props.setPeople([...temp, shifted])

        let coinFlip = Math.floor(Math.random() * 2) === 1 ? 'cat' : 'dog'

        if (coinFlip === 'dog') {
            await PetsService.adpotDog()
            let dog = await PetsService.getDog()
            props.setDog(dog)

            lastAdoption = {
                person: shifted,
                pet: props.dog.name
            }
        }

        else if (coinFlip === 'cat') {
            await PetsService.adpotCat()
            let cat = await PetsService.getCat()
            props.setCat(cat)

            lastAdoption = {
                person: shifted,
                pet: props.cat.name
            }
        }

        setRecent([...recent, lastAdoption])


    }

    const handleUserAdoption = async (type) => {
        let lastAdoption = {}

        if (type === 'cat') {
            setCatStatus({
                ready: false,
                adopted: true,
                name: props.cat.name
            })

            lastAdoption = {
                person: props.user,
                pet: props.cat.name
            }

            setRecent([...recent, lastAdoption])

            await PetsService.adpotCat()

            const newCat = await PetsService.getCat()
            props.setCat(newCat)

        }


        else {
            setDogStatus({
                ready: false,
                adopted: true,
                name: props.dog.name
            })

            lastAdoption = {
                person: props.user,
                pet: props.dog.name
            }

            setRecent([...recent, lastAdoption])

            await PetsService.adpotDog()

            const newDog = await PetsService.getDog()
            props.setDog(newDog)
        }
    }

    return (
        <Fragment>

            <Fragment>
                {!catStatus.ready && !dogStatus.ready
                    ? <Fragment> <h3 className='ready_title'>You're in line adopt!</h3>
                        <p>The average wait time is 20 seconds.</p></Fragment>
                    : null}

                {props.dog ?
                    <PetPreview {...props.dog} type='dog'
                        adopt={(n) => handleUserAdoption(n)}
                        expanded={dogStatus.ready && !dogStatus.adopted ? true : false} />
                    : null}
                {dogStatus.adopted ? <div className='review'> <h4>Congratulations, you adopted {dogStatus.name}</h4> </div> : null}
                {props.cat ?
                    <PetPreview {...props.cat} type='cat'
                        adopt={(n) => handleUserAdoption(n)}
                        expanded={catStatus.ready && !catStatus.adopted ? true : false} />
                    : null}
                {catStatus.adopted ? <div className='review'> <h4>Congratulations, you adopted {catStatus.name}</h4> </div> : null}

                <div className='list_wrapper'>
                    <div className='list'>
                        {!catStatus.ready && !dogStatus.ready
                            ? <h4 className='banner_p'>{props.counter} people are ahead of you in line</h4>
                            : <h4>People in line</h4>}
                        {peopleJsx}</div>
                    <div>
                        <div className='list'>
                            <h4>Recent adoptions</h4>
                            {recentJsx}</div>
                    </div>
                </div>
            </Fragment>
            <Link to='/'>
                <button>Done</button>
            </Link>
        </Fragment >
    )
}

export default AdoptionLine
