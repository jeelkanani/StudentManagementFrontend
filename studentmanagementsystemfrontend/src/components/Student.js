import axios from "axios";
import { Container, Form, Card, Button } from "react-bootstrap";
import { Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

export default function Student() {

  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const { studentId } = useParams(); 
  const navigate = useNavigate();

  
  useEffect(() => {
    if (studentId) {
      axios
        .get("http://localhost:8080/student/" + studentId)
        .then((response) => {
          if (response.data != null) {
            setId(response.data.id);
            setName(response.data.name);
            setAddress(response.data.address);
          }
        })
        .catch((error) => alert(error));
    }
  }, []);

  const [state, setState] = useState({
    id: '',
    name: '',
    address: '',
  })

  let student = {
    id : state.id,
    name : state.name,
    address : state.address
  }

  let textChanged = (event) => {
    
    if (event.target.name === "id") {
      setId(event.target.value);
    
    } else if (event.target.name === "name") {
      setName(event.target.value);
  
    } else if (event.target.name === "address") {
      setAddress(event.target.value);
    }

  };

  

  let saveStudent = (event) => {
    event.preventDefault();
     

      axios
        .post("http://localhost:8080/student", student)
        .then((response) => {
          if (response.data != null) {
            alert("Record added successfully");
          }
        })
        .catch((error) => alert(error));
  };

  let updateStudent = (event) => {
    event.preventDefault();
    axios.put("http://localhost:8080/student/" + studentId, student).then((response) => {
      if (response.data != null) {
        alert("Record Updated successfully");
        navigate("/listStudents"); // Navigate to Students List Components
      }
    });
  };
    

  return (
    <div className="my-5">
      <Container>
        <Card>
          <Form onSubmit={studentId != null ? updateStudent : saveStudent}>
            <Card.Header>
              <strong>{studentId!=null? "Update Student Information":"Add Student Information"}</strong>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Id</Form.Label>
                <Form.Control
                  name="id"
                  value={id}
                  type="text"
                  placeholder="Enter id"
                  onChange={textChanged}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={name}
                  type="text"
                  placeholder="Enter name"
                  onChange={textChanged}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  name="address"
                  value={address}
                  type="text"
                  placeholder="Enter address"
                  onChange={textChanged}
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Button variant="primary" type="submit">
                {studentId != null ? "Update" : "Submit"}
              </Button>
            </Card.Footer>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
