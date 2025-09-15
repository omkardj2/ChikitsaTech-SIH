import Mongoose from 'mongoose'

const adminSchema = new Mongoose.Schema(
  {
    adminId: {
      type: String,
      unique: true,
      required: true,
      default: () => `PAT-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["SuperAdmin", "Manager", "Support"],
      default: "Manager",
    },
    practitioners: [
      {
        practitionerId: String,
        name: String,
        specialization: [String],
        status: {
          type: String,
          enum: ["Active", "Inactive", "Suspended"],
          default: "Active",
        },
      },
    ],
    patients: [
      {
        patientId: String,
        name: String,
        contact: {
          phone: String,
          email: String,
        },
        status: {
          type: String,
          enum: ["Active", "Inactive"],
          default: "Active",
        },
      },
    ],
    notifications: [
      {
        message: String,
        audience: {
          type: String,
          enum: ["All", "Patients", "Practitioners"],
          default: "All",
        },
        date: { type: Date, default: Date.now },
      },
    ],
    activityLogs: [
      {
        action: String,
        user: String, //admin
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

const adminModel = Mongoose.models.admin || Mongoose.model('admin',adminSchema)

export default adminModel