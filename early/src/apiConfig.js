let apiUrl;
const apiUrls = {
	production: 'https://cryptic-tor-81236.herokuapp.com',
	development: 'http://localhost:3000'
};

if (window.location.hostname === 'localhost') {
	apiUrl = apiUrls.development;
} else {
	apiUrl = apiUrls.production;
}

export default apiUrl;