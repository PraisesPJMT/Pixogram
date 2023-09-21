import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { useNotice } from "../../store/notice";
import { APP_THEME, NOTICE_TYPE } from "../../utilities/enums";
import { BiSun, BiMoon, BiMenu, BiLogOut, BiX } from "react-icons/bi";

import Logo from "../../assets/pixagram_logo.svg";
import SearchBox from "../../components/search-box/SearchBox";

import "./Header.scss";

const Header = () => {
  const [open, setOpen] = useState(false);
  const theme = useAuth((state) => state.theme);
  const toggleTheme = useAuth((state) => state.toggleTheme);
  const logout = useAuth((state) => state.logout);

  const setNotice = useNotice((state) => state.setNotice);

  return (
    <header className={`${theme.toLowerCase()}`}>
      <Link className={`logo ${theme.toLowerCase()}`}>
        <img src={Logo} alt="App Logo" />
        <span>Pixagram</span>
      </Link>

      <div className="search">
        <SearchBox />
      </div>

      <nav className={`${theme.toLowerCase()} ${open ? "open" : ""}`}>
        <button
          type="button"
          className={`mode ${theme.toLowerCase()}`}
          onClick={() => {
            toggleTheme();
            setOpen(false);
          }}
          aria-label="App theme toggle"
        >
          <span>Mode</span>
          {theme === APP_THEME.DARK ? (
            <>
              <BiSun />
            </>
          ) : (
            <>
              <BiMoon />
            </>
          )}
        </button>
        <button
          type="button"
          className={`logout ${theme.toLowerCase()}`}
          onClick={() => {
            setOpen(false);
            logout();
            setNotice({
              type: NOTICE_TYPE.SUCCESS,
              message: "Logout successful!",
            });
          }}
          aria-label="Logout"
        >
          Logout <BiLogOut />
        </button>
      </nav>

      <button
        type="button"
        className={`menu ${theme.toLowerCase()}`}
        onClick={() => setOpen(!open)}
        aria-label="App theme toggle"
      >
        {open ? <BiX /> : <BiMenu />}
      </button>
    </header>
  );
};

export default Header;
