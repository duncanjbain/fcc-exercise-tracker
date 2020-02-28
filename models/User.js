import mongoose from 'mongoose';
import shortid from 'shortid';
import exerciseSchema from './Exercise';

const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: String,
    default: shortid.generate,
  },
  userName: {
    type: String,
    required: true,
  },
  count: {
    type: Number,
    default: 0,
  },
  exerciseLog: [exerciseSchema],
});

export default userSchema;
