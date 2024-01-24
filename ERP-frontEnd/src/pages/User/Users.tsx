import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Table } from "react-bootstrap";

function users() {
  return (
    <div className="py-4 px-4 w-100">
      <h3 className="fw-bold fs-4">Welcome To Our Users</h3>
      <div className="py-4 px-4 mt-4 rounded bg-white">
        <div className="d-flex justify-content-between align-itmes-center">
          <div>Users</div>
          <FontAwesomeIcon
            icon={faPlus}
            className="px-3 py-2 bg-danger rounded text-white"
            style={{ cursor: "pointer" }}
          />{" "}
        </div>
        <div className="py-2 mt-4">
          <Table bordered hover>
            <thead>
              <tr style={{ border: "1px thin red" }}>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Row 1</td>
                <td>Row 2</td>
                <td>Row 3</td>
              </tr>
              <tr>
                <td>Row 1</td>
                <td>Row 2</td>
                <td>Row 3</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default users;
