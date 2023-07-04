import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../Redux TLK/Reducers/FilteredProduct";
function FilterdProductRedux() {
  const Dispatch = useDispatch();
  const FilteredProduct = useSelector((state) => state.Filtered);
  useEffect(() => {
    Dispatch(fetchData("electronics"));
  }, []);
  return (
    <>
      <Container>
        <Row>
          {FilteredProduct.map((product) => {
            return (
              <Col className="col-md-6 col-lg-3 mb-2 " key={product.id}>
                <Card className="100% p-2">
                  <Card.Img
                    style={{ height: "300px" }}
                    variant="top"
                    src={product.image}
                  />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>{product.description.slice(20)}...</Card.Text>
                    <Card.Text>{product.price}$</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default FilterdProductRedux;
