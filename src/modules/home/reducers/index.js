import { ACTION_SET_MESSAGE } from "./constants"

const initialState = {
  message: "awesome!",
}

const homeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_SET_MESSAGE:
      return { ...state, message: payload }

    default:
      return state
  }
}

export default homeReducer
