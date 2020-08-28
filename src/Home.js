import React from "react";
import {Slider} from "./components/Slider";
import {Col, Container, Row, Card, Button} from "react-bootstrap";
import topsallers from "../src/img/topsallers.jpg"
import cardimg3 from "../src/img/vuafayfa-1300x675.jpg"
import cardimg2 from "../src/img/indijskie-braslety-56.jpg"
import cardimg from "../src/img/1bc_mycollages.jpg"
import Jumbotron from "./components/Jumbotron";

export const Home = () => {
    return <>
        <Slider/>
        <Container style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
            <Row>
                <Col>
                    <Card style={{width: '18rem', marginTop: '2rem'}}>
                        <Card.Img variant="top" src={cardimg}/>
                        <Card.Body>
                            <Card.Title>title of </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem', marginTop: '2rem'}}>
                        <Card.Img variant="top" src={cardimg2}/>
                        <Card.Body>
                            <Card.Title>title of </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem', marginTop: '2rem'}}>
                        <Card.Img variant="top" src={cardimg3}/>
                        <Card.Body>
                            <Card.Title>title of </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem', marginTop: '2rem'}}>
                        <Card.Img variant="top" src={cardimg3}/>
                        <Card.Body>
                            <Card.Title>title of </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem', marginTop: '2rem'}}>
                        <Card.Img variant="top" src={cardimg3}/>
                        <Card.Body>
                            <Card.Title>title of </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{width: '18rem', marginTop: '2rem'}}>
                        <Card.Img variant="top" src={cardimg3}/>
                        <Card.Body>
                            <Card.Title>title of </Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet, consectetur adipisicing
                            </Card.Text>
                            <Button variant="primary">Learn More</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Jumbotron/>
        <Container style={{marginBottom: '30px'}}>
            <Row>
                <Col md={7}>
                    <img src={topsallers} height={350} alt=""/>
                </Col>
                <Col md={5}>
                    <h2>Top Sallers</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae eos excepturi expedita
                        in
                        incidunt molestiae necessitatibus non pariatur perferendis quaerat, quam quas quis repellat </p>
                    <Button>Learn More</Button>
                </Col>
            </Row>
        </Container>
    </>
}