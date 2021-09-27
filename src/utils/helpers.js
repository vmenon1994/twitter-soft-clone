export default function getDateAndTime(epochtime) {
    const date = new Date(epochtime)
    return `${date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })} | ${date.toLocaleDateString()}`
}



export function getTweetKeys(tweets){
    console.log('bobo',tweets)
    console.log('iden', Object.keys(tweets))
    return  Object.keys(tweets)
}

export function  getSortedTweetDetails(tweetKeys, tweets, users){
        console.log(tweetKeys)
        const tweetDetails = tweetKeys.map((iden) => {
        console.log('iden', iden)
        const { text, timestamp, likes, replies, author, id: tweetId, replyingTo} =  tweets[iden]
        const { name, avatarURL } = users[author] 
                                        
        if (replyingTo) {
            const { author: mainTweetAuthor } = tweets[replyingTo]
            return {
                tweetId,
                text,
                timestamp,
                likes,
                likesCount: likes.length,
                repliesCount: replies.length,
                author,
                name,
                avatarURL,
                mainTweetAuthor,
            }
        }
        else if (!replyingTo) {
            return {
                tweetId,
                text,
                timestamp,
                likes,
                likesCount: likes.length,
                repliesCount: replies.length,
                author,
                name,
                avatarURL,
            }
        }
        }
        
            
        )  
    .sort((a,b) => b.timestamp - a.timestamp)
    return tweetDetails
}