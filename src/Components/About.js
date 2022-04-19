import React, { useState } from "react";
import dateFormat from "dateformat";

import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";

export const About = () => {
  const [count, setCount] = useState(0);

  const handlePlas = () => {
    setCount(count + 1);
  };
  const handleMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const handleReset = () => {
    setCount(0);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="card p-4">
            <div className="card-header">{dateFormat()}</div>
            <h3 className="text-center">{count}</h3>
            <div className="card-body d-flex justify-content-between">
              <button className="btn btn-success" onClick={handleMinus}>
                count-
              </button>
              <button className="btn btn-secondary" onClick={handleReset}>
                reaset
              </button>
              <button className="btn btn-danger" onClick={handlePlas}>
                count+
              </button>
            </div>
          </div>
        </div>
      </div>

      <Card>
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Card subtitle
          </CardSubtitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Button color="danger">Button</Button>
          <Button color="danger" outline>
            Button outline
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};
