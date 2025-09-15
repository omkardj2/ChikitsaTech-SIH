import patientModel from "../models/patientModel.js";
import practitionerModel from "../models/practitionerModel.js";
import adminModel from "../models/adminModel.js";

import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// for patient

export const registerPatient = async (req, res) => {
  try {
    const { name, email, password, age, gender, phone } = req.body;

    const exists = await patientModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    if (!email.includes("@")) {
      return res.json({ success: false, message: "invalid email address" });
    }

    if (!password || password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be 8+ characters",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newPatient = new patientModel({
      name,
      email,
      password: hashedPassword,
      age,
      gender,
      contact: { phone },
    });
    const patient = await newPatient.save();
    const token = createToken(patient._id, "patient");

    res.json({ success: true, token, role: "patient", patient });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
// patient login

export const loginPatient = async (req, res) => {
  try {
    const { email, password } = req.body;
    const patient = await patientModel.findOne({ email });
    if (!patient) {
      return res.json({ success: false, messsage: "Patient not found" });
    }
    const isMatch = await bcrypt.compare(password, patient.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
    const token = createToken(patient._id, "patient");

    res.json({
      success: true,
      token,
      role: "patient",
      patient: { id: patient._id, name: patient.name, email: patient.email },
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// practitioner register

export const registerPractitioner = async (req, res) => {
  try {
    const { name, email, password, gender, specialization, phone } = req.body;

    const exists = await practitionerModel.findOne({ email });

    if (exists) {
      res.json({ success: false, message: "Practitioner already exists" });
    }

    if (!email.includes("@")) {
      return res.json({ success: false, message: "invalid email address" });
    }

    if (!password || password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be 8+ characters",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newPractitioner = new practitionerModel({
      name,
      email,
      password: hashedPassword,
      specialization,
      gender,
      contact: { phone },
    });

    const practitioner = await newPractitioner.save();
    const token = createToken(practitioner._id, "practitioner");

    res.json({ success: true, token, role: "practitioner", practitioner });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// practitioner login

export const loginPractitioner = async (req, res) => {
  try {
    const { email, password } = req.body;
    const practitioner = await practitionerModel.findOne({ email });
    if (!practitioner) {
      return res.json({ success: false, messsage: "Practitioner not found" });
    }
    const isMatch = await bcrypt.compare(password, practitioner.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Credentials" });
    }
    const token = createToken(practitioner._id, "practitioner");

    res.json({
      success: true,
      token,
      role: "practitioner",
      practitioner: {
        id: practitioner._id,
        name: practitioner.name,
        email: practitioner.email,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// admin register
export const registerAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const exists = await adminModel.findOne({ email });

    if (exists) {
      return res.json({ success: false, message: "user already exists" });
    }

    if (!email.includes("@")) {
      return res.json({ success: false, message: "invalid email address" });
    }

    if (!password || password.length < 8) {
      return res.json({
        success: false,
        message: "Password must be 8+ characters",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAdmin = new adminModel({
      name,
      email,
      password: hashedPassword,
      role,
    });

    const admin = await newAdmin.save();
    const token = createToken(admin._id, "admin");

    res.json({ success: true, token, role: "admin", admin });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// admin login

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await adminModel.findOne({ email });
    if (!admin) {
      return res.json({ success: false, message: "Admin not found" });
    }
    if (!password || !admin.password) {
      return res
        .status(400)
        .json({ success: false, message: "Password missing" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid credentials" });
    }

    const token = createToken(admin._id, "admin");

    res.json({
      success: true,
      token,
      role: "admin",
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};
