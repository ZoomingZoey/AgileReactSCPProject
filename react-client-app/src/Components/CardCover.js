import React from "react";
import { Link } from "react-router-dom";

function CardCover(props) {
  return (
    <>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt="SCP"
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h2 className="cards_item_heading">{props.heading}</h2>
            <h5 className="cards__item__text">{props.text}</h5>
            <h2 className="cards_item_headingtwo">{props.headingtwo}</h2>
            <h5 className="cards__item__text">{props.texttwo}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardCover;