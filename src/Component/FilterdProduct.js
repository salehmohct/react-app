import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
function ProductCat(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${props.catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <>
      <Container>
        <Row>
          {products.map((product) => {
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

export default ProductCat;
