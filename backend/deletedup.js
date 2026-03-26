import mongoose from "mongoose";
import { User } from "./models/userSchema.js";
import dotenv from "dotenv";

dotenv.config({ path: "./config/config.env" });

async function deleteDuplicates() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "Hospital_Management_System",
    });
    console.log("Connected to database");

    const duplicates = await User.find({
      firstName: "Mari",
      lastName: "Lewis",
      role: "Doctor",
    });

    console.log(`Found ${duplicates.length} Mari Lewis entries`);

    if (duplicates.length > 1) {
      const toDelete = duplicates.slice(1); // Keep first, delete rest
      const deleteIds = toDelete.map((d) => d._id);

      const result = await User.deleteMany({ _id: { $in: deleteIds } });
      console.log(`Deleted ${result.deletedCount} duplicate entries`);
    }

    await mongoose.connection.close();
    console.log("Done!");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

deleteDuplicates();
