import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div class="int">


          <h3> Hudaifa.dev</h3>
        </div>
    
      </nav>
      <div className="projectsContainer">
        <h1>Projects:-</h1>
        <div className="projects">
          <div className="project">
            <h2>Amwaj Cafe</h2>
            <iframe
              src="https://www.youtube.com/embed/D2PLTn77H5g"
              allowfullscreen
            ></iframe>
          </div>
          <div className="project">
            <h2>Movie API</h2>
            <iframe
              src="https://www.youtube.com/embed/WBNGkHceQbo"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      <div>
          <div className="MySocial">
          <a href="https://www.linkedin.com/in/hudaifa-mohamedmana-16296528a/">
            <div className="Sites" id="Site_a">
              <img
                src="https://store-images.s-microsoft.com/image/apps.31120.9007199266245564.44dc7699-748d-4c34-ba5e-d04eb48f7960.bc4172bd-63f0-455a-9acd-5457f44e4473"
                alt="linkedin"
                className="bizPic"
              />
            </div>
          </a>

          <a href="https://github.com/HudaifaMohamedmana">
            <div className="Sites" id="Site_b">
              <img
                src="https://e7.pngegg.com/pngimages/914/758/png-clipart-computer-icons-logo-github-github-logo-logo-computer-program-thumbnail.png"
                alt="github"
                className="bizPic"
              />
            </div>
          </a>

          <a href="mailto:hudaifamana23@gmail.com">
            <div className="Sites" id="Site_c">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nd82eFk5SaBPRIeCpmwL7A4YSokA-kXSmw&s"
                alt="Email"
                className="bizPic"
              />
            </div>
          </a>
        </div>
      </div>


      <div className="Descriptions">
        <p>© 2024 Hudaifa.dev </p>
      </div>
    </>
  );
}

export default App;
