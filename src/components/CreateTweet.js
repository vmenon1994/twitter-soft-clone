import React from 'react'


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