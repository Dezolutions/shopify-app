const initialState = {
  customerEmail: '',
  store: {},
  product: {}
}

const storefrontApiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CUSTOMER':
      return {
        ...state,
        customerEmail: action.payload
      }
    case 'GET_STORE':
      return {
        ...state,
        store: action.payload
      }
    case 'SET_PRODUCT':
      return {
        ...state,
        product: action.payload
      }
    default:
      return state;
  }
}

export default storefrontApiReducer