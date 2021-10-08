import { Button, Card, Form, FormLayout, Heading, Layout, TextField } from '@shopify/polaris'
import React from 'react'

const CustomerForm = () => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleEmailChange = React.useCallback(value => setEmail(value), []);
  const handlePasswordChange = React.useCallback(value => setPassword(value), []);

  return (
    <Layout.Section oneHalf>
      <Card sectioned >
      <Heading>Customer data</Heading>
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
            <TextField
              value={password}
              label="Password"
              autoComplete="email"
              onChange={handlePasswordChange}
              placeholder="Enter customer password please"
              type="email"
            />
            <Button submit>Submit</Button>
          </FormLayout>
        </Form>
      </Card>
    </Layout.Section>
  )
}

export default CustomerForm
