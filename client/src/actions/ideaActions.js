import {
 IDEAS_FETCHING, 
 IDEAS_FETCHED,
 IDEA_ADDING,
 IDEA_ADDED,
 IDEA_DELETING,
 IDEA_DELETED
} from '../actions/types'
import axios from 'axios';
export const fetchIdeas = () => dispatch => {
  dispatch({
    type: IDEAS_FETCHING
  })
  axios.get('/api/ideas')
    .then(res => {
      dispatch({
        type: IDEAS_FETCHED,
        payload: res.data.ideas
      })
    })
}
export const addIdea = (title, description, author) => dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
  }
  dispatch({
    type: IDEA_ADDING
  })
  axios.post('/api/ideas', {
    title,
    description,
    author
  }, config)
    .then(res => {
      dispatch({
        type: IDEA_ADDED,
        payload: res.data.idea
      })
    })
}
export const deleteIdea = id =>  dispatch => {
  dispatch({
    type: IDEA_DELETING
  })
  axios.delete(`/api/ideas/${id}`)
    .then(res => {
      dispatch({
        type:IDEA_DELETED,
        payload: res.data
      })
    })
}