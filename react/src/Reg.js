import React, { Component } from 'react';
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import {Link} from 'react-router-dom'
class Reg extends Component {
  constructor() {
    super();
    this.state = {
      EmployeeName: '',
      City: '',
      Email: '',
      Password: '',
      Age: ''
    }

    this.Email = this.Email.bind(this);
    this.Password = this.Password.bind(this);
    this.EmployeeName = this.EmployeeName.bind(this);
    this.Password = this.Password.bind(this);
    this.Age = this.Age.bind(this);
    this.City = this.City.bind(this);
    this.register = this.register.bind(this);
  }
  Email(event) {
    this.setState({ Email: event.target.value })
  }
  Age(event) {
    this.setState({ Age: event.target.value })
  }
  Password(event) {
    this.setState({ Password: event.target.value })
  }
  City(event) {
    this.setState({ City: event.target.value })
  }
  EmployeeName(event) {
    this.setState({ EmployeeName: event.target.value })
  }
  register(event) {
    fetch('https://localhost:44391/Api/login/InsertEmployee', {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        EmployeeName: this.state.EmployeeName,
        Password: this.state.Password,
        Email: this.state.Email,
        City: this.state.City,
        Age: this.state.Age
      })

    }).then((Response) => Response.json())
      .then((Result) => {

        if (Result.Status === "Success")
                this.props.history.push("/Login");

        else
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')
      })
  }
  render() {
    return (
      <div className="app flex-row align-items-center" >
        <div className="navbar-dark bg-dark shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <div className="navbar navbar-expand-lg">

                            <div className="container-fluid">

                                <Link to="/" className="navbar-brand">RentHut</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <div className="nav-item">
                                            <Link to="/Login" className="nav-link active">Login</Link>
                                        </div>
                                        
                                        <div className="nav-item">
                                            <Link to="/contact" className="nav-link active">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Container style={{marginTop:"2em"}}>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <div className="row" className="mb-2 pageheading">
                      <div className="col-sm-12 btn btn-primary">
                        Sign Up
                        </div>
                    </div>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.EmployeeName} placeholder="Enter User Name" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="text"  onChange={this.Email} placeholder="Enter Email" />
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <Input type="text"  onChange={this.City} placeholder="Enter City" />
                    </InputGroup>
                    <InputGroup className="mb-4">

                      <Input type="text"  onChange={this.Age} placeholder="Enter Age" />

                    </InputGroup>

                    <Button  onClick={this.register}  color="success" >Create Account</Button>

                  </Form>

                </CardBody>

              </Card>

            </Col>

          </Row>
        </Container>

      </div>

    );

  }

}


export default Reg;