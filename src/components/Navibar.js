import React, {useState} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {Container, Form, Modal} from "react-bootstrap";


const Styles = styled.div`
 a 
a, .navbar-brand, .navbar-nav, .nav-link {
    color: #adb1b8
    &:hover {
    color: white
    }
}
`

export function NaviBar() {

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return <>
        <Styles>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Jam-Fashion</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/home">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                            <Nav.Link><Link to="/about">About</Link></Nav.Link>
                        </Nav>
                        <Nav>
                            <Button variant="primary" className="mr-2"
                                    onClick={handleShow}
                            >Log In </Button>
                            <Button variant="primary"
                                    onClick={handleShow}
                            >Sign out </Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Styles>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closseButton>
                <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email Adress</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">We'll never share your email</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter password"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="remember me"/>
                    </Form.Group>
                </Form>
            </Modal.Body>
        </Modal>
    </>
}