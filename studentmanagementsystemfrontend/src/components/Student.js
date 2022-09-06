import axios from "axios";
import React, {useState} from "react";
import { Container, Form, Card, Button } from "react-bootstrap";


export default function Student() {

  // const [id, setId] = useState('');
  // const [name, setName] = useState('');
  // const [address, setAddress] = useState('');
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
    const name = event.target.name
    const value = event.target.value

    setState({
      ...state,[name]:value,
    })
    
  }

  let saveStudent = () => {
        axios.post("http://localhost:8080/student", student)
        .then(response => {
          if(response.data != null){
            alert('Record added successfully');        
          }
        })
        .catch(error => alert(error));
        window.location.reload(false);
        
      }
    

  return (
    <div  className="my-3">
    <Container>
      <Card>
        <Form onSubmit={saveStudent}>
          <Card.Header>Add Student Information</Card.Header>
          <Card.Body>
            <Form.Group className="mb-3">
              <Form.Label>Id</Form.Label>
              <Form.Control name="id" value={state.id} type="text" placeholder="Enter id" onChange={textChanged}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control name="name" value={state.name} type="text" placeholder="Enter name" onChange={textChanged} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control name="address" value={state.address} type="text" placeholder="Enter address" onChange={textChanged} />
            </Form.Group>
          </Card.Body>
          <Card.Footer>
          <Button variant="primary" type="submit">
            Submit
          </Button>
          </Card.Footer>
        </Form>
      </Card>
    </Container>
    </div>
  );
}
