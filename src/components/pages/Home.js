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
              <div className="jumbotron" style={{textAlign: "center", width: "47vw", marginTop: "10px"}}>
                <img src={aboutBackground} className="img-fluid" alt="McWay Falls" style={{height: "60vh"}}/> 
                <h1 className="Subject" style={{position: "relative", backgroundColor: "whitesmoke", paddingLeft: "5px"}}>Jesse Aldana</h1>
                <p className="Title" style={{position: "relative", color: "white", backgroundColor: "rgb(148, 151, 151)", paddingLeft: "5px"}}>Full-Stack Software Developer</p>
                </div>
            </Jumbotron>
        </div>
      </Container>
    </Wrapper>
  );
}

export default Home;