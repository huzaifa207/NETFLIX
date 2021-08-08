import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import "./featured.scss";

const Featured = ({ type }) => {
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "film" ? "Films" : "Series"}</span>
          <select name="genre" id="genre">
            <option>Genre</option>
            {/* TODO: generate list of options */}
          </select>
        </div>
      )}
      <img
        src="https://upload.wikimedia.org/wikipedia/en/b/ba/TO_cast.jpeg"
        alt="featured"
      />

      <div className="info">
        <img
          src="https://occ-0-92-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABciJiylBh9c4OTSYk_FMqZGUwteRdjO5eDuZjUYMaYB5V00eXaOihCLUjmIPlmIkOkaklo9lI8rJGR4sOjtK48YnYQahL2soaOKY.png?r=ee5"
          alt=""
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio amet
          consectetur, fugit harum ex odit! Quibusdam maiores quaerat architecto
          expedita nam deserunt deleniti praesentium repellendus, nulla, quasi
          eum quo iusto?
        </span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
