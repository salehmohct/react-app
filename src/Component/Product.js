import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import { fetchProducts } from "../Redux TLK/Reducers/ProductSlice";
import { DeleteItem } from "../Redux TLK/Reducers/ProductSlice";
function Product() {
  const Dispatch = useDispatch();
  const Products = useSelector((state) => state.Product);
  useEffect(() => {
    Dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Container>
        <Row>
          {Products.map((product) => {
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
                    <Button
                      variant="danger"
                      onClick={() => {
                        Dispatch(DeleteItem(product));
                      }}
                    >
                      Delete Product
                    </Button>
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
export default Product;
