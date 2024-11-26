// import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
// import user from "../../../assets/landingPage/Blogs/blogs-1.png";

// const UserProfile = () => {
//   return (
//     <div className="flex justify-center items-center mt-14 bg-gray-100">
//       <div className="my-auto overflow-hidden p-12 shadow-lg rounded-md bg-white">
//         {/* Profile Header */}
//         <div className="flex items-center p-6">
//           <img
//             src={user}
//             alt="Profile"
//             className="w-28 h-28 rounded-full border-4 border-SecondPrimary border-gray-200 mr-8"
//           />
//           <div>
//             <h2 className="text-2xl font-semibold text-gray-900">Matilda Barnett</h2>
//             <p className="text-gray-500">Photographer @Brime Studios</p>
//             <p className="text-sm text-gray-400">Landscapes are my life & 35mm my weapon of choice.</p>
//           </div>
//         </div>

//         {/* Profile Details */}
//         <div className="p-6 bg-gray-50">
//           <div className="grid grid-cols-2 gap-6 text-sm text-gray-700">
//             <div>
//               <p className="font-semibold text-gray-800">Phone Number</p>
//               <p>830-686-1310</p>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-800">Email</p>
//               <p>matil@studios.com</p>
//             </div>
//             <div>
//               <p className="font-semibold text-gray-800">Address</p>
//               <p>287 Maspeth Ave, Brooklyn</p>
//             </div>
//             <div className="flex items-center space-x-6 text-gray-600">
//               <a href="#" className="text-2xl hover:text-blue-500">
//                 <FaFacebook />
//               </a>
//               <a href="#" className="text-2xl hover:text-blue-400">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="text-2xl hover:text-blue-700">
//                 <FaLinkedin />
//               </a>
//             </div>
//           </div>
//         </div>


//       </div>
//     </div >
//   );
// };

// export default UserProfile;

import { ChangeEvent, useState } from "react";
import userImage from "../../../assets/landingPage/Blogs/blogs-1.png"

const UserProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "Dollie",
    lastName: "Morrison",
    email: "dollie-morrison@gmail.com",
    country: "U.S.A",
    city: "Los Angeles",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert("Profile updated successfully!");
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-[calc(100vh-15rem)]">
      {/* Outer container */}
      <div className="bg-white shadow-lg rounded-lg flex overflow-hidden w-full">

        {/* Left Section: Background Image with Overlay */}
        <div
          className="w-2/3 relative bg-cover bg-center"
          style={{
            backgroundImage: `url(${userImage})`,
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Profile Image on top of the overlay */}
          <div className="absolute bottom-[20%] left-1/2 transform -translate-x-1/2">
            <img
              src={userImage}
              alt="User Profile"
              className="w-32 h-32 rounded-full border-4 border-SecondPrimary"
            />
            <button className="mt-4 px-6 py-2 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors">
              Change Photo
            </button>
          </div>
        </div>

        {/* Right Section: Form */}
        <div className="w-2/3 p-14">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            My Profile
          </h2>

          {/* Input Fields */}
          <div className="space-y-6">
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 outline-none text-sm py-2"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 outline-none text-sm py-2"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                E-mail Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 outline-none text-sm py-2"
              />
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 outline-none text-sm py-2"
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm text-gray-600 mb-1">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 focus:border-blue-500 focus:ring-0 outline-none text-sm py-2"
                />
              </div>
            </div>
          </div>

          {/* Save Button */}
          <div className="mt-8 text-right">
            <button
              onClick={handleSubmit}
              className="px-6 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition-colors"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;




