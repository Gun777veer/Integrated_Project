import drake from "../contents/drake.jpeg";
import bhunnu from "../contents/bhunnu.jpeg";
import gunnu from "../contents/gunnu.jpeg";


function About() {
    return (
      <>
      <div class="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2>Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src={gunnu}  alt="gunnu" ></img>
      <div class="container">
        <h2>Gunveer</h2>
        <p class="title">Back-end</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>gunnu@example.com</p>
        <div className="btn">     <button id='sub-btn'>Contact</button>
 </div>      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src="" alt="shivam"></img>
      <div class="container">
        <h2>Shivam</h2>
        <p class="title">Front-end</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>shivam@example.com</p>
        <div className="btn">     <button id='sub-btn'>Contact</button>
 </div>      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={drake}  alt="drake" ></img>
      <div class="container">
        <h2>Jashan</h2>
        <p class="title">Front-end</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jashan@example.com</p>
        <div className="btn">     <button id='sub-btn'>Contact</button>
 </div>

 
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={bhunnu} alt="bhunnu" ></img>
      <div class="container">
        <h2>Bhuvanyu</h2>
        <p class="title">Back-end</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>bhunnu@example.com</p>
        <div className="btn">     <button id='sub-btn'>Contact</button>
 </div>

 
      </div>
    </div>
  </div>
</div>

      </>
    );
  }
  
  export default About;
