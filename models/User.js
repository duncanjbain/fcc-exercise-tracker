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

userSchema.pre('save', function doesUserExist(next) {
  const self = this;
  mongoose.models.User.findOne({ userName: self.username }, (err, user) => {
    if (!user) {
      next();
    } else {
      next(new Error('Username already exists pre middleware!'));
    }
  });
});

export default userSchema;
