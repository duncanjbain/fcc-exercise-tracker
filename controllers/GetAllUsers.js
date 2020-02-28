import mongoose from 'mongoose';
import userSchema from '../models/User';

const User = mongoose.model('User', userSchema);

const getAllUsers = (req, res) => {
  User.find({}, (err, documents) => res.json(documents)).select({_id: 0 });
};

export default getAllUsers;
