"use client";
import React, {useState,useRef, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { FaCamera } from "react-icons/fa";
import { useUser } from "@/context/UserContext";
const ProfilePage = () => {
  const { user, setUser } = useUser();
const [preview, setPreview] = useState("");
const [name, setName] = useState("")
 const [image, setImage] = useState(null);
const fileInputRef = useRef();
  useEffect(() => {
    const loadUser = async () => {
      const u = await authClient.getUser();
      setUser(u); 
      setName(u?.name || "");
      setPreview(u?.image || "");
    };
    loadUser();
  }, []);
const handleImageChange = (e) => {
   const file = e.target.files[0];
    if (file) { 
      setImage(file); setPreview(URL.createObjectURL(file));
     } };
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = {
        ...user,
        name,
        image: preview,
      };

      await authClient.updateProfile(updatedUser);

      setUser(updatedUser); 
localStorage.setItem("user", JSON.stringify(updatedUser));
setName("");
    
      alert("✅ Profile Updated!");
    } catch (err) {
      console.error(err);
      alert("❌ Update Failed!");
    }
  };

  if (!user) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-md">

        <h2 className="text-xl font-semibold text-center mb-6">
          Edit Profile
        </h2>

        
        <div className="flex justify-center mb-6">
          <div
            className="relative w-28 h-28 rounded-full bg-gray-200 flex items-center justify-center cursor-pointer overflow-hidden"
            onClick={() => fileInputRef.current.click()}
          >
            {preview ? (
              <img
                src={preview}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-gray-500 text-sm">Add Photo</span>
            )}

            
            <div className="absolute bottom-1 right-1 bg-black text-blue-300 p-2 rounded-full text-xs">
              <FaCamera />
            </div>
          </div>

          <input
            type="file"
            hidden
            ref={fileInputRef}
            onChange={handleImageChange}
          />
        </div>

        
        <form onSubmit={handleUpdate} className="space-y-5">

          
          <div>
            <label className="text-sm text-gray-500">Profile Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your name"
            />
          </div>

          
          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;