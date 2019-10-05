import {
  FETCH_IDEAS
} from '../actions/types'

const initialState = {
  ideas: []
}
export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_IDEAS:
      return {
        ...state,
        ideas: action.payload
      }
    default: 
      return {
        ...state
      }
  }
}