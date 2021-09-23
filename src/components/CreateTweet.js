import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import handleAddTweet from '../actions/tweets'

export default function CreateTweet({ handleSubmit,  handleChange, classname, text}) {
    
    return (
        <div className={classname}>
            <form onSubmit={handleSubmit}>
                <textarea 
                 placeholder="What's Happening"
                 value={text}
                 onChange={handleChange}
                 />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}