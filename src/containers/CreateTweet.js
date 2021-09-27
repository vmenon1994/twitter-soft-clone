import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import handleAddTweet from '../actions/tweets'
import CreateTweet from '../components/CreateTweet'


export default function CreateTweetContainer({ replyingTo, classname }) {
    
    const authedUser = useSelector((state) => state.authedUser)
    const dispatch = useDispatch()
    const [text, setText] = useState('')
    let history = useHistory();

    const handleChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(handleAddTweet({
            author: authedUser, 
            text,
            replyingTo,
        }))
        setText('')

        if(replyingTo){
            history.push(`/tweet/${replyingTo}`);
        }
        else {
            history.push('')
        }
        
    } 

    return (
        <React.Fragment>
            <CreateTweet 
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            classname={classname}
            text={text}
            />
        </React.Fragment>
    )
}