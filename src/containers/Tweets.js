import React from 'react'
import { useSelector } from 'react-redux';
import { getTweetKeys, getSortedTweetDetails } from '../utils/helpers'
import Tweets from '../components/Tweets';
import useTweets from '../hooks/useTweets'



    
export default function TweetsContainer({classname}) {

    const users = useSelector((state) => state.users)
    const tweets = useSelector((state) => state.tweets)
    const authedUser = useSelector((state) => state.authedUser)
    const tweetKeys = getTweetKeys(tweets)
    const tweetDetails = getSortedTweetDetails(tweetKeys, tweets, users)
                    
    const [toggleLike, isHasLiked, goToReplyTweet] = useTweets(authedUser)

        return(        
             <div> 
             {
               <Tweets 
                 goToReplyTweet={goToReplyTweet}
                 tweetDetails={tweetDetails}
                 toggleLike={toggleLike}
                 isHasLiked={isHasLiked}
                 classname={classname}
                />
             }
            </div>
    )
}