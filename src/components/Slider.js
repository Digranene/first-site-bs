import React from "react";
import slide1 from "../img/yns-plt-9L2Ph2Of5ag-unsplash.jpg"
import slide2 from "../img/thea-hdc-wDMPMrq9Y8U-unsplash.jpg"
import slide from "../img/thea-hdc-cvJySBfdyOw-unsplash (1).jpg"
import {Carousel} from "react-bootstrap";

export function Slider() {
    return <>
        <Carousel>
            <Carousel.Item style={{'height': "400px"}}>
                <img className="d-block w-100"
                     src={slide}
                     alt="First slide"
                     style={{'transform': "translate(0, -300px)"}}
                />
                <Carousel.Caption>
                    <h3>web dev</h3>
                    <p>lorem ipsun</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': "400px"}}>
                <img className="d-block w-100"
                     src={slide1}
                     alt="Second slide"
                     style={{'transform': "translate(0, -300px)"}}
                />
                <Carousel.Caption>
                    <h3>web dev</h3>
                    <p>lorem ipsun</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item style={{'height': "400px"}}>
                <img className="d-block w-100"
                     src={slide2}
                     alt="Third slide"
                     style={{'transform': "translate(0, -300px)"}}
                />
                <Carousel.Caption>
                    <h3>web dev</h3>
                    <p>lorem ipsun</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </>
}