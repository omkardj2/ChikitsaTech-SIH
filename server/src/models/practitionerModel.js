import Mongoose from 'mongoose'

const practitionerSchema = new Mongoose.Schema(
  {
    practitionerId: {
      type: String,
      required: true,
      unique: true,
      default: () => `PAT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    },
    email: { type: String ,required:true},
    password: { type: String, required: true },
    name: { type: String, required: true },
    gender: { type: String, required: true },
    specialization: { type: [String], required: true },
    experience: {
      years: {
        type: Number,
        default: 0,
      },
      certifications: [String],
    },
    contact: {
      phone: { type: String, required: true },
      address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
      },
    },
    schedule: [
      {
        date: Date,
        sessions: [
          {
            patientId: String,
            patientName: String,
            therapy: String,
            time: String,
            status: {
              type: String,
              enum: ["Scheduled", "Ongoing", "Completed", "Cancelled"],
              default: "Scheduled",
            },
          },
        ],
      },
    ],
    notifications: [
      {
        message: String,
        date: { type: Date, default: Date.now },
        read: { type: Boolean, default: false },
      },
    ],
    feedbackReceived: [
      {
        patientId: String,
        patientName: String,
        sessionsId: String,
        rating: { type: Number, min: 1, max: 5 },
        comments: String,
        date: { type: Date, default: Date.now },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const practitionerModel = Mongoose.models.practitioner || Mongoose.model("practitioner",practitionerSchema)

export default practitionerModel