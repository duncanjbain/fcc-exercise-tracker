import mongoose from 'mongoose';

const { Schema } = mongoose;

const exerciseSchema = new Schema({
  exerciseDescription: String,
  exerciseDuration: Number,
  exerciseDate: {
    type: Date,
    default: Date.now,
  },
});

export default exerciseSchema;
