import { useState, useEffect } from "react";
import { getMediaPath, removeItemStringPrefix } from "../../lib/helpers";
import { useParams } from "react-router-dom";
import Footer from "../Footer";
import MarkdownIt from "markdown-it";

const Subject = () => {

  const [subject, setSubject] = useState(null);
  const { item } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`/api/scps/${removeItemStringPrefix(item)}`);
        if (res.ok) {
          const data = await res.json();
          setSubject(data);
        }
      } catch(e) {
        console.log('error getting data')
      }
    }
    fetchData();
  }, []);

  const md = new MarkdownIt();

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
                <h2><strong>Item#: </strong>{subject.item}</h2>
                <h2><strong>Object Class: </strong>{subject.object_class}</h2>
                <br/>
                <h2><i>Special Containment Procedures:</i></h2>
                <p>{subject.containment_procedures ? subject.containment_procedures : 'No procedures provided'}</p>
                <div>
                  {subject.images &&
                    <>
                      <br></br>
                      <br></br>
                      {subject.images.map(image => (
                        <figure key={image._id} className='subject-image'>
                          <img className="image-fluid" src={getMediaPath(image.url)} title={subject.item} alt={image.caption}/>
                          <figcaption><i>{image.caption}</i></figcaption>
                        </figure>
                      ))}
                    </>
                  }
                </div>
                <br/>
                <h2><strong><i>Description:</i></strong></h2>
                <section dangerouslySetInnerHTML={{ __html: md.render(subject.description)}}></section>
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