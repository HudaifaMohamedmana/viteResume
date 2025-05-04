import './App.css'

function App() {

  return (
    <>
    <nav>  
      <div class="int">
    <img src="data:image/jpeg;base64,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"
     alt="My photo" class="IntElement" id="myPhoto"></img>
    
     <h3> Hudaifa Mohamedmana</h3>

    </div>
    <div></div>
          <div className="MySocial">
        <a href="https://www.linkedin.com/in/hudaifa-mohamedmana-16296528a/">
          <div className="Sites" id="Site_a">
            <p className="title">LinkedIn</p>
            <img
              src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"
              alt="linkedin"
              className="bizPic"
            />
          </div>
        </a>

        <a href="https://github.com/HudaifaMohamedmana">
          <div className="Sites" id="Site_b">
            <p className="title">GitHub</p>
            <img
              src="https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png"
              alt="github"
              className="bizPic"
            />
          </div>
        </a>

        <a href="mailto:hudaifamana23@gmail.com">
          <div className="Sites" id="Site_c">
            <p className="title">Email</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nd82eFk5SaBPRIeCpmwL7A4YSokA-kXSmw&s"
              alt="Email"
              className="bizPic"
            />
          </div>
        </a>
      </div>

    </nav>
    <div>
      <h1>Projects</h1>
      <h2>Amwaj Cafe</h2>
    <iframe width="560" height="315" 
  src="https://youtu.be/D2PLTn77H5g" 
  title="YouTube video player" 
  frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
  allowfullscreen>
</iframe>
    </div>
      <div className="introduction">
        <div className="IntElement" id="ProfessionalSummary">
          <h4>Professional Summary :</h4>
          <p>
            * Outstanding research and information management capabilities.<br />
            * Proven ability to work collaboratively with diverse groups and establish ongoing relationships.<br />
            * Capable of quickly understanding how systems are used in order to provide efficient support.<br />
            * Demonstrated outstanding customer orientation using strong communication skills.<br />
            * Strong leadership and problem-solving.
          </p>
        </div>

        <div className="IntElement" id="TechnicalSkills">
          <h4>Technical Skills (Or Skills):</h4>
          <p>
            * Business management.<br />
            * Experience with many computer languages like HTML, CSS, JavaScript, Java, C, and C++.<br />
            * Fluent in Arabic and English. (translator certificate)<br />
            * SQL and data structure.
          </p>
        </div>
      </div>

      <hr />



      <hr />

      <div className="Descriptions">
        <p>© 2024 Hudaifa-WebBag, Resume</p>
      </div>
    </>
  )
}

export default App
