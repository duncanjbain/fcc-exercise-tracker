import mongoose from 'mongoose';
import userSchema from '../models/User';
import logExercise from './LogExercise';

const User = mongoose.model('User', userSchema);

const getUserLog = (req, res) => {
  const { userId } = req.params;
  const { from, to, limit } = req.query;

  const fromFilter = (currentDate, fromDate) =>
    fromDate ? Date.parse(currentDate) > Date.parse(fromDate) : currentDate;

  const toFilter = (currentDate, toDate) =>
    toDate ? Date.parse(currentDate) < Date.parse(toDate) : currentDate;

  User.findById(userId).then(user => {
    const exerciseLogs = user.exerciseLogs
      .filter(log => fromFilter(log.date, from))
      .filter(log => toFilter(log.date, to));

    if (limit && limit < exerciseLogs.length) {
      exerciseLogs.length = limit;
      res.send(exerciseLogs);
    } else {
      res.send(exerciseLogs)
    }
  });
};

export default getUserLog;
