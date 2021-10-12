export const setCustomer = (customerEmail) => ({
  type: 'SET_CUSTOMER',
  payload: customerEmail
})

export const setStore = (store) => ({
  type: 'GET_STORE',
  payload: store
})

export const setProduct = (product) => ({
  type: 'SET_PRODUCT',
  payload: product
})