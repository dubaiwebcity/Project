import mongoose from "mongoose";

const AppointmentARSchema = new mongoose.Schema(
  {
    branch: String,
    name: String,
    email: String,
    mobile: String,
    interest: String,
    doctor: String,
    isForYou: String,
    nationality: String,
    countryOfResidence: String,
    cityIfInSA: String,
    gender: String,
    preferredDate: String,
    preferredTime: String,
    howHeard: String,
    language: String, // optional
  },
  { timestamps: true }
);

const AppointmentAR = mongoose.models.AppointmentAR || mongoose.model("AppointmentAR", AppointmentARSchema);
export default AppointmentAR;
