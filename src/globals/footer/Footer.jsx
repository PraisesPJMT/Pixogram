import { Link } from "react-router-dom";
import {
  BiLogoFacebookSquare,
  BiLogoLinkedinSquare,
  BiLogoTwitter,
  BiLogoMastodon,
} from "react-icons/bi";

import "./Footer.scss";
import { useAuth } from "../../store/auth";

const Footer = () => {
  const theme = useAuth((state) => state.theme);

  return (
    <footer>
      <div>
        <div className={`social ${theme.toLowerCase()}`}>
          <Link to="https://www.linkedin.com/in/praises-tula" target="_blank">
            <BiLogoLinkedinSquare />
          </Link>
          <Link to="https://twitter.com/PraisesPJMT" target="_blank">
            <BiLogoTwitter />
          </Link>
          <Link to="https://ruby.social/@pjmt" target="_blank">
            <BiLogoMastodon />
          </Link>

          <Link to="https://web.facebook.com/praises.musa" target="_blank">
            <BiLogoFacebookSquare />
          </Link>
        </div>
        <div className="copyright">© 2021 Pixagram by Praises Tula</div>
      </div>
    </footer>
  );
};

export default Footer;
