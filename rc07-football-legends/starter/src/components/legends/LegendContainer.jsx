import Container from "react-bootstrap/Container";
import { data } from "../../helpers/data";
import Row from "react-bootstrap/Row";

import LegendCard from "./LegendCard";

const LegendContainer = () => {
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