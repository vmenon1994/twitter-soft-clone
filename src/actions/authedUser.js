export const ADD_AUTHED_USER = 'ADD_AUTHED_USER'

export default function addAuthedUser(authedUser) {
    return {
        type: ADD_AUTHED_USER,
        authedUser
    }
} 

