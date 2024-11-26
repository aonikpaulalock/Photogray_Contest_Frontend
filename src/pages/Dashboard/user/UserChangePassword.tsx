import { useState } from "react";
import changePassword from "../../../assets/landingPage/dashboard/changePassword1.png"
const UserChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (newPassword !== confirmPassword) {
      setError("New password and confirm new password do not match.");
    } else {
      setError("");
      alert("Password updated successfully!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-15rem)]">
      {/* The wrapper */}
      <div className="flex items-center justify-center">
        <div className="w-3/6">
          <img
            src={changePassword}
            alt="Illustration"
            className="w-10/12 mx-auto"
          />
        </div>

        {/* Right Section: Form */}
        <div className="w-4/12 p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Change Password
          </h2>
          <div className="mb-4">
            <label
              htmlFor="new-password"
              className="block text-sm font-medium text-gray-700"
            >
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-2 rounded-lg shadow-sm outline-none"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="mt-1 w-full border-[3px] border-blue-gray-200 px-4 py-2 rounded-lg shadow-sm outline-none"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {error && <p className="text-sm text-red-500 mb-4">{error}</p>}
          <div className="flex space-x-4 mt-8">
            <button
              className="flex-1 py-2 rounded-md border-2 border-blue-gray-100 hover:bg-blue-gray-50 transition-colors duration-200"
              onClick={() => {
                setNewPassword("");
                setConfirmPassword("");
                setError("");
              }}
            >
              Close
            </button>
            <button
              className="flex-1 bg-blue-500 text-white py-2 rounded-md shadow hover:bg-blue-600 transition-colors duration-200"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserChangePassword;
