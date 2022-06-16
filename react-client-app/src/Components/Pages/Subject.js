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
        <div>
          <h1>{subject.item} - {subject.name}</h1>
          <br/>
          <br/>
          <p><strong>Item#: </strong>{subject.item}</p>
          <br/>
          <p><strong>Object Class: </strong>{subject.object_class}</p>
          <br/>
          <br/>
          <p><strong>Special Containment Procedures: </strong><br/>{subject.containment_procedures ? subject.containment_procedures : 'No procedures provided'}</p>
          <p><strong>Description: </strong>{subject.description}</p>
          <div>
            {subject.images &&
              subject.images.map(image => (
                <figure key={image._id}>
                  <img src={getMediaPath(image.url)} title={subject.item} alt={image.caption}/>
                  <figcaption>{image.caption}</figcaption>
                </figure>
              ))
            }
          </div>
        </div>
      }
      <Footer />
    </div>
  );
}
 
export default Subject;