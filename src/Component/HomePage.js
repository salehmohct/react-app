import Product from "./Product";
import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProductCat from "./FilterdProduct";
import FilterdProductRedux from "./FilteredProductRedux"; //مباشرة
// import useDataFetch from "./useDataFetchRedux";
function HomePage() {
  return (
    <Container>
      <Tabs defaultActiveKey="home" id="fill-tab-example" className="mb-3" fill>
        <Tab eventKey="home" title="All Product">
          <Product />
        </Tab>
        <Tab eventKey="profile" title="Electronics">
          {/* <ProductCat catName="electronics" /> */}
          <FilterdProductRedux />
        </Tab>
        <Tab eventKey="ww" title="Jewelery">
          <ProductCat catName="jewelery" />
        </Tab>
      </Tabs>
    </Container>
  );
}
export default HomePage;
