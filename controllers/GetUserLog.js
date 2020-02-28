import mongoose from 'mongoose';
import userSchema from '../models/User';

const User = mongoose.model('User', userSchema);

const getUserLog = (req, res) => {
  const { userId } = req.params;
  const { from, to, limit } = req.query;

  const fromFilter = (currentDate, fromDate) =>
    fromDate ? Date.parse(currentDate) > Date.parse(fromDate) : currentDate;

  const toFilter = (currentDate, toDate) =>
    toDate ? Date.parse(currentDate) < Date.parse(toDate) : currentDate;

  User.findById(userId).then(user => {
    console.log(user);
    const exerciseLog = user.exerciseLog
      .filter(log => fromFilter(log.date, from))
      .filter(log => toFilter(log.date, to));
      console.log(exerciseLog);
    if (limit && limit < exerciseLog.length) {
      exerciseLog.length = limit;
      res.send(exerciseLog);
    } else {
      res.send(exerciseLog);
    }
  });
};

export default getUserLog;
