import Photo from "../../assets/photo.png";
import Gallery from "../../assets/gallery.png";
import Logo from "../../assets/pixagram_logo.svg";
import Move from "../../assets/move-selector.png";
import Camera from "../../assets/camera-shutter.png";

import "./Loginpage.scss";
import LoginForm from "../../components/login-form/LoginForm";

const Loginpage = () => {
  return (
    <main className="login">
      <section className="graphics">
        <p className="logo">
          <img src={Logo} alt="Pixagram Logo" />
          Pixagram
        </p>

        <p className="headline">
          Welcome to Pixagram!
          <br />
          Log in to start sharing and exploring your photos.
        </p>

        <div className="graph">
          <img className="camera" src={Camera} alt="Camera Icon" />
          <img className="camera2" src={Camera} alt="Camera Icon" />
          <img className="gallery" src={Gallery} alt="Gallery Icon" />
          <img className="photo" src={Photo} alt="Photo Icon" />
          <img className="move" src={Move} alt="Move Icon" />
        </div>
      </section>
      <section className="form">
        <LoginForm />
      </section>
    </main>
  );
};

export default Loginpage;
