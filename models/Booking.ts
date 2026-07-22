import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    contactNumber: {
      type: String,
      required: [true, "Please provide a contact number"],
    },
    date: {
      type: String,
      required: [true, "Please provide a date"],
    },
    optionalContact: {
      type: String,
      default: "",
    },
    message: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent re-compilation in development
export default mongoose.models.Booking ||
  mongoose.model("Booking", BookingSchema);
