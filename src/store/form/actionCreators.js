import * as actionTypes from './actionTypes'

export const addFieldAction = (field) => ({
  type: actionTypes.ADD_FIELD,
  payload: {
    type: field.type,
    placeholder: field.placeholder,
    position: field.position,
    required: field.required
  }
})

export const removeFieldAction = () => ({
  type: actionTypes.REMOVE_FIELD
})
