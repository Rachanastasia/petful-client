import config from '../config';

const PeopleService = {

    getAllPeople() {
        return fetch(`${config.REACT_APP_API_BASE}/api/people`)
            .then(res => res.json())
            .catch(err => console.log(err, err.message))
    },

    addPerson(name) {
        return fetch(`${config.REACT_APP_API_BASE}/api/people`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ person: name })
        })
            .then(res => res.json())
            .catch(err => console.log(err, err.message))
    },



}

export default PeopleService;