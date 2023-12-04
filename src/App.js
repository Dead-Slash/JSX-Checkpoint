import React from "react";
import Name from "./component/Name";
import Description from "./component/Description";
import Price from "./component/Price";
import Image from "./component/Image";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import SayHello from "./component/SayHello";

const App = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Image />
        <Card.Body className="text-center">
          <Card.Title>
            <Name />
            <Price />
          </Card.Title>
          <Card.Text>
            <Description />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      <SayHello />
    </div>
  );
};

export default App;
