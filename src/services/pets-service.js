import config from '../config';

const PetsService = {

    getAllPets() {
        return fetch(`${config.REACT_APP_API_BASE}/api/pets`)
            .then(res => res.json())
            .catch(err => console.log(err, err.message))
    },

    getCat() {
        return fetch(`${config.REACT_APP_API_BASE}/api/cats`)
            .then(res => res.json())
            .catch(err => console.log(err, err.message))

    },

    getDog() {
        return fetch(`${config.REACT_APP_API_BASE}/api/dogs`)
            .then(res => res.json())
            .catch(err => console.log(err, err.message))
    },

    adpotCat() {
        return fetch(`${config.REACT_APP_API_BASE}/api/cats`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
            .catch(err => console.log(err, err.message))
    },

    adpotDog() {
        return fetch(`${config.REACT_APP_API_BASE}/api/dogs`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .catch(err => console.log(err, err.message))
    }
}

export default PetsService;