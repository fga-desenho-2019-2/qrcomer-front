import axios from 'axios'
import API_URL from '../services/mainService'

const authModule = {
    namespaced: true,
    state: { 
        token: localStorage.getItem('user-token') || '',
        email: localStorage.getItem('user-email') || '',
        cpf: localStorage.getItem('user-cpf') || '',
        status: '',
    },
    mutations: {
        AUTH_REQUEST: (state) => {
            state.status = 'loading'
        },
        AUTH_SUCCESS: (state, data) => {
            state.status = 'success'
            state.token = data.token
            state.email = data.email
            state.cpf = data.cpf
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
        AUTH_REQUEST: ({commit}, user) => { // add dispatch variable in parameters
            return new Promise((resolve, reject) => { 
                commit('AUTH_REQUEST')
                // A rota está hard coded, temos que arrumar isso depois. E usar o http client ao invés do axios aqui
                axios({url: API_URL + '/api/token/', data: user, method: 'POST' })
                    .then(resp => {
                        const data = {
                            token: resp.data.access,
                            email: resp.data.user_data.email,
                            cpf: resp.data.user_data.cpf
                        }
                        localStorage.setItem('user-token', data.token) // store the token in localstorage
                        localStorage.setItem('user-email', data.email) // store the user_email in localstorage
                        localStorage.setItem('user-cpf', data.cpf) // store the user_cpf in localstorage
                        axios.defaults.headers.common['Authorization'] = data.token
                        commit('AUTH_SUCCESS', data)
                        resolve(resp)
                    })
                .catch(err => {
                    commit('AUTH_ERROR', err)
                    localStorage.removeItem('user-token') // if the request fails, remove any possible user token if possible
                    localStorage.removeItem('user-email')
                    localStorage.removeItem('user-cpf')
                    reject(err)
                })
            })
        },
        AUTH_LOGOUT: ({commit}) => { // add dispatch variable in parameters
            return new Promise((resolve) => { // add reject variable in parameters
                commit('AUTH_LOGOUT')
                localStorage.removeItem('user-token') // clear your user's token from localstorage
                localStorage.removeItem('user-email') // clear your user's cpf from localstorage
                localStorage.removeItem('user-cpf') // clear your user's email from localstorage
                // remove the axios default header
                delete axios.defaults.headers.common['Authorization']
                resolve()
            })
        }
    },
    getters: {
        isAuthenticated: state => !!state.token,
        authStatus: state => state.status,
        userEmail: state => state.email,
        userCpf: state => state.cpf
    }
}

export default authModule