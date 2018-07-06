import * as actionTypes from './actionTypes'

const initialState = []

const form = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_FIELD:
      return [ ...state, action.payload ]
    case actionTypes.REMOVE_FIELD:
      return state.slice(0, -1)
    default:
      return state
  }
}

export default form
