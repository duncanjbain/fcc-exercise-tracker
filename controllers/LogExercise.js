import mongoose from 'mongoose';
import userSchema from '../models/User';

const User = mongoose.model('User', userSchema);

const logExercise = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.body.id },
    {
      $push: { log: req.body },
      $inc: { count: 1 },
    },
    (error, documents) =>
      documents
        ? res.json(req.body)
        : res.send('The user you are trying to update does not exist')
  );
};

export default logExercise;
