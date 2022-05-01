import DayCard from './DayCard/DayCard'
import {Row, Col} from 'react-bootstrap'
function App() {
  return (
    <div>
      <h1 style={{background: "lightgray", textAlign: "center", height: "60px"}}>
        5-Day Forecast
      </h1>
      <br/>
      <Row>
        <Col><DayCard /></Col>
        <Col><DayCard /></Col>
        <Col><DayCard /></Col>
        <Col><DayCard /></Col>
        <Col><DayCard /></Col>
        <Col><DayCard /></Col>
        <Col><DayCard /></Col>
      </Row>

    </div>
  );
}

export default App;
