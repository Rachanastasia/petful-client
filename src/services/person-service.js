import config from '../config';

const PeopleService = {

    getAllPeople() {
        return fetch(`${config.REACT_APP_API_BASE}/api/people`)
            .then(res => {
                let r = res.json()
                return r;
            })
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
            .catch(err => console.log(err, err.message))
    },

    removePerson() {
        return fetch(`${config.REACT_APP_API_BASE}/api/people`, {
            method: 'DELETE'
        })
            .catch(err => console.log(err, err.message))

    }
}

export default PeopleService;