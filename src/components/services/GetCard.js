const endpoint = 'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/'; 


const petition = (data) => {
	return fetch (endpoint, {
		method: 'POST', 
		body : JSON.stringify (data), 
		headers: {
			'content-type': 'application/json'
		}
	})
	.then(response => response.json())
}


export {petition}; 