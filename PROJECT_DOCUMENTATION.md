# Project Documentation

## 1. Project Overview

This project is a full-stack healthcare management application built with Next.js, TypeScript, MongoDB, and Mongoose. It supports multiple user roles such as:

- Doctor
- Patient
- Hospital Admin
- Super Admin (schema present)

The system allows users to:

- Register and log in
- Book appointments
- Manage prescriptions
- Submit reviews and ratings
- Administer doctor approval and status updates
- Access role-based dashboard sections

The app follows a modular structure with routes, controllers, services, repositories, models, utilities, and UI components.

---

## 2. Tech Stack

### Frontend
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- MUI / Base UI components
- Lucide icons

### Backend
- Next.js API routes
- MongoDB Atlas / local MongoDB
- Mongoose ODM
- JWT authentication
- bcryptjs for password hashing

### Additional Libraries
- `axios`
- `zod`
- `react-hook-form`
- `date-fns`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`

---

## 3. Project Architecture

The project is structured around the MVC-inspired pattern used in Next.js route application:

- `app/` contains API routes and page routing
- `controllers/` handles request validation and response formatting
- `services/` contains business logic and orchestration
- `repositories/` handles database access and Mongo queries
- `models/` contains Mongoose schemas
- `lib/` contains shared utilities like JWT and DB connection
- `components/` contains reusable UI elements
- `context/` stores app-level state context
- `types/` contains TypeScript data interfaces

This layering keeps logic clean and separates concerns.

---

## 4. Folder Structure Summary

```text
src/
  app/
    api/
      route.ts
      appointment/
      auth/
      doctors/
      patients/
      prescriptions/
      reviews/
      hospital-admin/
      test-db/
    controllers/
    repositories/
    services/
    types/
  components/
  context/
  hooks/
  lib/
  models/
  shared/
```

### Main root files
- `src/app/page.tsx` — landing page entry
- `src/app/layout.tsx` — app shell and metadata
- `src/lib/db.ts` — MongoDB connection
- `src/lib/jwt.ts` — JWT generation and verification
- `src/context/AuthContext.tsx` — auth state handling

---

## 5. Environment Variables

The project expects these environment variables:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
```

These are used in the database connection and token generation logic.

---

## 6. Database Connection

### File: `src/lib/db.ts`

#### Function: `connectDB()`
- Creates a MongoDB connection using Mongoose.
- Reads the value from `process.env.MONGODB_URI`.
- Logs success or exits the process on failure.

**Flow:**
1. Load `.env` value
2. Call `mongoose.connect()`
3. Log connection status
4. Exit process if DB fails

**Purpose:** ensures every repository calls a consistent database connection before querying.

---

## 7. Authentication Utilities

### File: `src/lib/jwt.ts`

#### Interface: `JwtPayload`
- Contains the token payload structure.
- Current format:

```ts
interface JwtPayload {
  _id: string;
}
```

#### Function: `createToken(payload: JwtPayload): string`
- Signs a JWT with the secret from `JWT_SECRET`.
- Uses an expiry time of `1d` (one day).
- Used by login routes to create cookies for authenticated sessions.

#### Function: `verifyToken(token: string): JwtPayload`
- Verifies the token and returns the payload.
- Throws an error if the token is expired or invalid.

### File: `src/lib/auth.ts`

#### Function: `authenticateRequest(req: NextRequest): JwtPayload`
- Reads the `token` cookie from the request.
- Throws an error if no token is provided.
- Calls `verifyToken()` to confirm validity and return the decoded payload.

**This is a low-level request authenticator used for protected API routes.**

### File: `src/lib/authCheck.ts`

#### Function: `authCheck()`
- Accesses the cookie store using `cookies()` from Next.
- Reads the `token` cookie.
- Verifies it using `verifyToken()`.
- Returns the user payload or throws unauthorized/invalid token errors.

**This is mainly used by server-side route guards.**

---

## 8. Models

The project uses Mongoose schemas for all data entities.

### File: `src/models/Doctor.ts`

#### Interface: `IDoctor`
Represents the doctor entity:

- `name`
- `email`
- `password`
- `phone`
- `hospitalId`
- `specialization`
- `qualification`
- `experience`
- `consultationFee`
- `rating`
- `totalReviews`
- `role`
- `status`
- timestamps

