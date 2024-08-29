import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { data } from "../../helpers/data";

const LegendContainer = () => {
  return (
    <Container>
      <Row>
        {data.map(legend=><Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={legend.img} />
            <Card.Body>
              <Card.Title>{legend.name}</Card.Title>
              <ul className="m-auto">
                {legend.statistics.map(item=><li className="list-unstyled h5 text-start">🏈{item}</li> )}
              </ul>
            </Card.Body>
            <Card.Footer>
              Career Years:{legend.official_career}
            </Card.Footer>
          </Card>
        </Col>)}
        
      </Row>
    </Container>
  );
};

export default LegendContainer;
