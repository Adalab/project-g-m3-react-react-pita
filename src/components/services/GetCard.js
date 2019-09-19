const endpoint = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/'; 

const petition = (json) => {
	return fetch (endpoint, {
		method: 'POST', 
		body : json, 
		headers: {
			'content-type' : 'application/json'
		}
	})
	.then(response => response.json())
}

export {petition}; 