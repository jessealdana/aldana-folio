import React from "react";
import dinner from "./Images/dinnerAndAmovie.jpg";
import quiz from "./Images/quiz.png";
import boardgame from "./Images/boardgame.png";
import directory from "./Images/directory.png";
import book from "./Images/imaginaryTraveler.png"
import budget from "./Images/budget.png";
import Container from "../Container";




function Portfolio() {
  return (
    
    <Container>
       <div className="body" style={{paddingBottom: "20px"}}> 
        <div className="row">
          <div className="col-sm-3">
            <h2 style={{paddingTop: "20px"}}>Portfolio</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <hr />
          </div>
        </div>

        <br />


        <div className="row">
          <div className="col-sm-6 PortfolioCard">
            <a href="https://imaginarytraveler4.herokuapp.com/" target="_blank" rel="noopener noreferrer">
            <img src={book} className="img-fluid" alt="Imaginary Traveler" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "308px", textAlign: "center"}}>
              Virtual Walkabout
            </div>
          </div>  
          <div className="col-sm-6 PortfolioCard">
            <a href="https://jessealdana.github.io/Coding-Quiz/" target="_blank" rel="noopener noreferrer">              
            <img src={quiz} className="img-fluid" alt="Coding Quiz" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>  
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "308px", textAlign: "center"}}>
              Coding Quiz
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 PortfolioCard">
            <a href="https://tranquil-castle-93328.herokuapp.com" target="_blank" rel="noopener noreferrer">
            <img src={boardgame} className="img-fluid" alt="Boardgame" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "308px", textAlign: "center"}}>
              Boardgame
            </div>
          </div>
          <div className="col-sm-6 PortfolioCard">
            <a href="https://super-dir.herokuapp.com/" target="_blank" rel="noopener noreferrer">           
              <img src={directory} className="img-fluid" alt="Parent Directory" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "308px", textAlign: "center"}}>
              Parent Directory
            </div>
          </div>
        </div>

        <div className="row">
        <div className="col-sm-6 PortfolioCard">
            <a href="https://sharlenemay.github.io/dinner_movie/" target="_blank" rel="noopener noreferrer">
            <img src={dinner} className="img-fluid" alt="Dinner and a Movie" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "308px", textAlign: "center"}}>
              Movie and Foodie App
            </div>
          </div>  
          <div className="col-sm-6 PortfolioCard">
            <a href="https://fierce-falls-45988.herokuapp.com/" target="_blank" rel="noopener noreferrer">           
              <img src={budget} className="img-fluid" alt="Budget Tracker" style={{borderStyle: "solid", borderColor: "darkslategray", borderWidth: "4px"}}/>
            </a>
            <div id="caption" style={{backgroundColor: "rgb(148, 151, 151)", color: "white", width: "308px", textAlign: "center"}}>
              Budget Tracker
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Portfolio;