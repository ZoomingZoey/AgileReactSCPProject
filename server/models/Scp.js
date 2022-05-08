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

const scpSchema = mongoose.Schema({
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
      validator: v => ['safe', 'euclid', 'keter', 'thaumiel', 'apollyon'].includes(v.toLowerCase()),
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
  image: {
    type: imageSchema,
    required: false
  }
});

module.exports = mongoose.model('Scp', scpSchema);