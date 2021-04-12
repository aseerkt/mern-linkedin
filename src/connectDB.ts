import { connect } from 'mongoose';

export const connectDB = async () => {
  try {
    await connect(process.env.MONGO_URI!, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log(`Connected to MongoDB`.yellow.bold);
  } catch (err) {
    console.error(`MongoDB Connection Failed: ${err.message}`.red.bold);
  }
};
