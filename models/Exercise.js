import mongoose from 'mongoose';

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  description: String,
  duration: Number,
  date: {
    type: Date,
    default: Date.now,
  },
});

export default exerciseSchema;
