import React from 'react'
import { RiReplyLine } from "react-icons/ri";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import getDateAndTime from '../utils/helpers';



    
export default function Tweets({tweetDetails, goToReplyTweet, toggleLike, isHasLiked, classname = null }) {
        return ( 
            <React.Fragment>
            {
                tweetDetails && (
                    <div className={classname}> 
                    <ul 
                     className='tweet-container'
                    >
                    {tweetDetails.map((tweet) => (
                     <li key={tweet.tweetId} 
                         className='tweet-contents'
                         onClick={(event) => goToReplyTweet(tweet.tweetId,event)}
                         >
                        <div 
                          onClick={(event) => goToReplyTweet(tweet.tweetId, event)}
                         >
                            <picture className='user-avatar-container'> 
                                <img 
                                src={tweet.avatarURL }
                                alt='user-avatar'
                                className='user-avatar'
                                />
                            </picture>
                            <div>
                                <h2 className='user-name'>{tweet.name}</h2>
                                <h4 className='tweet-metadata'>{getDateAndTime(tweet.timestamp)}</h4>
                                
                                {
                                    tweet.mainTweetAuthor && 
                                    <h4 className='tweet-metadata'>{`Replying to @${tweet.mainTweetAuthor}`}</h4>
                                }
                                <p className='tweet-text'>
                                    {tweet.text}
                                </p>
                                <div className='tweet-actions'>
                                    <RiReplyLine 
                                    className='tweet-reply'
                                    onClick={(event) => goToReplyTweet(tweet.tweetId,event)}
                                    />
                                    <p className='count'>{tweet.repliesCount}</p>
                                    {isHasLiked(tweet.likes)
                                        ? <AiFillHeart 
                                            style={{color:'#ec2fc2',
                                                    fontSize:'25px'
                                                    }}
                                            onClick={(event) => toggleLike(tweet.tweetId, tweet.likes, event)}
                                            /> 
                                        : <AiOutlineHeart 
                                            className='tweet-like' 
                                            onClick={(event) => toggleLike(tweet.tweetId, tweet.likes, event)}
                                        />
                                        
                                    }   
                                    <p className='count'>{tweet.likesCount}</p>
                                </div>
                            </div>
                        </div>
                     </li>
                 ))}        
                 </ul>
                
            </div>
                )
            }       
            </React.Fragment>
    )
}