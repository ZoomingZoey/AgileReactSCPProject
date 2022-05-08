// import dependencies
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
require("dotenv").config();

// import schemas
const Scp = require('./models/Scp');

// create an instance of express
const app = express();

// set the server port to either the port set by heroku or 3001
const port = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI;
mongoose.connect(uri, () => console.log('connected'));

const subjects = [
  {
    item: 'SCP-001',
    name: 'Awaiting De-classification [Blocked]',
    object_class: 'keter',
    containment_procedures: null,
    description: 'In order to prevent knowledge of SCP-001 from being leaked, several/no false SCP-001 files have been created alongside the true file/files. All files concerning the nature of SCP-001, including the decoy/decoys, are protected by a memetic kill agent designed to immediately cause cardiac arrest in any nonauthorized personnel attempting to access the file. Revealing the true nature/natures of SCP-001 to the general public is cause for execution, except as required under ████-███-██████.',
    image: null
  },
  {
    item: 'SCP-002',
    name: 'The \"Living\" Room',
    object_class: 'euclid',
    containment_procedures: 'SCP-002 is to remain connected to a suitable power supply at all times, to keep it in what appears to be a recharging mode. In case of electrical outage, the emergency barrier between the object and the facility is to be closed and the immediate area evacuated. Once facility power is re-established, alternating bursts of X-ray and ultraviolet light must strobe the area until SCP-002 is re-affixed to the power supply and returned to recharging mode. Containment area is to be kept at negative air pressure at all times.',
    description: 'SCP-002 resembles a tumorous, fleshy growth with a volume of roughly 60 m³ (or 2000 ft³). An iron valve hatch on one side leads to its interior, which appears to be a standard low-rent apartment of modest size. One wall of the room possesses a single window, though no such opening is visible from the exterior. The room contains furniture which, upon close examination, appears to be sculpted bone, woven hair, and various other biological substances produced by the human body. All matter tested thus far show independent or fragmented DNA sequences for each object in the room.',
    image: {
      url: 'scp-002.jpg',
      caption: 'SCP-002 in its containment area'
    }
  }
];

async function insertScps() {
  for (const subject of subjects) {
    try {
      const scp = await Scp.create({
        item: subject.item,
        name: subject.name,
        object_class: subject.object_class,
        containment_procedures: subject.containment_procedures,
        description: subject.description,
        image: subject.image
      });
      await scp.save();
      console.log(scp);
    } catch(e) {
      console.log(e.message);
    }
  }
}

insertScps();

// route to get all scp subjects
app.get('/api/scps', (req, res) => {
  // ...
});

// route to get a single scp subject by its item number (id) e.g: /api/scps/002
app.get('/api/scps/:item', (req, res) => {
  const { item } = req.params;
  console.log(`SCP-${item}`);
  // ...
});

// route to get an image by its filename from the /server/images directory
app.get('/api/images/:filename', (req, res) => {
  const { filename } = req.params;
  console.log(filename);
  res.sendFile(path.resolve(__dirname, './images', filename));
});

// any unhandled routes will return the react application
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../react-client-app/build', 'index.html'));
});

// tell the server to begin listening on the selected port
app.listen(port, () => console.log(`The server is listening on port ${port}`));



