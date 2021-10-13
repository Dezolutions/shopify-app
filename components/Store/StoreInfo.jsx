import React from 'react'
import {useQuery} from '@apollo/client'
import {GET_STORE} from '../../graphlql/queries'
import { Card, DisplayText, Heading, Layout } from '@shopify/polaris';
import Loader from '../Loader/Loader';

const StoreInfo = () => {

  const { loading, error, data } = useQuery(GET_STORE);

  return (
    <Layout.Section oneHalf>
      <Card sectioned>
      <Heading>Store info</Heading>
        {loading && <Loader/>}
        {error && <DisplayText size="small">{error.message}</DisplayText>}
        {data && 
          <>
            <DisplayText size="small">{data.shop.name}</DisplayText>
            <p>{data.shop.description}</p>
          </>
        }
      </Card>
    </Layout.Section>
  )
}

export default StoreInfo
