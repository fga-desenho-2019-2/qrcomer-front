let API_URL = ''
if (process.env.NODE_ENV == 'development') {
    API_URL = 'http://localhost:5002'
} else {
    API_URL = 'http://api.marques.rocks'
}

export default API_URL