#### Schema behavior
- Email is required, unique, lowercased
- Role defaults to `Doctor`
- Status can be `pending`, `approved`, or `rejected`
- `hospitalId` is required and references a hospital record

### File: `src/models/Patient.ts`

#### Interface: `IPatient`
Represents patient data:

- `name`
- `email`
- `password`
- `phone`
- `dateOfBirth`
- `gender`
- `address`
- `role`
- timestamps

#### Schema behavior
- Email is unique and lowercased
- Role defaults to `Patient`
- Optional personal information is stored for user profiles

### File: `src/models/Appointment.ts`

#### Interface: `IAppointment`
Represents patient-doctor meeting data:

- `doctorId`
- `patientId`
- `appointmentDate`
- `appointmentTime`
- `status`

#### Status values
- `confirmed`
- `completed`
- `cancelled`

This model links patient and doctor records, and stores appointment scheduling data.

### File: `src/models/Prescription.ts`

#### Interface: `IPrescription`
Represents a prescription record:

- `doctorId`
- `patientId`
- `appointmentId`
- `diagnosis`
- `medicines`
- `notes`
- `followUpDate`

#### Nested `IMedicine`
Each medicine includes:
- `name`
- `dosage`
- `frequency`
- `duration`
- `tracking` (optional)

#### Nested `IMedicineTracking`
Tracks each dose:
- `date`
- `scheduleTime`
- `status` (`taken` or `missed`)

### File: `src/models/FeedbackReview.ts`

#### Interface: `IFeedbackReview`
Represents patient feedback for a doctor:

- `doctorId`
- `patientId`
- `appointmentId`
- `rating`
- `comment`

#### Rating rule
- Ratings must be between `1` and `5`.

### File: `src/models/HospitalAdmin.ts`
Represents the hospital administrator record with:

- name
- email
- password
- phone
- role
- hospitalId
- timestamps

### File: `src/models/SuperAdmin.ts`
Represents an administrator with elevated permissions; likely used for platform-level oversight.

---

## 9. Repositories

Repositories handle all database-level operations.

### File: `src/app/repositories/doctor.repository.ts`

#### Function: `getAllDoctors()`
- Connects to DB
- Returns all doctors from MongoDB

#### Function: `findDoctorByEmail(email: string)`
- Checks if a doctor already exists for a given email

#### Function: `createDoctor(doctorData: CreateDoctorData)`
- Creates a new doctor entry in the database

#### Function: `getDoctorByIdRepository(id: string)`
- Finds a doctor by ID and excludes the password field

#### Function: `updateDoctorStatusRepository(id: string, status)`
- Changes a doctor status to `approved` or `rejected`
- Uses Mongoose `findByIdAndUpdate()` with validation

### File: `src/app/repositories/patient.repository.ts`

#### Function: `getAllPatients()`
- Returns all patient records

#### Function: `createPatient(patientData: CreatePatientData)`
- Creates a patient record

#### Function: `findPatientByEmail(email: string)`
- Looks up patient by email in lowercase form

#### Function: `getPatientByIdRepository(id: string)`
- Gets patient details without password

### File: `src/app/repositories/appointment.repository.ts`

#### Function: `createAppointment(appointmentData: CreateAppointmentData)`
- Creates a new appointment document

#### Function: `getAllAppointments()`
- Fetches all appointments
- Populates doctor and patient details
- Sorts by appointment date ascending

#### Function: `getAppointmentsByDoctor(doctorId: string)`
- Returns appointments specific to a doctor

#### Function: `getAppointmentsByPatient(patientId: string)`
- Returns appointments specific to a patient

### File: `src/app/repositories/prescription.repository.ts`

#### Function: `createPrescription(data)`
- Creates a prescription

#### Function: `getAllPrescriptions()`
- Retrieves all prescription records with populated doctor, patient, and appointment references

#### Function: `getPrescriptionById(id: string)`
- Fetches a single prescription by ID

#### Function: `updatePrescription(id, data)`
- Updates a prescription document

#### Function: `deletePrescription(id: string)`
- Deletes a prescription by ID

### File: `src/app/repositories/review.repository.ts`

#### Function: `createReview(reviewData)`
- Saves patient review to the database

