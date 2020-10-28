import React from "react";
import selfieImage from './Images/selfie.jpg';
import Container from "../Container"

function About() {
  return (
  <Container>
  <div className="container" style={{height: "40vh", paddingBottom: "40px"}}>

        <div className="row">
          <div className="col-sm-3" style={{paddingTop: "10px"}}>
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <hr />
          </div>
        </div>

      <br />

        <div className="row">
          <div className="col-sm-6">       
            <img src={selfieImage} className="img-fluid" alt="Jesse Aldana" style={{marginBottom: "120px"}}/>
          </div>
          <div className="col-sm-6" style={{backgroundColor: "whitesmoke"}}>
            <p style={{paddingTop: "20px"}}>I am a full-stack software developer with a certificate from the Coding Boot Camp at UCLA extension and artist with a BA from Brown University and an MFA in painting from the New York Academy of Art. From my career as an oil painter with an established sales record of original and commissioned work I bring a strong sense of composition, color and functional design to my work with languages and frameworks such as CSS, Bootstrap, JavaScript, ReactJS, Node, Express and MongoDB.  My personal practice instills self-reliance and proactivity into my work ethic while I maintain and enjoy a healthy respect for the work of my teammates and colleagues.  Web development represents an exciting career opportunity that meshes with my creative, forward-thinking mind.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12" style={{backgroundColor: "whitesmoke"}}>
            <p style={{paddingTop: "20px"}}>I continue to make oil paintings and always will but working with others in the coding community has been inspiring and energizing in brand new ways.  As a nod to my continuing evolution and ongoing change, this website is styled in the tones of the "whitebox" traditionally associated with a contemporary brick and mortar art gallery.  As my understanding of code deepens, it will infuse these pages with new colors and styles.</p>
          </div>
        </div>    
    <div className="bottomrule">
      <hr />
    </div>
  </div>
  </Container>
  );
}

export default About;
