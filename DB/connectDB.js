import mongoose from "mongoose";
export const connetedBD = async () => {
  await mongoose
    // .connect("mongodb://127.0.0.1:27017/movies")
    .connect(
      "mongodb+srv://atfbdallh147:FK8cMc0BvkxSIWh5@cluster0.moffomu.mongodb.net/moive?retryWrites=true&w=majority"
    )
    .then(console.log("DB connected Successfully"))
    .catch((error) => {
      console.log("Error", error);
    });
};