#### Function: `findReviewByAppointment(appointmentId: string)`
- Checks whether a review already exists for an appointment

#### Function: `getAllReviewsRepository()`
- Gets all reviews with nested doctor/patient/appointment details

---

## 10. Services

Services hold the main application logic before database interactions.

### File: `src/app/services/doctor.service.ts`

#### Function: `getDoctors()`
- Returns all doctor records from the repository layer

#### Function: `registerDoctor(data: CreateDoctorData)`
- Checks if the email already exists
- Hashes the password using bcrypt
- Lowercases email
- Stores the new doctor record
- Removes password before returning user data

#### Function: `getDoctorById(id: string)`
- Fetches a doctor by ID

#### Function: `updateDoctorStatus(id: string, status)`
- Updates doctor approval or rejection status

### File: `src/app/services/patient.service.ts`

#### Function: `getPatients()`
- Returns all patients

#### Function: `registerPatient(data: CreatePatientData)`
- Checks duplicate patient email
- Hashes the password
- Saves the new patient
- Removes `password` before returning

#### Function: `getPatientById(id: string)`
- Returns patient data by ID

### File: `src/app/services/appointment.service.ts`

#### Function: `registerAppointment(data: CreateAppointmentData)`
- Creates an appointment via the repository

#### Function: `getAppointments(filters?)`
- Uses optional filters:
  - `doctorId`
  - `patientId`
- If `doctorId` is present, fetches by doctor
- If `patientId` is present, fetches by patient
- Otherwise fetches all appointments

### File: `src/app/services/prescription.service.ts`

#### Function: `registerPrescription(data: any)`
- Creates a prescription entry

#### Function: `findAllPrescriptions()`
- Returns all prescription records

#### Function: `findPrescriptionById(id: string)`
- Fetches a prescription by ID

#### Function: `editPrescription(id: string, data: any)`
- Updates prescription data

#### Function: `removePrescription(id: string)`
- Deletes a prescription

### File: `src/app/services/review.service.ts`

#### Function: `registerReview(data)`
- Saves a review entry
- Finds the doctor associated with the review
- Recalculates the average rating using old rating and total review counts
- Updates the doctor's rating and total review count

#### Function: `getReviews()`
- Fetches all reviews from the repository

---

## 11. Controllers

Controllers handle HTTP request validation and response generation.

### File: `src/app/controllers/doctor.controller.ts`

#### Function: `getDoctorsController()`
- Returns all doctors in JSON format
- Sends a success flag and record count

#### Function: `createDoctorController(req: Request)`
- Reads request body
- Validates required fields
- Calls `registerDoctor()`
- Returns success or validation failure

#### Function: `getDoctorByIdController(params)`
- Validates doctor ID
- Fetches doctor info
- Returns 404 if not found

#### Function: `updateDoctorStatusController(req, params)`
- Validates status value
- Updates doctor approval/rejection status
- Returns success JSON response

### File: `src/app/controllers/patient.controller.ts`

#### Function: `getPatientsController()`
- Fetches all patients

#### Function: `createPatientController(req: Request)`
- Validates required patient fields
- Calls `registerPatient()`
- Responds with success or error

#### Function: `getPatientByIdController(params)`
- Fetches a patient by ID and handles not-found cases

### File: `src/app/controllers/appointment.controller.ts`

#### Function: `createAppointmentController(req: NextRequest)`
- Validates presence of patient/doctor/date/time
- Converts appointment date to a `Date` object
- Creates appointment via service layer

#### Function: `getAppointmentsController(req: NextRequest)`
- Reads `doctorId` and `patientId` from query parameters
- Calls `getAppointments()` with filters
- Returns appointment list with count

### File: `src/app/controllers/prescription.controller.ts`

#### Function: `createPrescriptionController(req: Request)`
- Reads prescription body
- Validates required fields
- Calls `registerPrescription()`
- Returns a JSON response with the created prescription

### File: `src/app/controllers/review.controller.ts`

#### Function: `createReviewController(req: NextRequest)`
- Validates doctor ID, patient ID, appointment ID, and rating
- Ensures rating is between 1 and 5
- Calls `registerReview()`

#### Function: `getReviewsController(req: NextRequest)`
- Returns all reviews in JSON response

---

