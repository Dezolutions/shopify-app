import React from 'react'
import {useQuery} from '@apollo/client'
import {useSelector} from 'react-redux'
import {GET_CUSTOMER} from '../../graphlql/queries'
import { List } from '@shopify/polaris'

const CustomerInfo = () => {
  
  const email =  useSelector(storefrontReducer => storefrontReducer.customerEmail)
  
  try {
    const { loading, error, data } = useQuery(GET_CUSTOMER(email)); 
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error.name}</p>;
    
    if (data)
      return (
      <List>
        {
          Object.entries(data.customers.edges[0].node).map(item => 
            <List.Item key={item[0]}>{item[0]}: {item[1] || 'не указан'}</List.Item>)
        }
      </List>
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

export default React.memo(CustomerInfo)
