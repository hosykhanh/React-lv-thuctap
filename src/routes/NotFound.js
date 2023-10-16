import React from "react";
import { Alert } from "react-bootstrap";

const NotFound = () => {
  return (
    <div>
      <Alert variant="info" dismissible className="mt-3">
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>Not Found.</p>
      </Alert>
    </div>
  );
};

export default NotFound;
