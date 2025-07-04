// import mongoose from "mongoose";

// const MONGO_URI = process.env.MONGO_URI as string;

// if (!MONGO_URI) {
//   throw new Error("Please define the MMONGO_URI environment variable");
// }

// export const connectDB = async () => {
//   try {
//     if (mongoose.connection.readyState >= 1) {
//       // Already connected
//       return mongoose.connection.asPromise();
//     }
//     await mongoose.connect(MONGO_URI);
//     console.log("MongoDB connected successfully");
//     return mongoose.connection;
//   } catch (err) {
//     if (err instanceof Error) {
//       console.error("An error occurred:", err.message);
//       throw err;
//     } else {
//       console.error("An error occurred:", err);
//       throw err;
//     }
//   }
// };