import {showLoading, hideLoading} from 'react-redux-loading'
import { saveTweet, saveLikeToggle } from '../utils/api' 
 
export const ADD_TWEET = 'ADD_TWEET'
export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const TOGGLE_LIKE = 'TOGGLE_LIKE'
export const ADD_REPLY = 'ADD_REPLY'

function addTweet(tweet) {
    return {
        type: ADD_TWEET,
        tweet
    }
}

export function receiveTweets(tweets) {
    return {
        type: RECEIVE_TWEETS,
        tweets
    }
}

export function toggleLike({id , hasLiked, authedUser}) {
    return {
        type: TOGGLE_LIKE,
        id , 
        hasLiked, 
        authedUser
    }
}

export function addReply({replyingTo, id}){
    return {
        type: ADD_REPLY,
        replyingTo,
        id
    }
}


export default function handleAddTweet(tweet) {
    return (dispatch) => {
        dispatch(showLoading())
        return saveTweet(tweet)
            .then((tweet) => {
                 dispatch(hideLoading())
                 dispatch(addTweet(tweet)) 
                 if(tweet.replyingTo) {
                     const { id, replyingTo} = tweet
                     dispatch(addReply({
                         id,
                         replyingTo
                     }))
                 }
            })
    }
}

export function handletoggleLike(info) {
    return (dispatch) => {
        dispatch(toggleLike(info))
        return saveLikeToggle(info)
    }}     
