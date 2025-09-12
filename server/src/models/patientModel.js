import Mongoose from "mongoose";

const patientSchema = new Mongoose.Schema(
  {
    name: { type: String, required: true },
    password: { type: String, required: true },
    patientId: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
    dateOfBirth: { type: Date, required: true },
    contact: {
      phone: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
      },
    },
    medicalHistory: {
      allergies: [String],
      chronicDisease: [String],
      medications: [String],
      pastTherapies: [String],
    },
    therapyPlans: [
      {
        therapyName: String,
        scheduledDate: Date,
        status: {
          type: String,
          enum: ["Scheduled", "Ongoing", "Completed", "Cancelled"],
          default: "Scheduled,",
        },
        practitioner: {
          id: String,
          name: String,
        },
        notes: String,
      },
    ],
    progress: [
      {
        date: { type: Date, degfault: Date.now() },
        symptomsBefore: [String],
        symptomsAfter: [String],
        practitionerNotes: String,
      },
    ],
    feedback: [
      {
        sessionsId: String,
        rating: { type: Number, min: 1, max: 5 },
        comments: String,
        date: { type: Date, default: Date.now() },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const patientModel =
  Mongoose.models.user || Mongoose.model("patient", patientSchema);

export default patientModel;
