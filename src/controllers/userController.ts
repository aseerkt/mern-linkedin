import { Request, Response } from 'express';
import { User } from '../models/User';

export const registerUser = async (req: Request, res: Response) => {
  const { fullName, email, username, password } = req.body;
  try {
    const user = new User({
      fullName,
      email,
      username,
      password,
    });
    await user.save();
    return res.json({
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        username: user.username,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ errors: [{ location: 'unknow', msg: 'Server Error' }] });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return { errors: [{ param: 'email', msg: 'Email is not registered' }] };
  }
};
