import mongoose from 'mongoose';
import userSchema from '../models/User';

const User = mongoose.model('User', userSchema);

const addNewUser = (req, res) => {
  const newUser = new User({ userName: req.body.username });
  newUser
    .save()
    .then(() => res.json(newUser))
    .catch(() => res.send('User already exists!'));
};

export default addNewUser;
