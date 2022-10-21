import React, { useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import "./App.css";
import Button from "react-bootstrap/Button";

function View(props) {
  const [count, changeCount] = useState(0);

  const likeHandler = (id) => {
    console.log("likeHandler called");
    const testing = props.todos.filter((item) => item.id === id);
    changeCount((prevState) => prevState + 1);
    props.functionFromParent(testing);
  };

  const buildRows = () => {
    let createdRows = props.todos.map((current) => {
      return (
        <tr key={current.id}>
          <td>{current.id}</td>
          <td>{current.task}</td>
          <td>{current.complete ? "yes" : "no"}</td>
          <td>
            {
              <Button variant="primary" onClick={() => likeHandler(current.id)}>
                like
              </Button>
            }
          </td>
          <td>{current.likecounter}</td>
        </tr>
      );
    });
    return createdRows;
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Post</th>
            <th>Complete?</th>
            <th>Like</th>
            <th>no. of Likes</th>
          </tr>
        </thead>
        <tbody>{buildRows()}</tbody>
      </Table>
    </>
  );
}
export default View;
