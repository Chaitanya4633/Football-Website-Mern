import React, { useState, useEffect } from "react";
import axios from "axios";
import passportPic from "../images/Human.png";
import camIcon from "../images/cam.png";
import "../CSS/Profile.css";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(passportPic);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [profile, setProfile] = useState(null);

  // Fetch existing profile data from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/profile")
      .then((response) => {
        if (response.data.length > 0) {
          const fetchedProfile = response.data[0];
          setProfile(fetchedProfile);
          setUsername(fetchedProfile.username);
          setEmail(fetchedProfile.email);
          setCountry(fetchedProfile.country);
          setProfileImage(fetchedProfile.profileImage);
        }
      })
      .catch((error) => console.log("Error fetching profile:", error));
  }, []);

  // Image Upload Preview
  const previewImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  // Submit profile data
  const handleSubmit = async (event) => {
    event.preventDefault();
    const profileData = { username, email, country, profileImage };
    try {
      await axios.post("http://localhost:5000/api/profile", profileData);
      alert("Profile saved successfully!");
      setProfile(profileData); // Update displayed profile after saving
    } catch (error) {
      console.error("Error saving profile:", error);
    }
  };

  // Reset form for new user
  const handleNewUser = () => {
    setProfile(null);
    setUsername("");
    setEmail("");
    setCountry("");
    setProfileImage(passportPic);
  };

  return (
    <div className="Profile-Container">
      <h2 className="profile-title">My Profile</h2>
      <div className="User-Details">
        <div className="profile-pic-container" onClick={() => document.getElementById("fileInput").click()}>
          <img src={profileImage} alt="Profile" className="profile-pic" />
          {!profile && <img src={camIcon} alt="Upload" className="cam-icon" />}
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onChange={previewImage}
            style={{ display: "none" }}
          />
        </div>

        {profile ? (
          <div className="profile-info">
            <h3>{username}</h3>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Country:</strong> {country}</p>
            <button type="button" onClick={handleNewUser}>New User</button> {/* Added New User Button */}
          </div>
        ) : (
          <form className="profile-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="text" placeholder="Enter Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
            <button type="submit">Submit</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Profile;
