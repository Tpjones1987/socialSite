import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Add(props) {
  const [formValues, changeFormValues] = useState({
    id: "",
    task: "",
    complete: false,
    likecounter: 0,
    like: false,
  });

  toastr.options = {
    closeButton: false,
    debug: false,
    newestOnTop: false,
    progressBar: true,
    positionClass: "toast-top-right",
    preventDuplicates: false,
    onclick: null,
    showDuration: "300",
    hideDuration: "1000",
    timeOut: "5000",
    extendedTimeOut: "1000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
  };

  const handleChange = (event) => {
    let newVal = event.target.value;
    let keyToChange = event.target.name;
    const newState = { ...formValues };
    if (event.target.name === "complete") {
      newState[keyToChange] = !formValues.complete;
    } else {
      newState[keyToChange] = newVal;
    }
    changeFormValues(newState);
  };
  const submitHandler = () => {
    props.functionFromParent(formValues);
    toastr["success"]("post added", "Success");
  };
  return (
    <>
      <div>
        <center />
        <Form>
          <Form.Group class="Name">
            <Form.Label> User Name</Form.Label>
            <Form.Control
              name="id"
              value={formValues.id}
              type="text"
              onChange={(event) => {
                handleChange(event);
                // console.log(event)
              }}
            />
          </Form.Group>
          <Form.Group class="Post">
            <Form.Label> Post </Form.Label>
            <Form.Control
              value={formValues.task}
              name="task"
              type="text"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </Form.Group>
          <Form.Group class="Completed">
            <Form.Check
              type="checkbox"
              name="complete"
              checked={formValues.checked}
              id="complete"
              label="Completed?"
              onChange={(event) => {
                handleChange(event);
              }}
            />
          </Form.Group>
          <Button
            style={{ marginLeft: "40px" }}
            variant="primary"
            onClick={() => {
              submitHandler();
            }}
          >
            Submit
          </Button>
          <center />
        </Form>
        <center />
      </div>
    </>
  );
}

export default Add;
