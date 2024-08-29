import Container from "react-bootstrap/Container";
import { data } from "../../helpers/data";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import LegendCard from "./LegendCard";

const LegendContainer = () => {
  
  // console.log(data);
  return (
    <Container>
      <Row>
        {data.map((legend) => (
          <LegendCard key={legend.id} legend={legend}/>
        ))}
      </Row>
    </Container>
  );
};

export default LegendContainer;