import "./App.css";
// import Home from './components/home/home';
// import About from './components/about/about';
// import Gallery from './components/gallery/gallery';
import Navbar from "./components/navbar/navbar";

function App(e) {
  return (
    <div className="container col-md-11">
      <Navbar />
      {/* <Home />
       <About />
      <Gallery /> */}
      <div>
        <div className="container">
          <div className="homepage-banner col-md-8">
            <div className="home-title container-fluid">ACCELERATE</div>
            <div className="home-title-bottom container-fluid">
              BREAKTHROUGHS
            </div>
          </div>
        </div>
        <div className="container">
          <div className="homedescription col-md-13">
            Firms and governments need to address issues that are tougher and
            more urgent than ever before. Oliver Wyman’s promise to deliver
            breakthrough impact through collaboration has resulted in 76% of our
            clients saying we have more impact than other management consulting
            firms.
          </div>
        </div>
        {/* <div className="picture-section">
          <div className="container-page">
            <div className="rowcontainer">
              <div className="item-one">
                <img
                  src="https://www.oliverwyman.com/content/dam/oliver-wyman/v2/home-page/2022/nov/10-to-do-for-ceos-to-reinvent-insurance-in-2023.jpg.imgixg.wideTileV3.jpg"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div className="item-two">
                <img
                  src="https://www.oliverwyman.com/content/dam/oliver-wyman/v2/home-page/2022/oct/ow-at-cop27-1x1.jpg.imgixg.smallTileV3.jpg"
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div> */}

        {/* =============== row one =============================================== */}

        <div className="container">
          <div className="row">
            <div className="col-md-8 my-3">
              <img
                src="https://www.oliverwyman.com/content/dam/oliver-wyman/v2/home-page/2022/nov/10-to-do-for-ceos-to-reinvent-insurance-in-2023.jpg.imgixg.wideTileV3.jpg"
                className="img-fluid"
                alt=".."
                width={"100%"}
              />
            </div>
            <div className="col-md-4 my-3">
              <img
                src="https://www.oliverwyman.com/content/dam/oliver-wyman/v2/home-page/2022/oct/ow-at-cop27-1x1.jpg.imgixg.smallTileV3.jpg"
                className="img-fluid"
                alt="..."
                width={"100%"}
              />
            </div>
          </div>
        </div>
        {/* =============== row two =============================================== */}
        <div className="container">
          <div className="row">
            <div className="color-orange col-md-4 my-3" width={"100%"}></div>

            <div className="col-md-4 my-3">
              <img
                src="https://www.oliverwyman.com/content/dam/oliver-wyman/v2/home-page/2022/nov/the-growing-risk-lurking-under-the-sea-1x1.jpg.imgixg.smallTileV3.jpg"
                className="img-fluid"
                alt="..."
                width={"100%"}
              />
            </div>

            <div className="color-blue col-md-4 my-3" width={"100%"}></div>
          </div>
        </div>

        {/* =============== row three =============================================== */}
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-3">
              <img
                src="https://www.oliverwyman.com/content/dam/oliver-wyman/v2/home-page/2022/nov/inflation-shift-1x1.jpg.imgixg.smallTileV3.jpg"
                className="img-fluid"
                alt="..."
                width={"100%"}
              />
            </div>

            <div className="col-md-8 my-3">
              <img
                src="https://www.oliverwyman.com/content/dam/oliver-wyman/v2/home-page/2022/nov/changing-the-way-we-think-about-ai-2x1.jpg.imgixg.wideTileV3.jpg"
                className="img-fluid"
                alt="..."
                width={"100%"}
              />
            </div>
          </div>
        </div>

        {/* =============== row four =============================================== */}
        <div className="container">
          <div className="row">
            <div className="col-md-4 my-3">
              <img
                src="https://www.oliverwyman.com/content/dam/oliver-wyman/v2/home-page/2022/nov/ow-in-the-seramount-global-inclusion-index-1x1.jpg.imgixg.smallTileV3.jpg"
                className="img-fluid"
                alt="..."
                width={"100%"}
              />
            </div>

            <div className="dark-blue col-md-4 my-3" width={"100%"}></div>

            <div className="col-md-4 my-3">
              <img
                src="https://www.oliverwyman.com/content/dam/oliver-wyman/v2/home-page/2021/aug/ow-forum-background-1x1.jpg.imgixg.smallTileV3.jpg"
                className="img-fluid"
                alt="..."
                width={"100%"}
              />
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="header-title row">
              <h3>Meet our people</h3>
            </div>
          </div>
          {/* ======================================== card one ========================================= */}
          <div className="contanier-fluid peoples">

            <div className="container">
              <div className="card" >
                <img src="https://www.oliverwyman.com/content/dam/oliver-wyman/v3/portraits/rianna-smith/rianna-smith-oliver-wyman-460x460.jpg.imgixg.profileBig.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Rianna Smith</h5>
                  <p className="card-text">Associate</p>
                </div>
              </div>
            </div>
            {/* ======================================== card two ========================================= */}
            <div className="container">
              <div className="card" >
                <img src="https://www.oliverwyman.com/content/dam/oliver-wyman/v3/portraits/syed-jafri/syed-jafri-oliver-wyman-460.jpg.imgixg.profileBig.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Syed Jafir</h5>
                  <p className="card-text">Partner</p>
                </div>
              </div>
            </div>
            {/* ======================================== card three ========================================= */}
            <div className="container">
              <div className="card" >
                <img src="https://www.oliverwyman.com/content/dam/oliver-wyman/v3/portraits/deborah-oneill/deborah-oneill-oliver-wyman-460.png.imgixg.profileBig.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Deborah O'Neill</h5>
                  <p className="card-text">Partner & Head of Digital,Europe</p>
                </div>
              </div>
            </div>
            {/* ======================================== card four ========================================= */}
            <div className="container">
              <div className="card" >
                <img src="https://www.oliverwyman.com/content/dam/oliver-wyman/v3/portraits/tek-yew-chia/tek-yew-chia-oliver-wyman-460.jpg.imgixg.profileBig.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Tek Yew Chia</h5>
                  <p className="card-text">Head of Insurance,Asia-Pasific & Vice Chairman,Singapore</p>
                </div>
              </div>
            </div>
            {/* ======================================== card five ========================================= */}
            <div className="container">
              <div className="card" >
                <img src="https://www.oliverwyman.com/content/dam/oliver-wyman/v3/portraits/jessica-stansbury/jessica-stansbury-oliver-wyman-460-1.jpg.imgixg.profileBig.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Jessica Stansbury</h5>
                  <p className="card-text">Partner</p>
                </div>
              </div>
            </div>
            {/* ======================================== card three ========================================= */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
