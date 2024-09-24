const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
      unique: true,
    },
    year: {
      type: Number,
      required: true,
    },
    batch: String,
    department: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty'],
      default: 'student',
    },
    Mentor: {
      type: Schema.Types.ObjectId,
      ref: 'User',  
    },
  },
  {
    timestamps: true, 
  }
);

module.exports = mongoose.model('User', userSchema);
