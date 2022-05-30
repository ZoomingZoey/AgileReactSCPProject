import React from "react";
import "./SCPCards.css";
import JSON from "./SCPMockData.json"
import CardCoverSCP from "./CardCoverSCP";

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
              image= {scp.image}
              title= {scp.name}
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

function CardEuclid() {
  return(
    <div>
      {SCP}
    </div>
  )
}

export default CardEuclid;