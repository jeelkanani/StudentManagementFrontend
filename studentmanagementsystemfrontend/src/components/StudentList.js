import React from "react";
import { Card, Container, Table } from "react-bootstrap";
import { useState,useEffect } from "react";
import axios from "axios";

export default function StudentList() {
const [student, setStudent] = useState([]);


  return (
    <div className="my-5">
      <Container>
        <Card.Header><h3>Students List</h3></Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr class="text-center">
                <th>Student Id</th>
                <th>Student Name</th>
                <th>Student Address</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button type="butoon" className="btn btn-dark" >Edit</button>
                  &nbsp;&nbsp;
                  <button type="butoon" className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button type="butoon" className="btn btn-dark" >Edit</button>
                  &nbsp;&nbsp;
                  <button type="butoon" className="btn btn-danger">Delete</button>
                </td>
              </tr>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>
                  <button type="butoon" className="btn btn-dark" >Edit</button>
                  &nbsp;&nbsp;
                  <button type="butoon" className="btn btn-danger">Delete</button>
                </td>
              </tr>
              
         
            </tbody>
          </Table>
        </Card.Body>
      </Container>
    </div>
  );
}
