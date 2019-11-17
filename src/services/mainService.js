let API_URL = ''
if (process.env.NODE_ENV == 'development') {
    API_URL = 'http://localhost:5002'
} else {
    API_URL = 'production_api'
}

export default API_URL