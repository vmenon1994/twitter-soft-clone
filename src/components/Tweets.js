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
                         
                         onClick={(e) => goToReplyTweet(tweet.tweetId,e)}
                         >
                        <div 
                          onClick={(e) => goToReplyTweet(tweet.tweetId, e)}
                          className='tweet-contents'
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
                                    onClick={(e) => goToReplyTweet(tweet.tweetId,e)}
                                    />
                                    <p className='count'>{tweet.repliesCount}</p>
                                    {isHasLiked(tweet.likes)
                                        ? <AiFillHeart 
                                            style={{color:'#ec2fc2',
                                                    fontSize:'25px'
                                                    }}  
                                            onClick={(e) => toggleLike(tweet.tweetId, tweet.likes, e)}
                                            /> 
                                        : <AiOutlineHeart 
                                            className='tweet-like' 
                                            onClick={(e) => toggleLike(tweet.tweetId, tweet.likes, e)}
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