import mongoose from 'mongoose';
import userSchema from '../models/User';

const User = mongoose.model('User', userSchema);

const addNewUser = (req, res) => {
  const newUser = new User(req.body);
  newUser
    .save()
    .then(() => res.json(newUser))
    .catch(() => res.send('User already exists!'));
};

export default addNewUser;
