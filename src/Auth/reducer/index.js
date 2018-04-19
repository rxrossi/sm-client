const defaultState = {
  token: false
}

export default function auth(state = defaultState, action) {
  if (action.type === 'TOGGLE') {
    return {
      token: !state.token
    }
  }
  return state
}