import { Button, Card, Form, FormLayout, Heading, Layout, TextField } from '@shopify/polaris'
import React from 'react'
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import {useDispatch} from 'react-redux'
import {setCustomer} from '../../store/actions/storefrontActions'

const CustomerForm = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = React.useState('')
  const [find, setFind] = React.useState(false)
  const handleEmailChange = React.useCallback(value => setEmail(value), []);

  const onSubmit = () => {
    email && dispatch(setCustomer(email))
    email && setFind(true)
  }
  
  return (
    <Layout.Section oneHalf>
      <Card sectioned >
      <Heading>Find Customer</Heading>
        <Form>
          <FormLayout>
            <TextField
              value={email}
              label="Email"
              autoComplete="email"
              onChange={handleEmailChange}
              placeholder="Enter customer email please"
              type="email"
            />
            <Button onClick={onSubmit}>Find</Button>
          </FormLayout>
        </Form>
        {find  && <CustomerInfo/>}
        {!email && !find &&  <p>Enter email please</p>}
      </Card>
      
    </Layout.Section>
  )
}

export default CustomerForm
