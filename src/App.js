//import logo from './logo.svg';
//import './App.css';
import "./components/navComponent/NavbarComponent";
import "./components/bannerComponent/BannerComponent";
import NavbarComponent from "./components/navComponent/NavbarComponent";

import BannerComponent from "./components/bannerComponent/BannerComponent";
import PopupComponent from "./components/popupComponent/PopupComponent";
function App() {
  return (
    <div className="App">
      <>
        <NavbarComponent />
        <BannerComponent />
      </>
    </div>
  );
}

export default App;
