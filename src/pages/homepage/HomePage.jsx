import { useAuth } from "../../store/auth";
import { Navigate } from "react-router-dom";

import Footer from "../../globals/footer/Footer";
import Header from "../../globals/header/Header";

import "./Homepage.scss";
import Headline from "../../components/headline/Headline";
import Gallery from "../../components/gallery/Gallery";

const Homepage = () => {
  const theme = useAuth((state) => state.theme);
  const isAuthenticated = useAuth((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div id="home" className={theme.toLowerCase()}>
      <Header />
      <main className="home">
        <Headline />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
