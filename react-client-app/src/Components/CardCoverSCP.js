import React from "react";
import { Link } from "react-router-dom";



function CardCoverSCP(props) {

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
          <h4 className="cards_item_scp_title">{props.title}</h4>
          <br></br>
          <br></br>
            <h2 className="cards_item_scp_heading">{props.heading}</h2>
            <h5 className="cards__item__text">{props.text}</h5>
            <br></br>
            {
              /*
              Commenting out the subject description here as some descriptions are very long and make the page scrolling too long.
              It will still appear on the individual subject page though.

              <h2 className="cards_item_headingtwo">{props.headingtwo}</h2>
              <h5 className="cards__item__text">{props.texttwo}</h5>
              */
            }
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardCoverSCP;