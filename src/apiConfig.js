let apiUrl
const apiUrls = {
  production: 'https://malcar91.github.io/LiveNotes-Client/',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
// https://malcar91.github.io/LiveNotes-Client/
// https://whispering-ravine-93747.herokuapp.com/
