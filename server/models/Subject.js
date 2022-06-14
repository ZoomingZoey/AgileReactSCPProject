const mongoose = require('mongoose');

const imageSchema = mongoose.Schema({
  url: {
    type: String,
    required: true
  },
  caption: {
    type: String,
    required: false
  },
});

const subjectSchema = mongoose.Schema({
  item: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  object_class: {
    type: String,
    required: true,
    validate: {
      validator: v => ['Safe', 'Euclid', 'Keter', 'Thaumiel', 'Apollyon'].includes(v),
      message: props => `${props.value} is not a valid object class`,
    },
  },
  containment_procedures: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  images: [imageSchema]
});

module.exports = mongoose.model('Subjects', subjectSchema);