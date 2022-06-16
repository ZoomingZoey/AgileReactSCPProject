import { useState, useEffect } from "react";
import CardCover from "./CardCover";
import "./Cards.css";
import { getRandomSubjectImageURL, getMediaPath } from "../lib/helpers";

function Cards() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch('/api/scps')
      .then(res => res.json())
      .then(data => setSubjects(data));
  }, []);

  const imageSafeURL = getRandomSubjectImageURL(subjects, 'Safe');
  const imageEuclidURL = getRandomSubjectImageURL(subjects, 'Euclid');
  const imageKeterURL = getRandomSubjectImageURL(subjects, 'Keter');
  const imageThaumielURL = getRandomSubjectImageURL(subjects, 'Thaumiel');

  return (
    <>
      {subjects.length > 0 &&
        <div className="cards">
          <h1>Make your choice, adventurous stranger!</h1>
          <br></br>
          <br></br>
          <div className="cards__container">
            <div className="cards_wrapper">
              <ul className="cards__items">
              <CardCover
                  src={getMediaPath(imageSafeURL)}
                  text='100% Safe, SCP Approved.'
                  label='Safe'
                  path='/SCP_Safe'
                />
                <CardCover
                  src={getMediaPath(imageEuclidURL)}
                  text='Euclid is assigned to SCPs whose behavior cannot be unerringly predicted.'
                  label='Euclid'
                  path='/SCP_Euclid'
                />
                <CardCover
                  src={getMediaPath(imageKeterURL)}
                  text='Keter scps are very difficult to contain or have not yet been contained.'
                  label='Keter'
                  path='/SCP_Keter'
                />
                <CardCover
                  src={getMediaPath(imageThaumielURL)}
                  text='Thaumiel is assigned to scps that are used to contain other scp subjects.'
                  label='Thaumiel'
                  path='/SCP_Thaumiel'
                />
              </ul>
            </div>
          </div>
        </div>
      }
    </>
  );
}

export default Cards;