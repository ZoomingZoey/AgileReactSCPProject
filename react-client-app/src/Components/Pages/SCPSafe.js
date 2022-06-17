import { useState, useEffect } from 'react';
import ListSubjectCards from '../ListSubjectCards';
import Footer from '../Footer';

function SCPSafe () {
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

    return (
        <div>
          <h1 style={{marginTop: '3.5rem'}}>All Safe Subjects</h1>
          <h3 style={{marginTop: '1rem', textAlign: 'center'}}>Click on a subject entry to view more information</h3>
          <ListSubjectCards subjects={subjects.filter(v => v.object_class === 'Safe')} />
          <Footer/>
        </div>
    );
}

export default SCPSafe;