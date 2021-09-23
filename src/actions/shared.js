import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveTweets } from "./tweets";
import addAuthedUser from "./authedUser"
import {showLoading, hideLoading} from 'react-redux-loading'


export default function handleInitialData() {

    const AUTHED_USER = 'tylermcginnis'
    return (dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({users, tweets}) => {
                dispatch(hideLoading())
                dispatch(receiveTweets(tweets))
                dispatch(receiveUsers(users))
                dispatch((addAuthedUser(AUTHED_USER)))
            })
        }
}

