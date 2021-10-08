import {  Heading, Layout, Page } from "@shopify/polaris";
import CustomerForm from "../components/CustomerForm/CustomerForm";

const Index = () => (
  <Page>
    <Heading>Test Shopify app</Heading>
    <Layout>
      <CustomerForm/>
    </Layout>
  </Page>
);

export default Index;
