import React from "react";
import CardCover from "./CardCover";
import "./Cards.css";
import "./SCPMockData.json";
import JSON from "./SCPMockData.json"

const SCP = JSON.map (
(scp) =>
{
  return (
    <div>
    <div key={scp.id} className="cards">
      <br></br>
      <br></br>
      <div className="cards__container">
        <div className="cards_wrapper">
          <ul className="cards__items">
           
          <CardCover
              src={scp.image}
              heading="Containment Procedures"
              text= {scp.containment_procedures}
              headingtwo="Description"
              texttwo= {scp.description}
              label={scp.object_class}
              path='/SCP_Safe'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}
);

function CardsSafe() {
  return(
    <div>
      {SCP}
    </div>
  )
}

export default CardsSafe;