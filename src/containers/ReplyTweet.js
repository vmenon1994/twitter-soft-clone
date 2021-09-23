import React from 'react' 
import { useParams } from 'react-router-dom'
import Tweets from '../components/Tweets'
import CreateTweet from './CreateTweet'
import { getSortedTweetDetails } from '../utils/helpers'
import { useSelector } from 'react-redux'
import useTweets from '../hooks/useTweets'



export default function ReplyTweetContainer() {

    const { id } = useParams()
    const tweets = useSelector((state) => state.tweets)
    const users = useSelector((state) => state.users )
    const authedUser = useSelector((state) => state.authedUser)
    console.log('all the data', id, tweets, users, authedUser)

    
    const mainTweetDetails = getSortedTweetDetails([id] , tweets, users) 
    const replyTweetDetails = getSortedTweetDetails(tweets[id].replies, tweets, users)
   
    const [toggleLike, isHasLiked, goToReplyTweet] = useTweets(authedUser)

    return(
        <div>
        {
            mainTweetDetails && 
            <Tweets 
            tweetDetails={mainTweetDetails}
            toggleLike={toggleLike}
            isHasLiked={isHasLiked}
            goToReplyTweet={goToReplyTweet}
             />
        }
        
            <CreateTweet 
             replyingTo={id}
             classname='create-tweet'
             />
        {   replyTweetDetails && 
            <Tweets 
            tweetDetails={replyTweetDetails}
            toggleLike={toggleLike}
            isHasLiked={isHasLiked}
            goToReplyTweet={goToReplyTweet}
            classname='tweet-replies'
            />
        }
            
        </div>
    )

}