## 12. API Routes

### `src/app/api/route.ts`

#### Function: `GET()`
- Returns project-level health message

#### Function: `POST(req: Request)`
- Generic API route entry

### `src/app/api/doctors/route.ts`

#### Function: `GET()`
- Authenticates user through `authCheck()`
- Returns doctors fetch message if authorized
- Otherwise returns unauthorized response

#### Function: `POST(req: Request)`
- Delegates to `createDoctorController(req)`

### `src/app/api/patients/route.ts`

#### Function: `GET()`
- Calls `getPatientsController()`

#### Function: `POST(req: Request)`
- Calls `createPatientController(req)`

### `src/app/api/prescriptions/route.ts`

#### Function: `POST(req: Request)`
- Calls `createPrescriptionController(req)`

#### Function: `GET()`
- Fetches all prescriptions and returns JSON data

### `src/app/api/reviews/route.ts`

#### Function: `POST(req: NextRequest)`
- Creates a review

#### Function: `GET(req: NextRequest)`
- Fetches all reviews

### Auth routes
The following login route files exist:

- `src/app/api/auth/doctor/login/route.ts`
- `src/app/api/auth/patient/login/route.ts`
- `src/app/api/auth/hospital-admin/login/route.ts`

These routes generally follow this pattern:

1. Read request body
2. Validate email and password
3. Find user by email
4. Compare password using bcrypt
5. Generate JWT
6. Set `token` cookie
7. Return success JSON response

### Example login flow

#### `POST(req: NextRequest)` in doctor login route
- Reads incoming JSON
- Destructures `email` and `password`
- Rejects empty values
- Finds `Doctor` by email
- Uses `bcrypt.compare()` to validate password
- Creates a token using `createToken({_id: user._id.toString()})`
- Saves it in a secure HTTP-only cookie
- Returns a login success message

---

## 13. Page Structure

This project includes role-based page groups under `src/app/`:

### General pages
- `about/page.tsx`
- `support/page.tsx`
- `login/page.tsx`
- `register/patient/page.tsx`
- `register/doctor/...`

### Patient pages
- `patient/page.tsx`
- `patient/layout.tsx`
- `patient/appointments/page.tsx`
- `patient/bookAppointment/page.tsx`

### Doctor pages
- `doctor/page.tsx`
- `doctor/layout.tsx`
- `doctor/analytics/page.tsx`
- `doctor/appointments/page.tsx`
- `doctor/patients/page.tsx`

### Hospital admin pages
- `hospitalAdmin/page.tsx`
- `hospitalAdmin/layout.tsx`
- `hospitalAdmin/analytics/page.tsx`
- `hospitalAdmin/doctors/page.tsx`
- `hospitalAdmin/patients/page.tsx`

These page files represent the UI frontends for each role and dashboard.

---

## 14. Components

### Landing page components
- `LandingPageNavbar.tsx`
- `LandingPageHero.tsx`
- `LandingPageContent.tsx`
- `LandingPageFooter.tsx`

These components form the public-facing marketing and landing page.

### Auth components
- `src/components/auth/login.tsx` contains the login form logic (currently commented out in parts)
- `src/shared/LoginForm.tsx` is a reusable shared login form component

### Doctor components
- `DoctorNavbar.tsx`
- `DoctorSidebar.tsx`
- `InfoCards.tsx`
- `DailySchedule.tsx`
- `CalendarDemo.tsx`
- `LobbyQueue.tsx`
- `WeekyVolume.tsx`

These components support doctor dashboards and scheduling workflows.

### Patient components
- `PatientNavbar.tsx`
- `PatientSidebar.tsx`
- `PatientCard.tsx`
- `MedicineTracker.tsx`
- `RecentActivity.tsx`

These provide patient dashboard interactions.

### Hospital admin components
- `hospitalAdminNavbar.tsx`
- `hospitalAdminSidebar.tsx`
- `hospitalAdminCard.tsx`
- `hospitalAdminHero.tsx`

These support administration panels and stats cards.

---

## 15. Shared and Utility Files

### `src/shared/Card.tsx`
- Reusable card component for metrics and dashboard blocks
- Accepts `icon`, `quantity`, `description`, and optional `className`

### `src/shared/Sidebar.tsx`
- Generic sidebar component used for dashboard navigation

