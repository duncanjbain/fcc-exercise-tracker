import mongoose from 'mongoose';
import userSchema from '../models/User';

const User = mongoose.model('User', userSchema);

const logExercise = (req, res) => {
  console.log(req.body);
  User.findOneAndUpdate(
    { _id: req.body.userId },
    {
      $push: { exerciseLog: req.body },
      $inc: { count: 1 },
    },
    (error, documents) =>
      documents
        ? res.json(req.body)
        : res.send('The user you are trying to update does not exist')
  );
};

export default logExercise;
