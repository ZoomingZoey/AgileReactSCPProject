import { useState, useEffect } from 'react';
import ListSubjectCards from '../ListSubjectCards';
import Footer from '../Footer';

function SCPThaumiel () {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch('/api/scps')
      .then(res => res.json())
      .then(data => setSubjects(data));
  }, []);

    return (
        <div>
          <h1 style={{marginTop: '3.5rem'}}>All Thaumiel Subjects</h1>
          <h3 style={{marginTop: '1rem', textAlign: 'center'}}>Click on a subject entry to view more information</h3>
          <ListSubjectCards subjects={subjects.filter(v => v.object_class === 'Thaumiel')} /> 
          <Footer/>
        </div>
    );
}

export default SCPThaumiel;