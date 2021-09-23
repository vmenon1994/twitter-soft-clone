import { ADD_TWEET, RECEIVE_TWEETS, TOGGLE_LIKE, ADD_REPLY } from "../actions/tweets";

export default function tweets(state ={}, action) {
    switch(action.type) {
        case ADD_TWEET:
            return {
                ...state,
                [action.tweet.id]: action.tweet
            }
        case RECEIVE_TWEETS:
            return {
                ...state,
                ...action.tweets
            } 

        case TOGGLE_LIKE:
            return {
                ...state,
                [action.id]:{
                    ...state[action.id],
                    likes: action.hasLiked 
                           ? state[action.id].likes.filter((id) => id !== action.authedUser)
                           : state[action.id].likes.concat([action.authedUser])
                }
            }
        case ADD_REPLY:
            return {
                ...state,
                [action.replyingTo]: {
                    ...state[action.replyingTo],
                    replies: state[action.replyingTo].replies.concat([action.id])
                }

            }
            
        default:
            return {
                ...state
            }
        
    }
}