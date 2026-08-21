// import mongoose, { Schema } from "mongoose";


// const PrescriptionSchema = new Schema(
//   {
//     doctorId: {
//       type: Schema.Types.ObjectId,
//       ref: "Doctor",
//       required: true,
//     },

//     patientId: {
//       type: Schema.Types.ObjectId,
//       ref: "Patient",
//       required: true,
//     },

//     appointmentId: {
//       type: Schema.Types.ObjectId,
//       ref: "Appointment",
//       required: true,
//     },

//     diagnosis: {
//       type: String,
//       trim: true,
//     },

//     medicines: [
//       {
//         name: {
//           type: String,
//           required: true,
//           trim: true,
//         },

//         dosage: {
//           type: String,
//           required: true,
//           trim: true,
//         },

//         frequency: {
//           type: String,
//           required: true,
//           trim: true,
//         },

//         duration: {
//           type: String,
//           required: true,
//           trim: true,
//         },

//         tracking: [
//           {
//             date: {
//               type: Date,
//               required: true,
//             },

//             scheduleTime: {
//               type: String,
//               required: true,
//             },

//             status: {
//               type: String,
//               enum: ["taken", "missed"],
//               required: true,
//             },
//           },
//         ],
//       },
//     ],

//     notes: {
//       type: String,
//       trim: true,
//     },

//     followUpDate: {
//       type: Date,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// const Prescription = mongoose.models.Prescription || mongoose.model("Prescription", PrescriptionSchema);

// export default Prescription;