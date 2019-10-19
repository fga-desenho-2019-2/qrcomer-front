import axios from 'axios'

const authModule = {
    namespaced: true,
    state: { 
        token: localStorage.getItem('user-token') || '',
        status: '',
    },
    mutations: {
        AUTH_REQUEST: (state) => {
            state.status = 'loading'
        },
        AUTH_SUCCESS: (state, token) => {
            state.status = 'success'
            state.token = token
        },
        AUTH_ERROR: (state) => {
            state.status = 'error'
        },
        AUTH_LOGOUT: (state) => {
            state.status = 'loggedOut'
            state.token = ''
        }
    },
    actions: {
        AUTH_REQUEST: ({commit, dispatch}, user) => {
            return new Promise((resolve, reject) => { 
                commit('AUTH_REQUEST')
                // A rota está hard coded, temos que arrumar isso depois. E usar o http client ao invés do axios aqui
                axios({url: 'http://localhost:8000/api/token/', data: user, method: 'POST' })
                    .then(resp => {
                        const token = resp.data.access
                        localStorage.setItem('user-token', token) // store the token in localstorage
                        axios.defaults.headers.common['Authorization'] = token
                        commit('AUTH_SUCCESS', token)
                        // dispatch(USER_REQUEST)
                        resolve(resp)
                    })
                .catch(err => {
                    commit('AUTH_ERROR', err)
                    localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                    reject(err)
                })
            })
        },
        AUTH_LOGOUT: ({commit, dispatch}) => {
            return new Promise((resolve, reject) => {
                commit('AUTH_LOGOUT')
                localStorage.removeItem('user-token') // clear your user's token from localstorage
                // remove the axios default header
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    getters: {
        isAuthenticated: state => !!state.token,
        authStatus: state => state.status,
    }
}

export default authModule