import express from 'express'
import {registerPatient,registerPractitioner,registerAdmin,loginPatient,loginPractitioner,loginAdmin} from '../controllers/userController.js'

const userRouter = express.Router()

// for patient
userRouter.post('/patient/register',registerPatient)
userRouter.post('/patient/login',loginPatient)

// for practitioner 
userRouter.post('/practitioner/register',registerPractitioner)
userRouter.post('/practitioner/login',loginPractitioner)

// for admin 
userRouter.post('/admin/register',registerAdmin)
userRouter.post('/admin/login',loginAdmin)

export default userRouter
