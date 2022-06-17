import { useState, useEffect } from "react";
import CardCover from "./CardCover";
import "./Cards.css";
import { getRandomSubjectImageURL, getMediaPath } from "../lib/helpers";

function Cards() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/scps');
        if (res.ok) {
          const data = await res.json();
          setSubjects(data);
        }
      } catch(e) {
        console.log('error getting data')
      }
    }
    fetchData();
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
                  path='/Subjects/Safe'
                />
                <CardCover
                  src={getMediaPath(imageEuclidURL)}
                  text='Euclid is assigned to SCPs whose behavior cannot be unerringly predicted.'
                  label='Euclid'
                  path='/Subjects/Euclid'
                />
                <CardCover
                  src={getMediaPath(imageKeterURL)}
                  text='Keter scps are very difficult to contain or have not yet been contained.'
                  label='Keter'
                  path='/Subjects/Keter'
                />
                <CardCover
                  src={getMediaPath(imageThaumielURL)}
                  text='Thaumiel is assigned to scps that are used to contain other scp subjects.'
                  label='Thaumiel'
                  path='/Subjects/Thaumiel'
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