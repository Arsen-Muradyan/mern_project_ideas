import {
  IDEAS_FETCHED,
  IDEA_ADDED,
  IDEA_DELETED
} from '../actions/types'

const initialState = {
  ideas: []
}
export default function (state = initialState, action) {
  switch (action.type) {
    case IDEAS_FETCHED:
      return {
        ...state,
        ideas: action.payload
      }

    case IDEA_ADDED:
      return {
        ...state,
        ideas: [action.payload, ...state.ideas]
      }
    case IDEA_DELETED:
      return {
        ...state,
        ideas: state.ideas.filter(i => i._id !== action.payload._id)
      }
    default: 
      return {
        ...state
      }
  }
}