import { useAuth } from "../../store/auth";

import SearchBox from "../search-box/SearchBox";
import Cover from "../../assets/cover.jpg";

import "./Headline.scss";

const Headline = () => {
  const theme = useAuth((state) => state.theme);
  return (
    <section
      className="headline"
      style={{
        backgroundImage: `url(${Cover})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={theme.toLowerCase()}>
        <h1>Relive your photographs with Pixagram</h1>
        <h2>Search and organize your memories by dragging</h2>
        <div>
          <SearchBox />
        </div>
      </div>
    </section>
  );
};

export default Headline;
