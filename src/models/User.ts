import mongoose, { Document } from 'mongoose';
import { hash, verify } from 'argon2';

export interface IUser extends Document {
  fullName: string;
  email: string;
  username: string;
  password: string;
  avatar: string;
}

const UserSchema = new mongoose.Schema<IUser>(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    avatar: { type: String, default: '' },
  },
  { timestamps: true }
);

UserSchema.pre<IUser>('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await hash(this.password);
  }
  return next();
});
UserSchema.methods = {
  verifyPassword: function (password: string) {
    return verify(this.password, password);
  },
};

export const User = mongoose.model<IUser>('User', UserSchema);
