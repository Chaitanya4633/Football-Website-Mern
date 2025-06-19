import { useEffect, useState } from "react";

function RegisteredUsers() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile")
      .then((res) => res.json())
      .then((data) => setProfiles(data))
      .catch((err) => console.error("Error fetching profiles:", err));
  }, []);

  return (
    <div>
      <h2>Saved Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile._id}>
            <strong>{profile.username}</strong> - {profile.email} ({profile.country})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RegisteredUsers;