### `src/shared/LoginForm.tsx`
- Shared login form with schema validation using Zod
- Supports email and password input fields

### `src/lib/utils.ts`
- Contains `cn()` helper for merging class names with Tailwind

### `src/hooks/use-mobile.ts`
- Detects mobile screen state

### `src/context/AuthContext.tsx`
- Stores authentication state across the app
- Likely used to provide login session context to UI

---

## 16. Authentication Flow

The app uses JWT-based authentication and cookie-based session tracking.

### Typical login process
1. User submits email and password
2. Route validates fields
3. Server finds matching user record
4. Password is compared with `bcrypt.compare()`
5. JWT is created using `_id`
6. Token is stored in `token` cookie
7. Client is considered authenticated

### Typical protected access
1. Client sends request with cookie
2. `authCheck()` reads the token
3. `verifyToken()` validates and decodes it
4. The API proceeds if valid
5. Unauthorized response is returned otherwise

---

## 17. Security Considerations

This project includes several security patterns:

- Password hashing via `bcryptjs`
- HTTP-only cookies for token storage
- JWT validation before protected route access
- API validations for required fields
- Mongoose schema validation for required data types and enums

However, production security should also include:

- Role-based permission checks
- Request rate limiting
- CSRF protection if using cookies with cross-site exposure
- Input sanitization for all public endpoints
- Better error handling and audit logs

---

## 18. Data Flow Example

### Example: Doctor registration
1. Client sends `POST /api/doctors`
2. `createDoctorController()` validates field values
3. Calls `registerDoctor()` from service layer
4. Service checks duplicate email inside `findDoctorByEmail()`
5. Password is hashed with bcrypt
6. New doctor is created in MongoDB
7. Password is removed before returning response

### Example: Appointment booking
1. User sends appointment details
2. Controller checks all required fields
3. Service calls repository to create appointment
4. Appointment is returned with populated doctor and patient data

### Example: Review submission
1. Patient submits rating and comment
2. Controller validates presence and range
3. Service stores review
4. Service recalculates doctor's average rating and total reviews
5. Updated doctor rating is saved back to database

---

## 19. Important Notes

### Build and typing status
The project is built using Next.js App Router. During verification, some route-related type issues are reported for files like:

- `src/app/api/appointment/[id]/route.ts`
- `src/app/api/doctors/[id]/appointments/route.ts`
- `src/app/api/doctors/[id]/reviews/route.ts`

These issues indicate that a few dynamic route files are either missing or not properly exported as modules. The project should be checked if you want a fully clean build.

### Typo-related error message
The editor message:

> "No value exists in scope for the shorthand property 'ema'. Either declare one or provide an initializer."

usually means a destructured object property like `{ ema }` was used but no variable named `ema` exists. The common fix is to replace it with the correct property name, such as `email`:

```ts
const { email, password } = data;
```

This is a validation/error-checking issue and not necessarily a database issue.

---

## 20. How to Run the Project

### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```

### Run production build
```bash
npm run build
```

### Start production server
```bash
npm run start
```

---

## 21. Best Practice Suggestions

To improve the project quality and maintainability:

- Add consistent error handling middleware
- Add role-based authorization checks to all routes
- Standardize JSON response shapes across all APIs
- Add unit tests for services and auth logic
- Create missing dynamic route files if required
- Use a centralized API response utility
- Add logging and monitoring for production deployment
- Add input validation using Zod across all endpoints

---

## 22. Final Summary

This project is a healthcare management platform built with Next.js and MongoDB. It supports patient, doctor, and admin workflows, including authentication, appointments, reviews, prescriptions, and role-based dashboards.

The system follows a clear layer-based architecture:

- Routes handle HTTP traffic
- Controllers validate input
- Services contain business logic
- Repositories talk to MongoDB
- Models define the database schema
- Components render the frontend experience

The application is well-structured for expansion and can be extended with more advanced roles, patient history, analytics, appointment filters, and notifications.

---

## 23. Developer Notes

This documentation is intended to explain the main project structure and functions in an understandable manner. If you continue developing the project, it is recommended to keep each module focused and avoid mixing route logic, database logic, and UI logic in the same file.

That separation is already well underway here and is one of the strengths of the codebase.
