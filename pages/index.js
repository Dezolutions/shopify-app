import {  Heading, Layout, Page } from "@shopify/polaris";
import CustomerForm from "../components/CustomerForm/CustomerForm";

const Index = () => (
  <Page>
    <Heading>Storefront API</Heading>
    <Layout>
      <CustomerForm/>
    </Layout>
  </Page>
);

export default Index;
