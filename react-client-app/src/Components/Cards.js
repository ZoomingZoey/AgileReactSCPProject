import React from "react";
import CardCover from "./CardCover";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>“Make your choice, adventurous stranger!</h1>
      <br></br>
      <br></br>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
          <CardCover
              src='images/SafePic.jpg'
              text='100% Safe SCP Approved'
              label='Safe'
              path='/SCP_Safe'
            />
            <CardCover
              src='images/SCPEuclid.jpg'
              text='Euclid is assigned to SCPs whose behavior cannot be unerringly predicted.'
              label='Euclid'
              path='/SCP_Euclid'
            />
            <CardCover
              src='images/KeterPic.jpg'
              text='Keter scps are very difficult to contain or havent yet been contained'
              label='Keter'
              path='/SCP_Keter'
            />
            <CardCover
              src='images/Thaumiel_SCP.jpg'
              text='Keter scps are very difficult to contain or havent yet been contained'
              label='Keter'
              path='/SCP_Keter'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;