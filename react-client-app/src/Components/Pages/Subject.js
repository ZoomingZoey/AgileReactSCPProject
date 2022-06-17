import { useState, useEffect } from "react";
import { getMediaPath, removeItemStringPrefix } from "../../lib/helpers";
import { useParams } from "react-router-dom";
import Footer from "../Footer";

const Subject = () => {

  const [subject, setSubject] = useState(null);
  const { item } = useParams();

  useEffect(() => {
    fetch(`/api/scps/${removeItemStringPrefix(item)}`)
      .then(res => res.json())
      .then(data => setSubject(data));
  }, []);

  return (
    <div>
      {subject !== null &&
        <div className="cards">
          <h4>{subject.item} - {subject.name}</h4>
          <br/>
          <br/>
          <div className="cards_container">
            <div className="cards_wrapper">
              <ul className="cards_items">
          <h3><strong>Item#: </strong>{subject.item}</h3>
          <h2><strong>Object Class: </strong>{subject.object_class}</h2>
          <br/>
          <h2><i>Special Containment Procedures: </i></h2>
          <p>{subject.containment_procedures ? subject.containment_procedures : 'No procedures provided'}</p>
          <br></br>
          <p><strong><i>Description:</i></strong>  {subject.description}</p>
          <div>
            <br></br>
            <br></br>
            {subject.images &&
              subject.images.map(image => (
                <figure key={image._id}>
                  <img src={getMediaPath(image.url)} title={subject.item} alt={image.caption}/>
                  <figcaption><i>{image.caption}</i></figcaption>
                </figure>
              ))
            }
             </div>
             </ul>
            </div>
          </div>
        </div>
      }
      <Footer />
    </div>
  );
}
 
export default Subject;