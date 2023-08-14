import "./App.css";

import Navigation_Component from "./Components/Navigation_Component/index";
// import Cards_Component from './Components/Cards_Component/index';

function App() {
  return (
    <div className="container">
      <div className="header">
        <div className="title">list social card</div>
      </div>
      <Navigation_Component />

      <div className="cards">
        <div className="crad-item">
          <div className="item">
            <div className="avata">
              <img src="./images/avt_person.svg" alt="a" />
            </div>
            <div className="name-date">
              <div className="name">Berry</div>
              <div className="date">14/07/2023</div>
            </div>
            <div className="icon-ED">
              <div className="icon-edit">
                <img src="./images/icon_edit.svg" alt="" />
              </div>
              <div className="icon-delete">
                <img src="./images/icon_delete.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="sub-title">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
          <div className="image">
            <img src="./images/img_cat.svg" alt="image" />
          </div>
        </div>
        <div className="crad-item">
          <div className="item">
            <div className="avata">
              <img src="./images/avt_veren.svg" alt="a" />
            </div>
            <div className="name-date">
              <div className="name">Veren</div>
              <div className="date">14/07/2023</div>
            </div>
            <div className="icon-ED">
              <div className="icon-edit">
                <img src="./images/icon_edit.svg" alt="" />
              </div>
              <div className="icon-delete">
                <img src="./images/icon_delete.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="sub-title">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
          <div className="image">
            <img src="./images/img_baby.svg" alt="image" />
          </div>
        </div>
        <div className="crad-item">
          <div className="item">
            <div className="avata">
              <img src="./images/avt_mio.svg" alt="a" />
            </div>
            <div className="name-date">
              <div className="name">Mio</div>
              <div className="date">14/07/2023</div>
            </div>
            <div className="icon-ED">
              <div className="icon-edit">
                <img src="./images/icon_edit.svg" alt="" />
              </div>
              <div className="icon-delete">
                <img src="./images/icon_delete.svg" alt="" />
              </div>
            </div>
          </div>
          <div className="sub-title">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </div>
          <div className="image">
            <img src="./images/img_elephant.svg" alt="image" />
          </div>
        </div>
      </div>

      <div className="no-data">
        <img src="./images/img_nodata.svg" alt="" />
        <div className="no-result">no result found</div>
        <div className="no-content">
          No content matched your criteria. Try searching for something else.
        </div>
      </div>
    </div>
  );
}

export default App;
