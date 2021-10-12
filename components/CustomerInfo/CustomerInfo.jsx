import React from 'react'
import {useQuery} from '@apollo/client'
import {useSelector} from 'react-redux'
import {GET_CUSTOMER} from '../../graphlql/queries'

const CustomerInfo = () => {
  
  const email =  useSelector(storefrontReducer => storefrontReducer.customerEmail)

  try {
    const { loading, error, data } = useQuery(GET_CUSTOMER(email)); 
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.name}</p>;
    
    if (data)
      return (
      <ul>
        {
          Object.entries(data.customers.edges[0].node).map(item => 
            <li key={item[0]}>{item[0]}: {item[1] || 'не указан'}</li>)
        }
      </ul>
      )
  
  } catch (error) {
    console.log(error)
    if(error.name === 'TypeError')
      return <p>There is no customers with this email</p> 
    if(error.name === 'GraphQLError')
      return <p>Graphql error</p> 
  }
  return (
    <p>no info about customer</p>
  )
}

export default CustomerInfo
