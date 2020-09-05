export default class HttpFetch {
    get(url) {
        return fetch(url)
            .then(result => result.json())
            .catch(error => console.log(error));
    }

    getOne(url, object) {
        return fetch(url + '/' + object.id)
            .then(result => result.json())
            .catch(error => console.log(error));
    }

    getFilter(url, parameters) {
        return fetch(url + '?' + parameters)
            .then(result => result.json())
            .catch(error => console.log(error));
    }

    create(url, object) {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify({object}),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    }

    delete(url, object) {
        return fetch(url + '/' + object.id, {
            method: DELETE
        })
            .then(response => response.json())
            .catch(error => console.log(error));
    }
}