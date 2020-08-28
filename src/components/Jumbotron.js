import React from "react";
import {Jumbotron as Jumbo, Container} from "react-bootstrap";
import ocean from "../img/birger-strahl-aV3wcTMQcUY-unsplash.jpg"
import styled from "styled-components";

const Styles = styled.div`
      .jumbo {
        background: url(${ocean}) no-repeat fixed bottom;
        background-size: cover
        color: #efefef
        height: 400px
        position: relative
        z-index: -2
        overflow: hidden
      }
      .overlay {
      background-color: #0000
      opacity: 0.7
      position: absolute
      top: 0
      left: 0
      bottom: 0
      right: 0
      z-index: -1
      } 
`;

const Jumbotron = () => {
    return <>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <h1>Shopping style</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid beatae eos excepturi expedita
                        in
                        incidunt molestiae necessitatibus non pariatur perferendis quaerat, quam quas quis repellat Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad animi cumque dicta doloremque eos esse est harum illum impedit magni necessitatibus nemo obcaecati quibusdam soluta tempore totam velit, veniam voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aut commodi culpa dolores dolorum eaque enim in inventore laboriosam, magnam minima, nemo neque nostrum officia repudiandae ut veritatis, voluptatibus. </p>
                </Container>
            </Jumbo>
        </Styles>
    </>
}

export default Jumbotron;