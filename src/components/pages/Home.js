import React from "react";
import aboutBackground from './Images/aboutBackground.jpg';
import Jumbotron from "../Jumbotron";
import Container from "../Container";
import Wrapper from "../Wrapper"

function Home() {
  return (
    <Wrapper>
      <Container>
        <div className="container">
            <Jumbotron>

                <img src={aboutBackground} className="img-fluid" alt="McWay Falls" style={{height: "70vh", width: "60vw"}}/> 
                <h1 className="Subject" style={{backgroundColor: "whitesmoke", paddingLeft: "5px", width: "vw"}}>Jesse Aldana</h1>
                <p className="Title" style={{color: "white", backgroundColor: "rgb(148, 151, 151)", paddingLeft: "5px", width: "vw"}}>Full-Stack Software Developer</p>

            </Jumbotron>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Home;