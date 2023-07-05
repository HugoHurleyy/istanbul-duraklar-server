import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const port = process.env.PORT || 3001;

mongoose
  .connect(process.env.MONGO_URI, { dbName: "duraklar" })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log("Connected  DB");
    app.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log(err);
  });
