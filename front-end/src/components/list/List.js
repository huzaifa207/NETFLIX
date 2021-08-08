import { useRef, useState } from "react";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";

import ListItem from "../listItem/ListItem";

import "./list.scss";

const List = ({ title }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const listRef = useRef();

  let handleClick = (direction) => {
    setIsScrolled(true);
    let distance = listRef.current.getBoundingClientRect().x - 50;

    if (direction === "left" && slideNumber > 0) {
      setSlideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${distance + 250 * 5}px)`;
    } else if (direction === "right" && slideNumber < 7) {
      setSlideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${distance - 250 * 5}px)`;
    }
  };

  let itemList = Array(40)
    .fill(0)
    .map(() => <ListItem />);
  return (
    <div className="list">
      <span className="list-title">{title}test</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="slider-arrow left"
          onClick={() => handleClick("left")}
          style={{ display: !isScrolled && "none" }}
        />
        <div className="container" ref={listRef}>
          {itemList}
        </div>
        <ArrowForwardIosOutlined
          className="slider-arrow right"
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
