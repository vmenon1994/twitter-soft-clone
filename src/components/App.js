import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TweetsContainer from '../containers/Tweets'
import CreateTweetContainer from '../containers/CreateTweet'
import ReplyTweetContainer from '../containers/ReplyTweet'
import handleInitialData from '../actions/shared'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav'



export default function App () {

  const dispatch = useDispatch()
  const authedUser = useSelector((state) => state.authedUser)
  const loading = authedUser ? true : false 
  
  useEffect(() => {
    dispatch(handleInitialData())    
    }, [dispatch])

  return (
    <div className='container'>
      <Nav />
        { 
          loading && (
          <Switch>
            <Route exact path="/">
              <TweetsContainer />
            </Route>
            <Route exact path="/new">
              <CreateTweetContainer />
            </Route>
            <Route exact path="/tweet/:id">
              <ReplyTweetContainer />
            </Route>
            <Route path="*">
              <h1>Error 404</h1>
            </Route>
         </Switch>)
        } 
    </div>
  )
}