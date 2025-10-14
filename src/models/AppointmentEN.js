import mongoose from "mongoose";

const AppointmentENSchema = new mongoose.Schema(
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
  },
  { timestamps: true }
);

const AppointmentEN = mongoose.models.AppointmentEN || mongoose.model("AppointmentEN", AppointmentENSchema);
export default AppointmentEN;
