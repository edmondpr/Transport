import axios from 'axios'

export function getCreditApi(callback, token) {
	axios({
			method: 'GET',
			url: 'http://localhost:8001/credit',
			crossDomain: true,
			headers: {
				authorization: token
			}
	}).then(function(response) {
		console.log(response.data);
		callback(response.data);
	}).catch(function (error) {
			console.log(error);
	});
}