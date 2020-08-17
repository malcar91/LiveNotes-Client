let apiUrl
const apiUrls = {
  production: 'https://whispering-ravine-93747.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
// https://malcar91.github.io/LiveNotes-Client/
//
