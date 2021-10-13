const initialState = {
  customerEmail: ''
}

const storefrontApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CUSTOMER':
      return {
        ...state,
        customerEmail: action.payload
      }
    default:
      return state;
  }
}

export default storefrontApiReducer