// import the mongoose Scp model
const Scp = require('../models/Scp');

// service to query all scp subjects from mongoose
// the first argument to the mongoose find method is the field(s) and value of that field to query for, which is not being used here
// the second specifes the fields to include or exclude in the data response. 1 means include, 0 means exclude
const findAllSubjects = async () => {
  const subjects = await Scp.find({}, { _id: 0, __v: 0 });
  return subjects;
}

// service to query a single scp subject from mongoose by its item value
const findOneSubject = async (item) => {
  const subject = Scp.findOne({item: `SCP-${item}`}, { _id: 0, __v: 0 });
  return subject;
}

module.exports = {
  findAllSubjects,
  findOneSubject
}