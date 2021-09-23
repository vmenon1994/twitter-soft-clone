import React, {useEffect, Suspense} from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import TweetsContainer from '../containers/Tweets'
// import CreateTweetContainer from '../containers/CreateTweet'
// import ReplyTweetContainer from '../containers/ReplyTweet'
import handleInitialData from '../actions/shared'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav'


const TweetsContainer = React.lazy(() => import('../containers/Tweets'));
const CreateTweetContainer = React.lazy(() => import('../containers/CreateTweet'));
const ReplyTweetContainer = React.lazy(() => import('../containers/ReplyTweet'));


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
        <Suspense fallback={<div>Loading...</div>}>
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
         </Switch>
        </Suspense> 
         )
        } 
    </div>
  )
}