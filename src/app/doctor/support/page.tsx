
export default function DoctorSupportPage() {
  return (
    <div className="space-y-6 px-22 py-6 bg-gray-50 min-h-screen">

      <div>
        <h1 className="text-4xl font-semibold text-gray-800">Support</h1>
        <p className="text-gray-500 mt-1">
          Need help? <br/>Contact our support team or report an issue.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

       
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            Contact Support
          </h2>

          <div className="space-y-4 text-gray-700">

            <div>
              <p className="font-medium">📧 Email</p>
              <p>support@hmsclinic.com</p>
            </div>

            <div>
              <p className="font-medium">📞 Phone</p>
              <p>+91 98765 43210</p>
            </div>

            <div>
              <p className="font-medium">⏰ Support Hours</p>
              <p>Monday - Friday</p>
              <p>9:00 AM - 6:00 PM</p>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-xl border p-6 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">
            System Status
          </h2>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span>Dashboard</span>
              <span className="text-green-600 font-medium">
                Operational
              </span>
            </div>

            <div className="flex justify-between">
              <span>Appointments</span>
              <span className="text-green-600 font-medium">
                Operational
              </span>
            </div>

            <div className="flex justify-between">
              <span>Patient Records</span>
              <span className="text-green-600 font-medium">
                Operational
              </span>
            </div>

            <div className="flex justify-between">
              <span>Prescription Service</span>
              <span className="text-green-600 font-medium">
                Operational
              </span>
            </div>
          </div>
        </div>

      </div>

      
      <div className="bg-white rounded-xl border p-6 shadow-sm">

        <h2 className="text-2xl font-semibold mb-4">
          Report an Issue
        </h2>

        <form className="space-y-4">

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"/>

          <select className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500">
            <option>Technical Issue</option>
            <option>Appointment</option>
            <option>Patient Record</option>
            <option>Prescription</option>
            <option>Other</option>
          </select>

          <textarea rows={5} placeholder="Describe your issue..."
            className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"/>

          <button type="submit" className="rounded-lg bg-blue-600 px-5 py-3 text-lg text-white hover:bg-blue-700">
            Submit Request
          </button>

        </form>

      </div>

      <div className="bg-white rounded-xl border p-6 shadow-sm">

        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">

          <div>
            <h3 className="text-lg">
              How do I reset my password?
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Go to Profile → Security → Change Password.
            </p>
          </div>

          <div>
            <h3 className="text-lg">
              How do I update my profile?
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Navigate to Settings and edit your profile information.
            </p>
          </div>

          <div>
            <h3 className="text-lg">
              What should I do if patient data is missing?
            </h3>
            <p className="text-gray-600 text-sm mt-1">
              Contact support with the patient's ID and details of the issue.
            </p>
          </div>

          <div>
            <h3 className="text-lg">
             What should I do if critical lab values aren't syncing?
            </h3>
            <p className="text-gray-600 text-sm mt-1">
             Verify your LIS integration status in System Diagnostics. If status shows offline, contact the IT desk immediately via the Emergency Hot Desk.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}