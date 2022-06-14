import React from "react";
import CardCoverSCP from "./CardCoverSCP";
import "./SCPCards.css";

function ListSubjectCards({subjects}) {
  
  return(
    <div>
      {subjects.map ((subject) => {
        return (
          <div key={subject._id}>
            <div key={subject._id} className="cards">
              <br></br>
              <br></br>
              <div className="cards__container">
                <div className="cards_wrapper">
                  <ul className="cards__items">
                          
                  <CardCoverSCP
                    src={subject.images ? subject.images[0].url : 'unavailable.jpg'}
                    title={subject.name}
                    item={subject.item}
                    heading="Containment Procedures"
                    text= {subject.containment_procedures ? subject.containment_procedures : 'No procedures found'}
                    headingtwo="Description"
                    texttwo= {subject.description}
                    label={subject.item}
                    path={`/Subjects/${subject.item}`}
                  />
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default ListSubjectCards;