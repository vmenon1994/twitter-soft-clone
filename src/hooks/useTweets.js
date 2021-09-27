import React from 'react'
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router'
import { handletoggleLike } from '../actions/tweets'

export default function useTweets(authedUser){
    const dispatch = useDispatch()
    let history = useHistory()

    const toggleLike = (id, likes, e) => {
        e.stopPropagation()
        const hasLiked = isHasLiked(likes)
        const info = {
            id,
            hasLiked,
            authedUser
        }
        dispatch(handletoggleLike(info))

    }

    const isHasLiked = (likes) => {
        return likes.includes(authedUser) 
                    ? true 
                    : false
    }

    const goToReplyTweet = (id, e) => {
        e.preventDefault()
        history.push(`/tweet/${id}`)
    }

    return [
        toggleLike,
        isHasLiked,
        goToReplyTweet
    ]

}