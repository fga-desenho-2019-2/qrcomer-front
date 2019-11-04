import {
    handleAmmount
} from './Commands/handleAmmount'
import {
    handleQtd
} from './Commands/handleQtd'
import {
    login
} from './Commands/login'
import {
    loginUser
} from './Commands/loginUser'
import {
    registerUser
} from './Commands/registerUser'
import {
    routeTo
} from './Commands/routeTo'

export default {
    handleAmmount,
    handleQtd,
    login,
    loginUser,
    registerUser,
    routeTo
}

export * from './Commands/handleAmmount'
export * from './Commands/handleQtd'
export * from './Commands/login'
export * from './Commands/loginUser'
export * from './Commands/registerUser'
export * from './Commands/routeTo'