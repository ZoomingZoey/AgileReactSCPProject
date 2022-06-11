import React from "react";
import CardCoverSCP from "./CardCoverSCP";
import "./SCPCards.css";
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
                   
          <CardCoverSCP
              src={scp.image}
              title={scp.name}
              item={scp.item}
              heading="Containment Procedures"
              text= {scp.containment_procedures}
              headingtwo="Description"
              texttwo= {scp.description}
              label={scp.item}
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