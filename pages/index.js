import {  Heading, Layout, Page } from "@shopify/polaris";
import CustomerForm from "../components/CustomerForm/CustomerForm";
import StoreInfo from "../components/Store/StoreInfo";

const Index = () => (
  <Page>
    <Heading>Storefront API</Heading>
    <Layout>
      <CustomerForm/>
      <StoreInfo/>
    </Layout>
  </Page>
);

export default Index;
